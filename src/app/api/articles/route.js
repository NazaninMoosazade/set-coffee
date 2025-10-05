import connectToDB from "@/configs/db";
import ArticleModel from "@/models/Article";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    await connectToDB();
    const formData = await req.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const tags = formData.get("tags")?.split(/،|,/).map(t => t.trim()) || [];
    const img = formData.get("img");

    if (!title || !content || !img) {
      return new Response(
        JSON.stringify({ message: "Title, content and image are required" }),
        { status: 400 }
      );
    }

    // ذخیره عکس
    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + "-" + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
    await writeFile(imgPath, buffer);
    const imgUrl = `/uploads/${filename}`;

    const article = await ArticleModel.create({
      title,
      content,
      tags,
      img: imgUrl,
    });

    return new Response(
      JSON.stringify({ message: "Article created successfully", data: article }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const articles = await ArticleModel.find({}, "-__v").sort({ createdAt: -1 });
    return new Response(JSON.stringify(articles), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
