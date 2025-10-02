"use client";

import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import swal from "sweetalert";

const Product = ({ price, score = 0, name, productID , img}) => {
  // تابع حذف محصول
  const removeProduct = async () => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        try {
          const res = await fetch(`/api/wishlist/${productID}`, {
            method: "DELETE",
          });

          if (res.status === 200) {
            swal({
              icon: "success",
              title: "محصول مورد نظر با موفقیت حذف شد",
              buttons: "فهمیدم",
            }).then(() => {
              // ری‌لود صفحه یا آپدیت لیست
              location.reload();
            });
          } else {
            swal({
              icon: "error",
              title: "خطا در حذف محصول",
              buttons: "فهمیدم",
            });
          }
        } catch (err) {
          console.error(err);
          swal({
            icon: "error",
            title: "خطا در ارتباط با سرور",
            buttons: "فهمیدم",
          });
        }
      }
    });
  };

  return (
    <div className="text-center text-black">
      {/* تصویر محصول */}
      <Link href={`/product/${productID}`}>
        <img
          width={283}
          height={283}
          src={img}
          alt={name || "محصول"}
          className="mx-auto"
        />
      </Link>

      {/* نام محصول */}
      <p dir="rtl" className="font-myfont font-Bold text-sm mt-2">
        {name || "بدون نام"}
      </p>

      {/* امتیاز و قیمت */}
      <div className="flex justify-between items-end mt-2">
        <div className="flex gap-1">
          {score > 0 &&
            new Array(score).fill(0).map((_, index) => (
              <FaStar key={index} className="text-orange-500 text-lg mt-1" />
            ))}
          {score > 0 &&
            new Array(5 - score).fill(0).map((_, index) => (
              <FaRegStar key={index} className="text-orange-500 text-lg mt-1" />
            ))}
        </div>
        <span className="font-myfont font-Bold text-sm">
          {price != null ? price.toLocaleString() : "0"} تومان
        </span>
      </div>

      {/* دکمه حذف */}
      <button
        onClick={removeProduct}
        className="font-myfont font-Bold w-full mt-4 px-4 py-2 bg-[#711d1c] text-white rounded-md cursor-pointer transition-all duration-300 hover:opacity-70 focus:outline-none border-0"
      >
        حذف محصول
      </button>
    </div>
  );
};

export default Product;
