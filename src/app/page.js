
import React from "react";
import Navbar from "@/Components/modules/Navbar/Navbar";
import Banner from "@/Components/templates/index/banner/Banner";
import Promote from "@/Components/templates/index/promote/Promote";
import Footer from "@/Components/modules/Footer/Footer";
import Latest from "@/Components/templates/index/latest/latest";
import Articles from "@/Components/templates/index/Articles/Articles";

import { authUser } from "@/utils/Server/auth";
import ProductModel from "@/models/Product";
import ArticleModel from "@/models/Article";
import connectToDB from "@/configs/db";

export default async function Page() {
  await connectToDB();

  const user = await authUser();
  const latestProducts = await ProductModel.find({}).sort({ _id: -1 }).limit(8);
  const allArticles = await ArticleModel.find({}).sort({ _id: -1 }).limit(4);

  const productsData = JSON.parse(JSON.stringify(latestProducts));
  const articlesData = JSON.parse(JSON.stringify(allArticles));

  return (
    <>
      <Navbar isLogin={user} />
      <Banner />

      <Latest products={productsData} />

      <Promote />

      <Articles articles={articlesData} />

      <Footer />
    </>
  );
}
