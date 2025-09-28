import React from 'react'
import AdminPanelLayout from '@/Components/layouts/AdminPanelLayout'
import DataTable from '@/Components/templates/p-admin/comments/DataTable'
import connectToDB from '@/configs/db'
import CommentModel from "@/models/Comment";

const page = async () => {
  connectToDB();
  const comments = await CommentModel.find({})
    .sort({ _id: -1 })
    // .populate("user")
    .populate("productID")
    .lean();

  return (
    <AdminPanelLayout>
      <main>
        {comments.length === 0 ? (
          <p >کامنتی وجود ندارد</p>
        ) : (
          <DataTable
            comments={JSON.parse(JSON.stringify(comments))}
            title="لیست کامنت‌ها"
          />
        )}
      </main>
    </AdminPanelLayout>
  );
};

export default page