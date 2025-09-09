"use client"

import { IoMdStar } from "react-icons/io";

const CommentForm = () => {

  


  return (
    <div className="w-full bg-white p-4 lg:p-6 rounded-lg shadow-sm">
      <p className="text-sm lg:text-base font-bold mb-2">دیدگاه خود را بنویسید</p>
      <p className="text-xs lg:text-sm text-gray-600">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-500">*</span>
      </p>

      {/* Rating */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-4">
        <p className="text-sm lg:text-base">امتیاز شما :</p>
        <div className="flex gap-1 text-gray-400 text-xl">
          <IoMdStar className="hover:text-orange-500 cursor-pointer" />
          <IoMdStar className="hover:text-orange-500 cursor-pointer" />
          <IoMdStar className="hover:text-orange-500 cursor-pointer" />
          <IoMdStar className="hover:text-orange-500 cursor-pointer" />
          <IoMdStar className="hover:text-orange-500 cursor-pointer" />
        </div>
      </div>

      {/* Comment Text */}
      <div className="mt-6">
        <label className="block text-sm lg:text-base mb-1">
          دیدگاه شما <span className="text-red-500">*</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          required
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 font-shabnam"
        ></textarea>
      </div>

      {/* Name & Email */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1">
          <label className="block text-sm lg:text-base mb-1">
            نام <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 font-shabnam"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm lg:text-base mb-1">
            ایمیل <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 font-shabnam"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
        <input
          type="checkbox"
          id="saveInfo"
          className="w-4 h-4 accent-teal-600"
        />
        <label htmlFor="saveInfo" className="text-sm lg:text-base text-gray-700">
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </label>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-teal-600 hover:bg-[rgb(113,29,28)] text-white px-5 py-2 rounded-md transition-all font-shabnam">
        ثبت
      </button>
    </div>
  );
};

export default CommentForm;
