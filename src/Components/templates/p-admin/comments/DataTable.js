"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helper";

export default function DataTable({ comments, title }) {
  const router = useRouter();

  const showCommentBody = (body) => {
    showSwal(body, undefined, "خوندم");
  };

  return (
    <div className="px-4 md:px-8">
      {/* عنوان */}
      <div className="relative mt-8">
        <h1 className="relative z-10 text-2xl md:text-3xl font-medium text-right uppercase inline-block bg-white pr-6">
          {title}
        </h1>
        <div className="absolute top-1/2 left-0 right-0 border-b border-[#711d1c] shadow-sm"></div>
      </div>

      {/* جدول */}
      <div className="overflow-x-auto mt-8">
        <table className="w-full border-collapse bg-[#f2f7fd] rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-center">شناسه</th>
              <th className="p-3 text-center">کاربر</th>
              <th className="p-3 text-center">ایمیل</th>
              <th className="p-3 text-center">امتیاز</th>
              <th className="p-3 text-center">محصول</th>
              <th className="p-3 text-center">تاریخ ثبت</th>
              <th className="p-3 text-center">مشاهده</th>
              <th className="p-3 text-center">ویرایش</th>
              <th className="p-3 text-center">حذف</th>
              <th className="p-3 text-center">تایید</th>
              <th className="p-3 text-center">پاسخ</th>
              <th className="p-3 text-center">بن</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr
                key={comment._id}
                className="bg-white even:bg-gray-50 text-sm md:text-base"
              >
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 text-center">{comment.username}</td>
                <td className="p-3 text-center">{comment.email}</td>
                <td className="p-3 text-center">{comment.score}</td>
                <td className="p-3 text-center">{comment.productID.name}</td>
                <td className="p-3 text-center">
                  {new Date(comment.date).toLocaleDateString("fa-IR")}
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-black text-white px-3 py-1 text-xs md:text-sm hover:bg-gray-800 transition"
                    onClick={() => showCommentBody(comment.body)}
                  >
                    مشاهده
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-black text-white px-3 py-1 text-xs md:text-sm hover:bg-gray-800 transition"
                  >
                    ویرایش
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-[#711d1c] text-white px-3 py-1 text-xs md:text-sm hover:bg-red-800 transition"
                  >
                    حذف
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-[#711d1c] text-white px-3 py-1 text-xs md:text-sm hover:bg-red-800 transition"
                  >
                    تایید
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-[#711d1c] text-white px-3 py-1 text-xs md:text-sm hover:bg-red-800 transition"
                  >
                    پاسخ
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-[#711d1c] text-white px-3 py-1 text-xs md:text-sm hover:bg-red-800 transition"
                  >
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
