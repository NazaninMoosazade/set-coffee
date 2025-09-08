// utils/global/auth.js
import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

// Hash و Verify رمز عبور
export const hashPassword = async (password) => await hash(password, 12);
export const verifyPassword = async (password, hashedPassword) => await compare(password, hashedPassword);

// JWT
export const generateAccessToken = (data) =>
  sign({ ...data }, process.env.AccessTokenSecretKey, { expiresIn: "15d" });

export const generateRefreshToken = (data) =>
  sign({ ...data }, process.env.RefreshTokenSecretKey, { expiresIn: "15d" });

export const verifyAccessToken = (token) => {
  try {
    return verify(token, process.env.AccessTokenSecretKey);
  } catch {
    return false;
  }
};

// Validate ها
export const valiadteEmail = (email) =>
  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g.test(email);

export const valiadtePhone = (phone) =>
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(phone);

export const valiadtePassword = (password) =>
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/.test(password);
