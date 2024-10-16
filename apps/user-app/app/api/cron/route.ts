import { NextResponse } from "next/server";
import db from "@repo/db/client";
export async function GET(request: Request) {
  try {
    await db.$transaction([
      db.onRampTransaction.updateMany({
        where: {
          status: "Success",
        },
        data: {
          status: "Processing",
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Successfully updated the transactions",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
