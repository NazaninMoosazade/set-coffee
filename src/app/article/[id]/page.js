import React from "react";
import Footer from "@/Components/modules/Footer/Footer";
import Navbar from "@/Components/modules/Navbar/Navbar";
import { authUser } from "@/utils/Server/auth";
import ArticleModel from "@/models/Article";
import connectToDB from "@/configs/db";

const ArticlePage = async ({ params }) => {
  try {
    await connectToDB();

    // گرفتن کاربر (برای نمایش Navbar)
    let user = null;
    try {
      user = await authUser();
    } catch (err) {
      console.warn("User not authenticated:", err.message);
    }

    const { id } = params;

    // گرفتن مقاله از دیتابیس
    const article = await ArticleModel.findById(id);

    if (!article) {
      return (
        <>
          <Navbar isLogin={user} />
          <div className="container mx-auto text-center mt-20 px-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              مقاله یافت نشد!
            </h1>
          </div>
          <Footer />
        </>
      );
    }

    const formattedDate = new Date(article.createdAt).toLocaleDateString(
      "fa-IR",
      { year: "numeric", month: "long", day: "numeric" }
    );

    return (
      <>
        <Navbar isLogin={user} />
        <main className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
          {/* عنوان و تاریخ */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <p className="text-sm md:text-base text-gray-500 mb-4">{formattedDate}</p>

          {/* تگ‌ها */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-green-600 text-white px-3 py-1 text-xs md:text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* تصویر مقاله */}
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-auto rounded-lg mb-6 shadow-md object-cover"
          />

          {/* متن مقاله */}
          <div className="prose md:prose-lg lg:prose-xl text-justify">
            <p>{article.content}</p>
          </div>
        </main>
        <Footer />
      </>
    );
  } catch (err) {
    console.error("Error loading article page:", err.message);
    return (
      <div className="container mx-auto text-center mt-20 px-4">
        <h1 className="text-2xl font-bold">خطا در بارگذاری مقاله</h1>
        <p className="text-gray-500 mt-2">{err.message}</p>
      </div>
    );
  }
};

export default ArticlePage;
