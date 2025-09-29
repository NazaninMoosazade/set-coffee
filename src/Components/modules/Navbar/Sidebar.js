"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ open, setOpen, isLogin }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[9999] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">منو</h2>
          <button onClick={() => setOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-y-4 p-4 text-gray-700">
          <li>
            <Link href={"/"} onClick={() => setOpen(false)}>
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href={"/contact-us"} onClick={() => setOpen(false)}>
              تماس با ما
            </Link>
          </li>
          <li>
            <Link href={"/about-us"} onClick={() => setOpen(false)}>
              درباره ما
            </Link>
          </li>
          <li>
            <Link href={"/rules"} onClick={() => setOpen(false)}>
              قوانین
            </Link>
          </li>

          {isLogin ? (
            <>
              <li>
                <Link href="/p-user/orders" onClick={() => setOpen(false)}>
                  سفارشات
                </Link>
              </li>
              <li>
                <Link href="/p-user/tickets" onClick={() => setOpen(false)}>
                  تیکت‌های پشتیبانی
                </Link>
              </li>
              <li>
                <Link href="/p-user/comments" onClick={() => setOpen(false)}>
                  کامنت‌ها
                </Link>
              </li>
              <li>
                <Link href="/p-user/wishlist" onClick={() => setOpen(false)}>
                  علاقه‌مندی‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/account-details"
                  onClick={() => setOpen(false)}
                >
                  جزئیات اکانت
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href={"/login/register"} onClick={() => setOpen(false)}>
                ورود / عضویت
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
