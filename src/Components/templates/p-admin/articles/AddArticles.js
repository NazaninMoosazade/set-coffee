"use client";
import React, { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddArticle() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState(null);

  const addArticle = async () => {
    if (!title || !content || !img) {
      swal("لطفاً تمام فیلدهای الزامی را پر کنید", { icon: "warning" });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tags", tags);
    formData.append("img", img);

    const res = await fetch("/api/articles", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      swal({
        title: "مقاله با موفقیت اضافه شد",
        icon: "success",
        buttons: "باشه",
      }).then(() => {
        router.refresh();
      });
    } else {
      swal("خطا در افزودن مقاله", { icon: "error" });
    }
  };

  return (
    <section className="p-6 font-myfont md:p-10">
      <p className="text-right text-2xl md:text-3xl font-semibold mb-8 uppercase relative">
        افزودن مقاله جدید
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* عنوان مقاله */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">عنوان مقاله</label>
          <input
            type="text"
            placeholder="عنوان مقاله را وارد کنید"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* تگ‌ها */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">تگ‌ها</label>
          <input
            type="text"
            placeholder="مثلاً: آموزش، جاوااسکریپت، ری‌اکت"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>

        {/* محتوا */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-lg mb-2">محتوای مقاله</label>
          <textarea
            placeholder="متن کامل مقاله را بنویسید..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="8"
            className="p-3 border-2 border-red-900 rounded-md focus:outline-none resize-y"
          />
        </div>

        {/* تصویر مقاله */}
        <div className="flex flex-col">
          <label className="text-lg mb-2">تصویر مقاله</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
            className="p-2 border-2 border-red-900 rounded-md focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={addArticle}
        className="mt-6 bg-red-900 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors"
      >
        افزودن مقاله
      </button>
    </section>
  );
}

export default AddArticle;
