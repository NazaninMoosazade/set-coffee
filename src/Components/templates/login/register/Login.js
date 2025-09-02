"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sms from "../Sms";

const Login = ({ showRegisterForm }) => {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

  const hideOtpForm = () => {
    setIsLoginWithOtp(false);
  };

  return (
    <>
      {!isLoginWithOtp ? (
          <div className="grid bg-white p-6 w-full max-w-[380px] font-[shabnam] mx-auto mt-20 mb-8 rounded-xl shadow-lg text-center text-black">
            {/* ایمیل / شماره موبایل */}
            <input
              className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="text"
              placeholder="ایمیل/شماره موبایل"
            />

            {/* رمز عبور */}
            <input
              className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="password"
              placeholder="رمز عبور"
            />

            {/* چک‌باکس */}
            <div className="flex my-5 justify-end flex-row-reverse items-center gap-2">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-300 rounded-sm relative 
                       checked:bg-[#34180e] checked:border-[#34180e] 
                       focus:ring-2 focus:ring-gray-300"
              />
              <p className="text-sm font-[shabnam]">مرا به یاد داشته باش</p>
            </div>

            {/* دکمه ورود */}
            <button className="p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition">
              ورود
            </button>

            {/* فراموشی رمز */}
            <Link
              href={"/forget-password"}
              className="text-sm my-4 cursor-pointer text-[#34180e] hover:underline"
            >
              رمز عبور را فراموش کرده‌اید؟
            </Link>

            {/* ورود با کد یکبار مصرف */}
            <button
              onClick={() => setIsLoginWithOtp(true)}
              className="p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition"
            >
              ورود با کد یکبار مصرف
            </button>

            {/* ثبت نام */}
            <span className="text-right mt-7 mb-5 text-sm block">
              آیا حساب کاربری ندارید؟
            </span>
            <button
              onClick={showRegisterForm}
              className="text-gray-700 border border-gray-300 mb-12 cursor-pointer p-3 font-[shabnam] bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              ثبت نام
            </button>
          </div>
      ) : (

          <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Login;
