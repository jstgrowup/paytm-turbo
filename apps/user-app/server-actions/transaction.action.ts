"use server";
import { authOptions } from "@/app/lib/auth";
import db from "@repo/db/client";
import { OnRampTransactionsActionResponse } from "@repo/utils/types";
import { getServerSession } from "next-auth";

import { v4 as uuidv4 } from "uuid";
export async function createOnRampTransactions(
  amount: number,
  provider: string
) {
  try {
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
      return {
        success: true,
        message: "Transaction created successfully",
      };
    }
  } catch (error) {
    console.log("error:", error);
    return {
      success: false,
      message: "Something went wrong while creating OnRamp transaction.",
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
      where: {
        userId,
      },
    });
    return {
      success: false,
      message: "Unauthorized user",
      data: userTransactions,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while fetching OnRamp transaction.",
    };
  }
}
