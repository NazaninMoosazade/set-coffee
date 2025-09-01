import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full h-20 shadow-lg bg-white">
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
          <li>
            <Link href={"/login"}>ورود / عضویت</Link>
          </li>

          {/* Start My-account section */}
          {/* <div>
            <Link href="/p-user">
              <IoIosArrowDown />
              حساب کاربری
            </Link>
            <div>
              <Link href="/p-user/orders">سفارشات</Link>
              <Link href="/p-user/tickets">تیکت های پشتیبانی</Link>
              <Link href="/p-user/comments">کامنت‌ها</Link>
              <Link href="/p-user/wishlist">علاقه‌مندی‌ها</Link>
              <Link href="/p-user/account-details">جزئیات اکانت</Link>
            </div>
          </div> */}

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
