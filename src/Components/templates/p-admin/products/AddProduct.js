"use client";
import React, { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddProduct() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [smell, setSmell] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState(null);

  const addProduct = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", Number(price));
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", Number(weight));
    formData.append("suitableFor", suitableFor);
    formData.append("smell", smell);
    formData.append("tags", tags); // 👈 رشته میره، API آرایه میکنه
    if (img) formData.append("img", img);

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر با موفقیت ایجاد شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    } else {
      swal("خطا در ایجاد محصول", { icon: "error" });
    }
  };

  return (
    <section className="p-6 font-myfont font-Bold md:p-10">
      <p className="text-right text-2xl md:text-3xl font-semibold mb-8 uppercase relative">
        افزودن محصول جدید
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* نام محصول */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">نام محصول</label>
          <input
            type="text"
            placeholder="لطفا نام محصول را وارد کنید"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* مبلغ محصول */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">مبلغ محصول</label>
          <input
            type="number"
            placeholder="لطفا مبلغ محصول را وارد کنید"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* توضیحات کوتاه */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">توضیحات کوتاه</label>
          <input
            type="text"
            placeholder="توضیحات کوتاه محصول"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* توضیحات بلند */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">توضیحات بلند</label>
          <textarea
            placeholder="توضیحات بلند محصول"
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* وزن */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">وزن</label>
          <input
            type="number"
            placeholder="وزن محصول"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* مناسب برای */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">مناسب برای</label>
          <input
            type="text"
            placeholder="مناسب برای ..."
            value={suitableFor}
            onChange={(e) => setSuitableFor(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* میزان بو */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">میزان بو</label>
          <input
            type="text"
            placeholder="میزان بو"
            value={smell}
            onChange={(e) => setSmell(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* تگ‌ها */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">تگ‌های محصول</label>
          <input
            type="text"
            placeholder="مثال: قهوه،قهوه ترک،قهوه اسپرسو"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
        {/* عکس */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">تصویر محصول</label>
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            className="p-2 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <button
        onClick={addProduct}
        className="mt-6 bg-red-900 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors"
      >
        افزودن
      </button>
    </section>
  );
}

export default AddProduct;

