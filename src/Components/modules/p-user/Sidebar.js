"use client";

import { useState, useEffect } from "react";
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney, MdSms, MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import swal from "sweetalert";

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();

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

  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", { method: "POST" });
        if (res.status === 200) {
          swal({
            title: "با موفقیت از اکانت خارج شدید",
            icon: "success",
            buttons: "فهمیدم",
          }).then(() => router.replace("/"));
        }
      }
    });
  };

  // تابع تعیین کلاس لینک‌ها
  const linkClass = (href, exact = false) => {
    const active = exact
      ? path === href
      : path === href || path.startsWith(href + "/");

    return `flex items-center gap-3 text-[18px] px-3 py-2 rounded-lg transition-all duration-200 ${
      active
        ? "text-white bgBack border-r-4 border-white"
        : "text-gray-300 hover:text-white hover:bg-[#8d2b29]"
    }`;
  };

  return (
    <aside className="bg-[#711d1c] w-full flex flex-col h-full text-white">
      {/* Header */}
      <div className="text-center p-2 mt-3 pb-6 border-b border-white">
        <p className="font-myfont font-Light">
          خوش اومدی{" "}
          {loading ? "در حال بارگذاری..." : user?.name || "ناشناخته"} عزیز
        </p>
      </div>

      {/* Main Links */}
      <ul className="flex flex-col font-myfont font-Bold gap-2 py-7 flex-1 md:pr-5">
        {path.includes("/p-user") ? (
          <>
            <Link href="/p-user" className={linkClass("/p-user", true)}>
              <ImReply /> پیشخوان
            </Link>
            <Link href="/p-user/tickets" className={linkClass("/p-user/tickets")}>
              <MdSms /> تیکت ها
            </Link>
            <Link href="/p-user/comments" className={linkClass("/p-user/comments")}>
              <FaComments /> کامنت ها
            </Link>
            <Link href="/p-user/wishlist" className={linkClass("/p-user/wishlist")}>
              <FaHeart /> علاقه مندی
            </Link>
          </>
        ) : (
          <>
            <Link href="/p-admin" className={linkClass("/p-admin", true)}>
              <ImReply /> پیشخوان
            </Link>
            <Link href="/p-admin/products" className={linkClass("/p-admin/products")}>
              <FaShoppingBag /> محصولات
            </Link>
            <Link href="/p-admin/users" className={linkClass("/p-admin/users")}>
              <FaUsers /> کاربران
            </Link>
            <Link href="/p-admin/comments" className={linkClass("/p-admin/comments")}>
              <FaComments /> کامنت ها
            </Link>
            <Link href="/p-admin/tickets" className={linkClass("/p-admin/tickets")}>
              <MdSms /> تیکت ها
            </Link>
            <Link href="/p-admin/discount" className={linkClass("/p-admin/discount")}>
              <MdOutlineAttachMoney /> تخفیفات
            </Link>
          </>
        )}
      </ul>

      {/* Logout */}
      <div
        onClick={logoutHandler}
        className="font-myfont font-Bold flex justify-between flex-row-reverse items-center pb-7 cursor-pointer w-[90%] mx-auto border-t border-white pt-2 text-[1.3rem]"
      >
        <MdLogout /> خروج
      </div>
    </aside>
  );
};

export default Sidebar;
