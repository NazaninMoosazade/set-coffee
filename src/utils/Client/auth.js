// utils/client/auth.js
import { verifyAccessToken } from "../global/auth";

// گرفتن توکن از localStorage
export const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = JSON.parse(localStorage.getItem("user"));
    return data?.token || null;
  }
  return null;
};

// decode توکن روی کلاینت
export const decodeToken = (token) => {
  if (!token) return null;
  try {
    return verifyAccessToken(token); // فقط decode بدون secret هم میشه
  } catch {
    return null;
  }
};
