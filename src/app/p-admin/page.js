import React from "react";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import Box from "@/Components/templates/p-user/index/Box";

import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import UserModel from "@/models/User";
import ProductModel from "@/models/Product";
import connectToDB from "@/configs/db";

async function AdminHomePage() {
  connectToDB();
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const products = await ProductModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main className="rtl">
        {/* بخش باکس‌های آماری */}
        <section className="flex flex-wrap gap-5 mt-12 px-10">
          <Box title="مجموع تیکت های دریافتی" value={tickets.length} />
          <Box title="مجموع محصولات سایت" value={products.length} />
          <Box title="مجموع سفارشات" value="333" />
          <Box title="مجموع کاربر های سایت" value={users.length} />
        </section>

        {/* بخش چارت‌ها */}
        <div className="flex flex-col md:flex-row gap-3 px-11 mt-8">
          <section className="bg-[#711d1c0f] p-5 rounded text-right w-full md:w-1/2">
            <p className="mb-2 font-medium">آمار فروش</p>
          </section>
          <section className="bg-[#711d1c0f] p-5 rounded text-right w-full md:w-1/2">
            <p className="mb-2 font-medium">نرخ رشد</p>
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
