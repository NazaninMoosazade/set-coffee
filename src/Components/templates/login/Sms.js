"use client";

import React from "react";

const Sms = ({hideOtpForm}) => {
  return (
    <>
      <div className="grid bg-white p-8 sm:p-12 w-full max-w-[380px] font-[shabnam] mx-auto mt-28 mb-8 rounded-xl shadow-md text-center text-black">
        {/* عنوان */}
        <p className="text-base font-[shabnam]">کد تایید</p>

        {/* توضیحات */}
        <span className="text-xs mt-4 text-gray-600 opacity-70 whitespace-nowrap">
          لطفاً کد تأیید ارسال شده را تایپ کنید
        </span>

        {/* شماره */}
        <span className="text-xs mt-2 text-gray-600 opacity-70 whitespace-nowrap">
          09921558293
        </span>

        {/* ورودی کد */}
        <input
          className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 ltr mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
          type="text"
        />

        {/* دکمه ثبت */}
        <button className="mt-4 p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition">
          ثبت کد تایید
        </button>

        {/* ارسال مجدد کد */}
        <p className="text-xs mt-3 opacity-70 cursor-pointer whitespace-nowrap hover:underline">
          ارسال مجدد کد یکبار مصرف
        </p>
      </div>

      {/* لغو */}
      <p onClick={hideOtpForm} className="block w-max mx-auto font-[shabnam] cursor-pointer text-xs text-[#34180e] hover:underline">
        لغو
      </p>
    </>
  );
};

export default Sms;
