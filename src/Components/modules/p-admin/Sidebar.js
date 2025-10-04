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

  // استایل لینک‌ها
  const linkClasses =
    "flex items-center gap-3 text-lg opacity-70 hover:opacity-100 transition-all px-3 py-2 rounded-xl";

  // رنگ‌ها برای هر مسیر
  const activeColors = {
    "/p-admin/products": "bg-red-500 text-white",
    "/p-admin/users": "bg-blue-500 text-white",
    "/p-admin/comments": "bg-orange-500 text-white",
    "/p-admin/tickets": "bg-purple-500 text-white",
    "/p-admin/discounts": "bg-red-500 text-white",
  };

  return (
    <aside className="flex flex-col h-full p-3">
      <div className="text-center mt-3 pb-6 border-b border-white">
        <p className="text-sm sm:text-base">
          {loading ? "در حال بارگذاری..." : user?.name || "ناشناخته"}
        </p>
      </div>

      <ul className="font-myfont font-Bold flex flex-col gap-4 px-2 py-6 text-sm sm:text-base flex-grow">
        <Link
          href="/p-admin/products"
          className={`${linkClasses} ${
            path === "/p-admin/products" ? activeColors["/p-admin/products"] : ""
          }`}
          onClick={closeSidebar}
        >
          محصولات
        </Link>

        <Link
          href="/p-admin/users"
          className={`${linkClasses} ${
            path === "/p-admin/users" ? activeColors["/p-admin/users"] : ""
          }`}
          onClick={closeSidebar}
        >
          کاربران
        </Link>

        <Link
          href="/p-admin/comments"
          className={`${linkClasses} ${
            path === "/p-admin/comments" ? activeColors["/p-admin/comments"] : ""
          }`}
          onClick={closeSidebar}
        >
          کامنت ها
        </Link>

        <Link
          href="/p-admin/tickets"
          className={`${linkClasses} ${
            path === "/p-admin/tickets" ? activeColors["/p-admin/tickets"] : ""
          }`}
          onClick={closeSidebar}
        >
          تیکت ها
        </Link>

        <Link
          href="/p-admin/discounts"
          className={`${linkClasses} ${
            path === "/p-admin/discounts"
              ? activeColors["/p-admin/discounts"]
              : ""
          }`}
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
