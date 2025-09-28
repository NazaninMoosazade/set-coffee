import { NextResponse } from "next/server";
import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discout";

export async function POST(req) {
  try {
    await connectToDB(); 
    const body = await req.json();
    const { code, percent, maxUse } = body;

    await DiscountModel.create({
      code,
      percent,
      maxUse,
    });

    return NextResponse.json(
      { message: "Discount code created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
