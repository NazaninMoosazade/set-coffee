import React from "react";

function ArticlesTable({ articles }) {
  return (
    <div className="overflow-x-auto font-myfont font-Bold">
      <table className="w-full bg-[#f2f7fd] rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#e4ebf7] text-black text-sm md:text-base">
            <th className="px-4 py-2 text-center">شناسه</th>
            <th className="px-4 py-2 text-center">تصویر</th>
            <th className="px-4 py-2 text-center">عنوان مقاله</th>
            <th className="px-4 py-2 text-center">تگ‌ها</th>
            <th className="px-4 py-2 text-center">تاریخ ایجاد</th>
            <th className="px-4 py-2 text-center">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr
              key={article._id}
              className="bg-white text-sm md:text-base border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2 text-center">{index + 1}</td>

              <td className="px-4 py-2 text-center">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-12 h-12 object-cover mx-auto rounded-md border"
                />
              </td>

              <td className="px-4 py-2 text-center">{article.title}</td>

              <td className="px-4 py-2 text-center">
                {article.tags?.join("، ") || "-"}
              </td>

              <td className="px-4 py-2 text-center">
                {new Date(article.createdAt).toLocaleDateString("fa-IR")}
              </td>

              <td className="px-4 py-2 text-center space-x-2 space-x-reverse">
              
                <button className="bg-red-700 text-white px-3 py-1 rounded text-xs md:text-sm hover:bg-red-800 transition">
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArticlesTable;
