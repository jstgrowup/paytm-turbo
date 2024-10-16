import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/client";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const paymentInformation = {
      token: body.token,
      userId: body.user_identifier,
      amount: body.amount,
    };
    await db.$transaction([
      db.balance.update({
        where: {
          userId: paymentInformation.userId,
        },
        data: {
          amount: {
            increment: paymentInformation.amount,
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    return NextResponse.json(
      { message: "Payment processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong while capturing the transaction" },
      { status: 500 }
    );
  }
}
