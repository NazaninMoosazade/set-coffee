"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar({isLogin}) {
  const [fixTop, setFixTop] = useState(false);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 105) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    };

    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);

  return (
    <nav
      className={`${
        fixTop ? "fixed top-0 left-0 z-50" : "relative"
      } hidden md:flex w-full h-20 shadow-lg bg-white`}
    >
      <main className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="logo" width={171} height={53} />
          </Link>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-x-6 text-gray-700">
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/category"}>فروشگاه</Link>
          </li>
          <li>
            <Link href={"/blog"}>وبلاگ</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>تماس با ما</Link>
          </li>
          <li>
            <Link href={"/about-us"}>درباره ما</Link>
          </li>
          <li>
            <Link href={"/roles"}>قوانین</Link>
          </li>

          {isLogin ? (
            <>
              <div className="relative group">
                <Link
                  className="flex items-center gap-x-1.5 cursor-pointer"
                  href="/p-user"
                >
                  <IoIosArrowDown className="p-0" />
                  حساب کاربری
                </Link>

                <div className="absolute z-50 right-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/p-user/orders"
                  >
                    سفارشات
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/p-user/tickets"
                  >
                    تیکت های پشتیبانی
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/p-user/comments"
                  >
                    کامنت‌ها
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/p-user/wishlist"
                  >
                    علاقه‌مندی‌ها
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/p-user/account-details"
                  >
                    جزئیات اکانت
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <li>
              <Link href={"/login/register"}>ورود / عضویت</Link>
            </li>
          )}

          {/* Finish My-account section */}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-x-6 text-xl text-gray-700">
          <Link href="/cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1">
              1
            </span>
          </Link>
          <Link href="/wishlist" className="relative">
            <FaRegHeart />
            <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1">
              1
            </span>
          </Link>
        </div>
      </main>
    </nav>
  );
}
