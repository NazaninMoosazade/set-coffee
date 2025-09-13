"use client";

import Link from "next/link";
import { IoMdStar } from "react-icons/io";
import swal from "sweetalert";

const Product = ({ price, score = 0, name }) => {
  const removeProduct = (productId) => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      // کد حذف محصول
    });
  };

  return (
    <div className="text-center text-black">
      {/* تصویر محصول */}
      <Link href={"/product/123"}>
        <img
          width={283}
          height={283}
          src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
          alt={name || "محصول"}
          className="mx-auto"
        />
      </Link>

      {/* نام محصول */}
      <p dir="rtl" className="text-sm mt-2">{name || "بدون نام"}</p>

      {/* امتیاز و قیمت */}
      <div className="flex justify-between items-end mt-2">
        <div className="flex gap-1">
          {score > 0 &&
            new Array(score).fill(0).map((_, index) => (
              <IoMdStar key={index} className="text-orange-500 text-lg mt-1" />
            ))}
        </div>
        <span className="text-sm">
          {price != null ? price.toLocaleString() : "0"} تومان
        </span>
      </div>

      {/* دکمه حذف */}
      <button
        onClick={() => removeProduct(null)}
        className="w-full mt-4 px-4 py-2 bg-[#711d1c] text-white rounded-md cursor-pointer transition-all duration-1000 hover:opacity-70 focus:outline-none border-0"
      >
        حذف محصول
      </button>
    </div>
  );
};

export default Product;
