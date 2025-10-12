"use client";

import React, { useState } from "react";
import Link from "next/link";
import { showSwal } from "@/utils/helper";
import { valiadteEmail, valiadtePassword } from "@/utils/global/auth";
import { useRouter } from "next/navigation";

const Login = ({ showRegisterForm }) => {
  const router = useRouter();
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const [password, setPassword] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  const hideOtpForm = () => {
    setIsLoginWithOtp(false);
  };

  const loginWithPassword = async () => {
    if (!phoneOrEmail) {
      return showSwal(
        "لطفا شماره تماس  یا ایمیل را وارد نمایید",
        "error",
        "چشم"
      );
    }

    const isValidEmail = valiadteEmail(phoneOrEmail);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده صحیح نیست", "error", "تلاش مجدد");
    }

    if (!password) {
      return showSwal("پسوورد را وارد نمایید ", "error", "تلاش مجدد");
    }

    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal(" پسوورد به اندازه کافی قوی نیست ", "error", "تلاش مجدد");
    }

    const user = { email: phoneOrEmail, password };

    // console.log("user=>", user);

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      showSwal(" با موفقیت لاگین شدید", "success", "ورود به پنل کاربری");

      router.replace("p-user");
    } else if (res.status === 422 || res.status === 410) {
      showSwal("کاربری با این اطلاعات یافت نشد", "error", "تلاش مجدد");
    } else if (res.status === 419) {
      showSwal("ایمیل یا پسوورد صحیح نیست", "error", "تلاش مجدد");
    }
  };



  return (
    <>
      <div className="grid bg-white font-myfont font-Bold p-6 w-full max-w-[380px] mx-auto mt-20 mb-8 rounded-xl shadow-lg text-center text-black">
        {/* ایمیل / شماره موبایل */}
        <input
          className="font-myfont font-Light p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
          type="text"
          placeholder="ایمیل/شماره موبایل"
          value={phoneOrEmail}
          onChange={(event) => setPhoneOrEmail(event.target.value)}
        />

        {/* رمز عبور */}
        <input
          className="font-myfont font-Light p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {/* چک‌باکس */}
        <div className="flex my-5 justify-end flex-row-reverse items-center gap-2">
          <input
            type="checkbox"
            className="appearance-none w-4 h-4 border border-gray-300 rounded-sm relative 
                       checked:bg-[#34180e] checked:border-[#34180e] 
                       focus:ring-2 focus:ring-gray-300"
          />
          <p className="text-sm font-myfont font-Light">مرا به یاد داشته باش</p>
        </div>

        {/* دکمه ورود */}
        <button
          onClick={loginWithPassword}
          className="p-3 cursor-pointer font-myfont font-Bold bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition"
        >
          ورود
        </button>


        {/* ثبت نام */}
        <span className="font-myfont font-Bold text-right mt-7 mb-5 text-sm block">
          آیا حساب کاربری ندارید؟
        </span>
        <button
          onClick={showRegisterForm}
          className="text-gray-700 font-myfont font-Light border border-gray-300 mb-12 cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        >
          ثبت نام
        </button>
      </div>
    </>
  );
};

export default Login;
