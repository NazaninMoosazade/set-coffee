import { ImReply } from "react-icons/im";
import { FaComments, FaShoppingBag, FaUsers } from "react-icons/fa";
import { MdOutlineAttachMoney, MdSms, MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoutButtonClient from "@/Components/templates/p-admin/index/LogoutButtonClient";

export default function Sidebar({ closeSidebar }) {
  const path = usePathname();
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

  const linkClasses =
    "flex items-center gap-3 text-lg opacity-70 hover:opacity-100 transition-opacity";
  const activeLinkClasses = "opacity-100";

  return (
    <aside className="flex flex-col h-full p-3">
      <div className="text-center mt-3 pb-6 border-b border-white">
        <p className="text-sm sm:text-base">
          {" "}
          {loading ? "در حال بارگذاری..." : user?.name || "ناشناخته"}
        </p>
      </div>

      <ul className="flex flex-col gap-8 px-2 py-6 text-sm sm:text-base flex-grow">
        <Link
          href="/p-admin"
          className={`${linkClasses} ${
            path === "/p-admin" ? activeLinkClasses : ""
          }`}
          onClick={closeSidebar}
        >
          پیشخوان
        </Link>
        <Link
          href="/p-admin/products"
          className={linkClasses}
          onClick={closeSidebar}
        >
          محصولات
        </Link>
        <Link
          href="/p-admin/users"
          className={linkClasses}
          onClick={closeSidebar}
        >
          کاربران
        </Link>
        <Link
          href="/p-admin/comments"
          className={linkClasses}
          onClick={closeSidebar}
        >
          کامنت ها
        </Link>
        <Link
          href="/p-admin/tickets"
          className={linkClasses}
          onClick={closeSidebar}
        >
          تیکت ها
        </Link>
        <Link
          href="/p-admin/discounts"
          className={linkClasses}
          onClick={closeSidebar}
        >
          تخفیفات
        </Link>
      </ul>
      <div>
        <LogoutButtonClient closeSidebar={closeSidebar} />
      </div>
    </aside>
  );
}
