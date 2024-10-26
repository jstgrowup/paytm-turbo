"use server";
import { authOptions } from "@/app/lib/auth";
import db from "@repo/db/client";
import { P2P_CONSTANTS } from "@repo/utils/constants";
import { getServerSession } from "next-auth";
export async function sendMoneyAction(amount: number, email: string) {
  try {
    if (amount <= 0) {
      throw new Error(P2P_CONSTANTS.PLEASE_ENTER_AN_AMOUNT);
    }
    const session: any = await getServerSession(authOptions);
    const userId = session?.user?.id;
    if (!userId) {
      return { success: false, message: "Unauthorized user" };
    }
    const toUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!toUser) {
      throw new Error(P2P_CONSTANTS.RECIEVERS_EMAIL_NOT_FOUND);
    }

    const p2presponse = await db.$transaction(async (transaction) => {
      await transaction.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${userId} FOR UPDATE`;
      const sendersBalance = await transaction.balance.findUnique({
        where: { userId: userId },
      });
      if (sendersBalance && sendersBalance?.amount < amount) {
        throw new Error(P2P_CONSTANTS.INSUFFICIENT_BALANCE);
      }
      await transaction.balance.update({
        where: {
          userId: userId,
        },
        data: { amount: { decrement: amount } },
      });

      await transaction.balance.update({
        where: {
          userId: toUser.id,
        },
        data: {
          amount: { increment: amount },
        },
      });
      await transaction.p2pTransfer.create({
        data: {
          amount,
          timestamp: new Date(),
          sendersUserId: userId,
          recieversUserId: toUser.id,
          transactionType: "Debit",
        },
      });

      return true;
    });
    if (p2presponse) {
      return {
        success: true,
        message: P2P_CONSTANTS.P2P_SUCCESFULL,
      };
    }
  } catch (error: any) {
    throw new Error(error.message || "An unexpected error occurred");
  }
}
