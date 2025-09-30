import connectToDB from "@/configs/db";
import model from "@/models/Discout";

export async function PUT(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const { code } = body;

    // پیدا کردن کد تخفیف
    const discount = await model.findOne({ code });
    if (!discount) {
      return Response.json({ message: "کد پیدا نشد!" }, { status: 404 });
    }

    // اگر به سقف استفاده رسیده باشه
    if (discount.uses >= discount.maxUse) {
      return Response.json(
        { message: "حداکثر دفعات استفاده از این کد پر شده" },
        { status: 422 }
      );
    }

    // افزایش یک واحدی تعداد استفاده و گرفتن نسخه‌ی جدید
    const updatedDiscount = await model.findOneAndUpdate(
      { code },
      { $inc: { uses: 1 } },
      { new: true } // مقدار جدید رو برمی‌گردونه
    );

    return Response.json(updatedDiscount, { status: 200 });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
