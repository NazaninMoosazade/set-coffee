
import React from "react";
import DataTable from "@/Components/templates/p-user/comments/DataTable";
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import connectToDB from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/Server/auth";

const page = async () => {
  connectToDB();
  const user = await authUser();
   const comments = await Commentmodel.find(
    { user: String(user._id) },
    "-__v"
  ).populate("productID", "name").lean();

  return (
    <UserPanelLayout>
      <main>
        <DataTable comments={JSON.parse(JSON.stringify(comments))} title={"لیست کامنت ها"} />
      </main>
    </UserPanelLayout>
  );
};

export default page;
