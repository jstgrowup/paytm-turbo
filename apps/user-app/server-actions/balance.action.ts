"use server";
import { authOptions } from "@/app/lib/auth";
import db from "@repo/db/client";
import { TRANSACTION_CONSTANTS } from "@repo/utils/constants";
import { getServerSession } from "next-auth";
export async function addBalanceAction(amount: number) {
  try {
    const session: any = await getServerSession(authOptions);
    const userId = session?.user?.id;
    if (!userId) {
      return { success: false, message: "Unauthorized user" };
    }

    const response = await db.balance.update({
      where: {
        userId: userId,
      },
      data: {
        amount: { increment: amount },
      },
    });
    if (response) {
      return {
        success: true,
        message: TRANSACTION_CONSTANTS.WALLET_UPDATED,
        data: response.amount,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: TRANSACTION_CONSTANTS.ERRROR_WHILE_ONRAMP,
    };
  }
}
export async function getWalletBalance() {
  try {
    const session: any = await getServerSession(authOptions);
    const userId = session?.user?.id;
    if (!userId) {
      return { success: false, message: "Unauthorized user" };
    }
    const userBalance = await db.balance.findUnique({
      where: {
        userId: userId,
      },
    });
    if (userBalance) {
      return {
        success: true,
        message: TRANSACTION_CONSTANTS.TRANSACTIONS_FETCHED,
        data: userBalance.amount,
      };
    }
    return {
      success: false,
      message: TRANSACTION_CONSTANTS.NO_BALANCE_RECORD,
    };
  } catch (error) {
    return {
      success: false,
      message: TRANSACTION_CONSTANTS.ERRROR_WHILE_ONRAMP,
    };
  }
}
