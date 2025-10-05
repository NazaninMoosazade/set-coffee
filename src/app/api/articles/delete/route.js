import connectToDB from "@/configs/db";
import ArticleModel from "@/models/Article";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { id } = await req.json();  

    const article = await ArticleModel.findById(id);
    if (!article) {
      return NextResponse.json({ message: "مقاله یافت نشد" }, { status: 404 });
    }

    
    if (article.img) {
      const imgPath = path.join(process.cwd(), "public", article.img);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await ArticleModel.findByIdAndDelete(id);

    return NextResponse.json({ message: "مقاله با موفقیت حذف شد" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
