"use server";
import { authOptions } from "@/app/lib/auth";
import db from "@repo/db/client";
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
        message: "Wallet updated successfully",
        data: response.amount,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while creating OnRamp transaction.",
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
        message: "Transactions fetched succesfully",
        data: userBalance.amount,
      };
    }
    return {
      success: false,
      message: "Sorry no balance found",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong while fetching OnRamp transaction.",
    };
  }
}
