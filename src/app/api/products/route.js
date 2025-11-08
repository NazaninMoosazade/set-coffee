import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    await connectToDB();
    const formData = await req.formData();

    const name = formData.get("name");
    const price = Number(formData.get("price"));
    const shortDescription = formData.get("shortDescription");
    const longDescription = formData.get("longDescription");
    const weight = Number(formData.get("weight"));
    const suitableFor = formData.get("suitableFor");
    const smell = formData.get("smell");
    const tags = formData.get("tags")?.split(/،|,/).map((t) => t.trim()) || [];
    const img = formData.get("img");

    let imgUrl = "";
    if (img) {
      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + "-" + img.name;
      const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
      await writeFile(imgPath, buffer);
      imgUrl = `/uploads/${filename}`;
    }

    const product = await ProductModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
      img: imgUrl,
    });

    return Response.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function GET() {
  await connectToDB();
  const products = await ProductModel.find({}, "-__v").populate("comments");
  return Response.json(products);
}


