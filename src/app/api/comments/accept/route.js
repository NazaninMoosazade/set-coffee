import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

export async function PUT(req) {
  try {
    await connectToDB(); // حتما await
    const { id } = await req.json();

    // تایید کامنت در دیتابیس
    await CommentModel.findByIdAndUpdate(id, { isAccept: true });

    return new Response(
      JSON.stringify({ message: "Comment accepted successfully" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      { status: 500 }
    );
  }
}
