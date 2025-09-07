import Navbar from "@/Components/modules/Navbar/Navbar";
import Articles from "@/Components/templates/index/Articles/Articles";
import Banner from "@/Components/templates/index/banner/Banner";
import Latest from "@/Components/templates/index/latest/latest";
import Promote from "@/Components/templates/index/promote/Promote";
import Footer from "@/Components/modules/Footer/Footer";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

import React from "react";

export default async function page() {
  await connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }
  return (
    <>
      <Navbar isLogin={user} />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
