"use client";

import React, { useState } from "react";

const Register = () => {
  const [registerWithPass, setRegisterWithPass] = useState(false);

  return (
    <>
      <div className="grid bg-white p-6 w-full max-w-[380px] font-[shabnam] mx-auto mt-20 mb-8 rounded-xl shadow-lg text-center text-black">
        {/* نام */}
        <input
          className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
          type="text"
          placeholder="نام"
        />

        {/* شماره موبایل */}
        <input
          className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
          type="text"
          placeholder="شماره موبایل"
        />

        {/* ایمیل */}
        <input
          className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
          type="email"
          placeholder="ایمیل (دلخواه)"
        />

        {/* رمز عبور (در صورت نیاز) */}
        {registerWithPass && (
          <input
            className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
            type="password"
            placeholder="رمز عبور"
          />
        )}

        {/* دکمه ثبت نام با کد تایید */}
        <p
          onClick={() => setRegisterWithPass(false)}
          className="mt-4 p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition"
        >
          ثبت نام با کد تایید
        </p>

        {/* دکمه ثبت نام با رمزعبور */}
        <button
          onClick={() => setRegisterWithPass(true)}
          className="mt-3 p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition"
        >
          ثبت نام با رمز عبور
        </button>

        {/* برگشت به ورود */}
        <p className="text-sm text-center mt-4 cursor-pointer mb-12 hover:underline">
          برگشت به ورود
        </p>
      </div>

      {/* لغو */}
      {/* <p className="block w-max mx-auto font-[shabnam] cursor-pointer text-sm text-[#34180e] hover:underline">
        لغو
      </p> */}
    </>
  );
};

export default Register;
