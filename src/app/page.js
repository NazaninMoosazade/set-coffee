import React from "react";
import Navbar from "@/Components/modules/Navbar/Navbar";
import Articles from "@/Components/templates/index/Articles/Articles";
import Banner from "@/Components/templates/index/banner/Banner";
import Latest from "@/Components/templates/index/latest/latest";
import Promote from "@/Components/templates/index/promote/Promote";
import Footer from "@/Components/modules/Footer/Footer";
import { authUser } from "@/utils/Server/auth";
import ProductModel from '@/models/Product'
import ArticleModel from "@/models/Article";

export default async function page() {
  const user = await authUser();
  const latestProducts = await ProductModel.find({}).sort({_id : -1}).limit(8)

  const allArtyicles = await ArticleModel.find({}).sort({_id : -1}).limit(4)

  return (
    <>
      <Navbar isLogin={user}/>
      <Banner /> 
      <Latest products={JSON.parse(JSON.stringify(latestProducts))}/> 
      <Promote />
      <Articles articles={JSON.parse(JSON.stringify(allArtyicles))}/>
      <Footer />
    </>
  );
}

// aliHello#00