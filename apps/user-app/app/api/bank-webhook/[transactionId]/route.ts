import { NextResponse } from "next/server";
import db from "@repo/db/client";
import { TRANSACTION_CONSTANTS } from "@repo/utils/constants";
export async function GET(
  req: Request,
  { params }: { params: { transactionId: string } }
) {
  try {
    const { transactionId } = params;

    const result = await db.$transaction(async () => {
      const transaction = await db.onRampTransaction.findUnique({
        where: { id: transactionId },
      });
      if (!transaction) {
        throw new Error("Transaction not found");
      }
      return db.onRampTransaction.update({
        where: { id: transactionId },
        data: { status: "Success" },
      });
    });
    if (result) {
      return NextResponse.json({
        success: true,
        message: TRANSACTION_CONSTANTS.TRANSACTION_UPDATED_SUCCESSFUL,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
