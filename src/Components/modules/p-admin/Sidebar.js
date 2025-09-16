'use client'
import { ImReply } from "react-icons/im";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney, MdSms, MdLogout } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import swal from "sweetalert";

const Sidebar = ({ closeSidebar }) => {
  const path = usePathname();

  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    });
    closeSidebar();
  };

  const linkClasses = "flex items-center gap-3 text-lg opacity-70 hover:opacity-100 transition-opacity";
  const activeLinkClasses = "opacity-100";

  return (
    <aside className="flex flex-col h-full p-3">
      <div className="text-center mt-3 pb-6 border-b border-white">
        <p className="text-sm sm:text-base">خوش اومدی شاهین عزیز</p>
      </div>

      <ul className="flex flex-col gap-8 px-2 py-6 text-sm sm:text-base flex-grow">
        <Link href="/p-admin" className={`${linkClasses} ${path==="/p-admin"?activeLinkClasses:""}`} onClick={closeSidebar}><ImReply /> پیشخوان</Link>
        <Link href="/p-admin/products" className={linkClasses} onClick={closeSidebar}><FaShoppingBag /> محصولات</Link>
        <Link href="/p-admin/users" className={linkClasses} onClick={closeSidebar}><FaUsers /> کاربران</Link>
        <Link href="/p-admin/comments" className={linkClasses} onClick={closeSidebar}><FaComments /> کامنت ها</Link>
        <Link href="/p-admin/tickets" className={linkClasses} onClick={closeSidebar}><MdSms /> تیکت ها</Link>
        <Link href="/p-admin/discount" className={linkClasses} onClick={closeSidebar}><MdOutlineAttachMoney /> تخفیفات</Link>
      </ul>

      <div
        className="flex items-center justify-between flex-row-reverse cursor-pointer w-[90%] mx-auto pt-3 text-xl border-t-2 border-white"
        onClick={logoutHandler}
      >
        <MdLogout /> خروج
      </div>
    </aside>
  );
};

export default Sidebar;
