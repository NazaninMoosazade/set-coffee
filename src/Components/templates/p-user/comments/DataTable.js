"use client";

import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { showSwal } from "@/utils/helper";

export default function DataTable({ title, comments }) {
  const [clientComments] = useState(comments || []); // مقداردهی اولیه از props

  const showCommentBody = (commentBody) => {
    showSwal(commentBody, undefined, "اوکی");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="relative mt-8 text-right">
        <h1 className="text-2xl sm:text-3xl font-medium inline-block relative z-10 px-3 sm:px-4 bg-white">
          {title}
        </h1>
        <div className="absolute top-1/2 left-0 w-[95%] border-b-2 border-red-900 z-0"></div>
      </div>

      <div className="mt-6 bg-[#f2f7fd] p-4 sm:p-10 rounded-lg overflow-x-auto">
        <table className="w-full min-w-[600px] text-center border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th>شناسه</th>
              <th>تاریخ</th>
              <th>محصول</th>
              <th>امتیاز</th>
              <th>وضعیت</th>
              <th>مشاهده</th>
            </tr>
          </thead>
          <tbody>
            {clientComments.length > 0 ? (
              clientComments.map((comment, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50 transition">
                  <td>{index + 1}</td>
                  <td>{new Date(comment.date).toLocaleDateString("fa-IR")}</td>
                  <td>{comment.productID?.name || "-"}</td>
                  <td className="flex justify-center">
                    {[...Array(5)].map((_, i) =>
                      i < comment.score ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                  </td>
                  <td>
                    <button
                      className={`text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded w-full ${
                        comment.isAccept ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {comment.isAccept ? "تایید شده" : "در انتظار تایید"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => showCommentBody(comment.body)}
                      className="bg-black text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded w-full hover:bg-gray-800 transition"
                    >
                      مشاهده
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-500">
                  هیچ نظری موجود نیست
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
