import React from "react";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import DataTable from "@/Components/templates/p-admin/users/Table";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

const page = async () => {
  await connectToDB();
  const users = await UserModel.find({}).lean();

  return (
    <>
      <AdminPanelLayout>
        <main>
          {users.length === 0 ? (
            <p className="text-white font-myfont font-Bold bg-[#711d1c] px-8 py-3 w-max mx-auto my-60 text-2xl rounded-md">
              کاربری وجود ندارد
            </p>
          ) : (
            <DataTable
              users={JSON.parse(JSON.stringify(users))}
              title="لیست کاربران"
            />
          )}
        </main>
      </AdminPanelLayout>
    </>
  );
};

export default page;
