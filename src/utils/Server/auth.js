// utils/server/auth.js
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { verifyAccessToken } from "../global/auth";

// احراز هویت کاربر سمت سرور
export const authUser = async () => {
  await connectToDB();

  const token = cookies().get("token")?.value;
  if (!token) return null;

  const payload = verifyAccessToken(token);
  if (!payload) return null;

  const user = await UserModel.findOne({ email: payload.email });
  return user || null;
};
