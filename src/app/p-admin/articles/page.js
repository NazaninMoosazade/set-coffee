import React from "react";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import AddArticle from "@/Components/templates/p-admin/articles/AddArticles";
import DataTable from "@/Components/templates/p-admin/articles/DataTable";
import connectToDB from "@/configs/db";
import ArticleModel from "@/models/Article";

const page = async () => {
  await connectToDB();
  const articles = await ArticleModel.find({}).sort({ _id: -1 }).lean();

  return (
    <>
      <AdminPanelLayout>
        <AddArticle />
        <DataTable
          articles={JSON.parse(JSON.stringify(articles))}
          title="لیست محصولات"
        />
      </AdminPanelLayout>
    </>
  );
};

export default page;
