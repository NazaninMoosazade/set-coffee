import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const { name, price, shortDescription, longDescription, weight, suitableFor, smell, tags } = body;

    const product = await ProductModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    });

    return NextResponse.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const products = await ProductModel.find({}, "-__v").populate("comments");
    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}
