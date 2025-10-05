import React from "react";
import Navbar from "@/Components/modules/Navbar/Navbar";
import Footer from "@/Components/modules/Footer/Footer";
import ArticleModel from "@/models/Article";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/Server/auth";
import Link from "next/link";

// این کامپوننت Server Component هست
const ArticlePage = async ({ params }) => {
  // اتصال به دیتابیس
  await connectToDB();

  // گرفتن کاربر (برای Navbar)
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
      <Navbar isLogin={user} /> {/* Client Component */}
      <main className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* عنوان و تاریخ */}
        <h1 className="text-3xl md:text-5xl font-myfont font-Bold mb-4">{article.title}</h1>
        <p className="text-sm md:text-base text-gray-500 font-myfont font-Light mb-4">{formattedDate}</p>

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
        <div className="font-myfont font-Bold text-justify">
          <p>{article.content}</p>
        </div>

        {/* مقالات مرتبط */}
        <RelatedArticles currentId={id} />
      </main>
      <Footer /> {/* Client Component */}
    </>
  );
};

export default ArticlePage;

// ======== مقالات مرتبط ========
const RelatedArticles = async ({ currentId }) => {
  await connectToDB();
  const articles = await ArticleModel.find({ _id: { $ne: currentId } })
    .sort({ _id: -1 })
    .limit(4);

  if (!articles.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-600">
        مقالات مرتبط
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((art) => (
          <Link
            key={art._id}
            href={`/article/${art._id}`}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={art.img}
              alt={art.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-semibold text-sm md:text-base">
                {art.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
