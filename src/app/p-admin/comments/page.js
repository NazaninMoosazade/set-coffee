import React from 'react';
import AdminPanelLayout from '@/Components/layouts/AdminPanelLayout';
import DataTable from '@/Components/templates/p-admin/comments/DataTable';
import connectToDB from '@/configs/db';
import CommentModel from "@/models/Comment";

const page = async () => {
  await connectToDB();
  const comments = await CommentModel.find({})
    .sort({ _id: -1 })
    .populate("productID")
    .lean();

  return (
    <AdminPanelLayout>
      <main>
        {comments.length === 0 ? (
          <p className='text-white font-myfont font-Bold bg-red-900 py-4 px-8 mt-8 rounded text-lg md:text-xl text-center'>کامنتی وجود ندارد</p>
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

export default page;
