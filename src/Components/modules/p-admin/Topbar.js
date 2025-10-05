"use client";
import { useEffect, useState } from "react";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export default function Topbar({ setIsOpen }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/adminPanel");
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full bg-[#111] h-[70px] px-4 flex justify-between items-center text-white border-b-4 border-[#711d1c]">
      {/* دکمه منو موبایل */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
        <FiMenu />
      </button>

      {/* لوگو یا عنوان */}
      <span className="font-myfont font-Bold sm:hidden">پنل مدیریت</span>

      {/* پروفایل */}
      <div className="flex flex-row-reverse items-center gap-2">
        <div className="hidden sm:flex flex-col">
          <p className="text-sm sm:text-base">
            {loading ? "در حال بارگذاری..." : user?.name || "ناشناخته"}
          </p>
          <span className=" font-myfont font-Bold text-lg text-gray-400">
           ادمین
          </span>
        </div>
      </div>

   
    </div>
  );
}

