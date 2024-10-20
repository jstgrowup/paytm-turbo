"use server";
import { authOptions } from "@/app/lib/auth";
import db from "@repo/db/client";
import { ApiClient } from "@repo/utils/api-client";
import { TRANSACTION_CONSTANTS } from "@repo/utils/constants";
import { OnRampTransactionsActionResponse } from "@repo/utils/types";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";
export async function createOnRampTransactions(
  amount: number,
  provider: string
) {
  try {
    const api = new ApiClient(process.env.BANK_WEBHOOK_SERVER ?? "");
    const session: any = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const tokenFromBank = uuidv4();
    if (!userId) {
      return { success: false, message: "Unauthorized user" };
    }
    const newTransaction = await db.onRampTransaction.create({
      data: {
        status: "Processing",
        userId,
        amount,
        startTime: new Date(),
        provider,
        token: tokenFromBank,
      },
    });

    if (newTransaction) {
      const response = {
        success: true,
        message: TRANSACTION_CONSTANTS.TRANSACTION_CREATED_SUCCESSFUL,
      };
      setTimeout(async () => {
        try {
          const transactionResponse = await api.get(
            `/api/bank-webhook/${newTransaction.id}`
          );
          if (transactionResponse.success) {
            return db.balance
              .update({
                where: {
                  userId: userId,
                },
                data: {
                  amount: { increment: amount },
                },
              })
              .then(() => {
                return {
                  success: true,
                  message: TRANSACTION_CONSTANTS.BALANCE_UPDATED,
                };
              });
          } else {
            await db.onRampTransaction.update({
              where: {
                id: newTransaction.id,
              },
              data: {
                status: "Failure",
              },
            });
          }
        } catch (error: any) {
          throw new Error("Error updating bank transaction:");
        }
      }, 5000);

      return response;
    }
  } catch (error) {
    return {
      success: false,
      message: TRANSACTION_CONSTANTS.ERRROR_WHILE_ONRAMP,
    };
  }
}
export async function getOnRampTransactions(): Promise<OnRampTransactionsActionResponse> {
  try {
    const session: any = await getServerSession(authOptions);
    const userId = session?.user?.id;
    if (!userId) {
      return { success: false, message: "Unauthorized user" };
    }
    const userTransactions = await db.onRampTransaction.findMany({
      orderBy: {
        startTime: "desc",
      },
      where: {
        userId,
      },
    });
    return {
      success: true,
      message: TRANSACTION_CONSTANTS.TRANSACTIONS_FETCHED,
      data: userTransactions,
    };
  } catch (error) {
    return {
      success: false,
      message: TRANSACTION_CONSTANTS.ERRROR_WHILE_ONRAMP,
    };
  }
}
