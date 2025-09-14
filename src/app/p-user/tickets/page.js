import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

const page = () => {
  return (
    <UserPanelLayout>
      <main className="px-8 md:px-12">
        {/* عنوان */}
        <h1 className="mt-8 mb-8 relative text-2xl md:text-3xl font-medium flex justify-between items-center uppercase">
          <span className="bg-white px-4 mr-16">ارسال تیکت جدید</span>
          <Link
            href="/p-user/tickets"
            className="bg-white text-[#711d1c] text-base flex items-center px-3 py-1 rounded-full border border-[#711d1c] relative left-7"
          >
            همه تیکت ها
          </Link>
          <span className="absolute top-1/2 left-0 w-full border-b border-[#711d1c] -z-10"></span>
        </h1>

        {/* فرم تیکت */}
        <div className="grid md:grid-cols-2 gap-5 mb-4">
          <div className="flex flex-col gap-1 bg-white p-2 rounded">
            <label>دپارتمان را انتخاب کنید:</label>
            <select className="border-2 border-[#711d1c] rounded p-2 outline-none text-black bg-white mt-1">
              <option>لطفا یک مورد را انتخاب نمایید.</option>
              <option value="دپارتمان">دپارتمان</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 bg-white p-2 rounded">
            <label>نوع تیکت را انتخاب کنید:</label>
            <select className="border-2 border-[#711d1c] rounded p-2 outline-none text-black bg-white mt-1">
              <option>لطفا یک مورد را انتخاب نمایید.</option>
              <option value="پشتیبانی">پشتیبانی</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 bg-white p-2 rounded">
            <label>عنوان تیکت را وارد کنید:</label>
            <input
              type="text"
              placeholder="عنوان..."
              className="border-2 border-[#711d1c] rounded p-2 outline-none text-black mt-1 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 bg-white p-2 rounded">
            <label>سطح اولویت تیکت را انتخاب کنید:</label>
            <select className="border-2 border-[#711d1c] rounded p-2 outline-none text-black bg-white mt-1">
              <option>لطفا یک مورد را انتخاب نمایید.</option>
              <option value="3">کم</option>
              <option value="2">متوسط</option>
              <option value="1">بالا</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label>محتوای تیکت را وارد نمایید:</label>
          <textarea
            rows={10}
            className="border-2 border-[#711d1c] rounded p-2 outline-none text-black mt-1 w-full resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col items-center bg-[#711d1c33] rounded p-5 mb-4 text-center">
          <span>حداکثر اندازه: 6 مگابایت</span>
          <span>فرمت‌های مجاز: jpg, png, jpeg, rar, zip</span>
          <input type="file" className="mt-2 cursor-pointer bg-transparent" />
        </div>

        <button className="flex items-center gap-2 bg-[#711d1c] text-white px-4 py-2 rounded cursor-pointer mb-8">
          <IoIosSend className="text-lg" />
          ارسال تیکت
        </button>
      </main>
    </UserPanelLayout>
  );
};

export default page;
