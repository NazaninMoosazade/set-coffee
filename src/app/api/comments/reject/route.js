import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

export async function PUT(req) {
  try {
    await connectToDB();
    const { id } = await req.json();

    await CommentModel.findByIdAndDelete(id); // حذف واقعی از دیتابیس

    return new Response(JSON.stringify({ message: "Comment deleted successfully" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
