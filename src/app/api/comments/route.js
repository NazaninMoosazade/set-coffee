import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { username, body, email, score, productID } = reqBody;

    // Validation (می‌توانید بعدا اضافه کنید)

    const comment = await CommentModel.create({
      username,
      body,
      email,
      score,
      productID,
    });

    await ProductModel.findOneAndUpdate(
      { _id: productID },
      { $push: { comments: comment._id } }
    );

    return NextResponse.json(
      {
        message: "Comment created successfully :))",
        data: comment,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const comments = await CommentModel.find({}, "-__v");
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
