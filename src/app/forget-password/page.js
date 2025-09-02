import React from "react";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="z-[999] h-screen w-full flex overflow-hidden bg-[rgb(237,230,234)] bg-cover bg-fixed">
      {/* سمت فرم */}
      <div data-aos="fade-up" className="w-1/2 flex flex-col justify-center">
        <div className="grid bg-white p-6 w-[380px] mx-auto mt-52 mb-8 rounded-md shadow-md text-center text-black">
          <input
            type="text"
            placeholder="ایمیل / شماره موبایل"
            className="font-shabnam p-3 bg-white text-black rounded border border-black mt-5 w-full text-right placeholder:text-gray-500"
          />
          <button className="mt-4 p-3 cursor-pointer font-shabnam bg-[rgb(52,24,14)] text-white rounded">
            بازنشانی رمزعبور
          </button>
          <Link
            href="/login-register"
            className="text-sm cursor-pointer text-center mt-4 mb-12"
          >
            برگشت به ورود
          </Link>
        </div>
        <Link
          href="/login-register"
          className="block w-max mx-auto font-shabnam cursor-pointer text-sm text-[rgb(52,24,14)]"
        >
          لغو
        </Link>
      </div>

      {/* سمت تصویر */}
      <section className="w-1/2 h-full bg-[rgb(52,24,14)]">
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
};

export default ForgotPassword;
