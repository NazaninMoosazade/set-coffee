import React from "react";
import Navbar from "@/Components/modules/Navbar/Navbar";
import Footer from "@/Components/modules/Footer/Footer";
import { authUser } from "@/utils/Server/auth";
import Product from "@/Components/modules/Product/Product";
import WishlistModel from "@/models/Wishlist";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const page = async () => {
  const user = await authUser();
let wishes = [];
  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();
  }

  return (
    <>
      <Navbar isLogin={user} />

      <main
        className="max-w-[1222px] w-full px-4 mx-auto mb-16 text-right text-black"
        data-aos="fade-up"
      >
        <p className="pb-2.5 border-b border-gray-400 text-lg">
          محصولات مورد علاقه شما
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
          {wishes.length > 0 &&
            wishes.map((wish) => <Product key={wish._id} {...wish.product} />)}
        </section>

        {wishes.length === 0 && (
          <div
            className="relative mt-20 mb-14 text-center leading-[1.2] text-black rtl"
            data-aos="fade-up"
          >
            <FaRegHeart className="text-[15.2rem] text-gray-200 mx-auto" />
            <p className="text-[3rem] mb-6">محصولی یافت نشد</p>
            <span className="block mb-2 text-gray-500">
              شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.
            </span>
            <span className="block mb-11 text-gray-500">
              در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.
            </span>
            <div>
              <Link
                href="/category"
                className="inline-block mt-16 px-7 py-3 text-sm leading-5 text-white bg-teal-700 rounded shadow-inner transition-colors duration-100 hover:bg-[rgb(113,29,28)]"
              >
                بازگشت به فروشگاه
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default page;
