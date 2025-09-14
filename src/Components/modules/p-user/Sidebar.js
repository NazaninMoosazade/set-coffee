"use client";

import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney, MdSms, MdLogout } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import swal from "sweetalert";

const Sidebar = () => {
  const path = usePathname();
  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {

      if (result) {
        const res = await fetch('/api/auth/signout' , {
          method : 'POST',
        })
        if(res.status === 200) {
          swal({
            title: 'با موفقیت از اکانت خارج شدید',
            icon: 'success',
            buttons: 'فهمیدم'
          }).then((result) => {
            location.replace('/')
          })
        }
      }
    });
  };
  const linkClass = (active) =>
    `flex items-center gap-3 text-[18px] ${
      active ? "opacity-100" : "opacity-70"
    }`;

  return (
    <aside className="bg-[#711d1c] w-full flex flex-col h-full text-white">
      {/* Header */}
      <div className="text-center p-2 mt-3 pb-6 border-b border-white">
        <p>خوش اومدی شاهین عزیز</p>
      </div>

      {/* Main Links */}
      <ul className="flex flex-col gap-6 py-7 flex-1 md:pr-5">
        {path.includes("/p-user") ? (
          <>
            <Link href={"/p-user"} className={linkClass(true)}>
              <ImReply /> پیشخوان
            </Link>
            <Link href={"/p-user/orders"} className={linkClass(false)}>
              <FaShoppingBag /> سفارش ها
            </Link>
            <Link href={"/p-user/tickets"} className={linkClass(false)}>
              <MdSms /> تیکت ها
            </Link>
            <Link href={"/p-user/comments"} className={linkClass(false)}>
              <FaComments /> کامنت ها
            </Link>
            <Link href={"/p-user/wishlist"} className={linkClass(false)}>
              <FaHeart /> علاقه مندی
            </Link>
            {/* <Link href={"/p-user/account-details"} className={linkClass(false)}>
              <TbListDetails /> جزئیات اکانت
            </Link> */}
          </>
        ) : (
          <>
            <Link href={"/p-admin"} className={linkClass(true)}>
              <ImReply /> پیشخوان
            </Link>
            <Link href={"/p-admin/products"} className={linkClass(false)}>
              <FaShoppingBag /> محصولات
            </Link>
            <Link href={"/p-admin/users"} className={linkClass(false)}>
              <FaUsers /> کاربران
            </Link>
            <Link href={"/p-admin/comments"} className={linkClass(false)}>
              <FaComments /> کامنت ها
            </Link>
            <Link href={"/p-admin/tickets"} className={linkClass(false)}>
              <MdSms /> تیکت ها
            </Link>
            <Link href={"/p-admin/discount"} className={linkClass(false)}>
              <MdOutlineAttachMoney /> تخفیفات
            </Link>
          </>
        )}
      </ul>

      {/* Logout */}
      <div
        onClick={logoutHandler}
        className="flex justify-between flex-row-reverse items-center pb-7 cursor-pointer w-[90%] mx-auto border-t border-white pt-2 text-[1.3rem]"
      >
        <MdLogout /> خروج
      </div>
    </aside>
  );
};

export default Sidebar;
