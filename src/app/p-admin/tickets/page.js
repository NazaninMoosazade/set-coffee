import React from "react";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import DataTable from "@/Components/templates/p-admin/tickets/Table";
import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";

const page = async () => {
  connectToDB();
  const tickets = await TicketModel.find({})
    .sort({ _id: -1 })
    .populate("user")
    .populate("department")
    .lean();

  return (
    <>
      <AdminPanelLayout>
        <main>
          {tickets.length === 0 ? (
            <p className="text-white font-myfont font-Bold bg-[#711d1c] px-8 py-3 w-max mx-auto my-60 text-2xl rounded-md">
              کاربری وجود ندارد
            </p>
          ) : (
            <DataTable
              tickets={JSON.parse(JSON.stringify(tickets))}
              title="لیست کاربران"
            />
          )}
        </main>
      </AdminPanelLayout>
    </>
  );
};

export default page;
