"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";

export default function Navbar({ isLogin }) {
  const [fixTop, setFixTop] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;
      setFixTop(currentScroll > 105);
    };

    window.addEventListener("scroll", fixNavbarToTop);
    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);

  return (
    <>
      <nav
        className={`${
          fixTop ? "md:fixed top-0 left-0 right-0 z-[9999]" : "relative z-[9999]"
        } w-full shadow-lg bg-white`}
      >
        <div className="w-full max-w-full mx-auto h-20 flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={171}
                height={53}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="font-myfont font-Bold hidden md:flex items-center gap-x-6 text-gray-700">
            <li>
              <Link href={"/"}>صفحه اصلی</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/about-us"}>درباره ما</Link>
            </li>
            <li>
              <Link href={"/rules"}>قوانین</Link>
            </li>

            {isLogin ? (
              <li className="relative group">
                <Link
                  href="/p-user"
                  className="flex items-center gap-x-1.5 cursor-pointer"
                >
                  حساب کاربری <IoIosArrowDown />
                </Link>

                {/* Dropdown */}
                <div className="font-myfont font-medium absolute z-50 right-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
              </li>
            ) : (
              <li>
                <Link href={"/login/register"}>ورود / عضویت</Link>
              </li>
            )}
          </ul>

          {/* Right side: icons + hamburger */}
          <div className="flex items-center gap-x-6 text-xl text-gray-700">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <FaShoppingCart />
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpenSidebar(true)}
            >
              <HiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} isLogin={isLogin} />
    </>
  );
}



