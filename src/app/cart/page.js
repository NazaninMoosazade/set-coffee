"use client";
import Stepper from "@/Components/modules/stepper/Stepper";
import DataTable from "@/Components/templates/cart/DataTable";
import Link from "next/link";
import { TbShoppingCartX } from "react-icons/tb";


const CartPage = () => {
 

  const cartEmpty = false; // true اگر سبد خرید خالی باشد

  return (
    <>
      <Stepper step="cart" />

      <main
        className="max-w-[1222px] w-full mx-auto px-4 lg:px-0 mt-10 mb-14 flex flex-col lg:flex-row gap-5"
        data-aos="fade-up"
      >
        {cartEmpty ? (
          <div
            className="text-center text-black direction-rtl w-full flex flex-col items-center justify-center py-20"
            data-aos="fade-up"
          >
            <TbShoppingCartX className="text-[12rem] sm:text-[15rem] text-gray-200 mb-6" />
            <p className="text-4xl sm:text-5xl font-semibold mb-6">
              سبد خرید شما در حال حاضر خالی است.
            </p>
            <span className="text-gray-500 mb-2">
              قبل از تسویه حساب، باید چند محصول را به سبد خرید خود اضافه کنید.
            </span>
            <span className="text-gray-500 mb-2">
              در صفحه "فروشگاه"، محصولات جالب زیادی خواهید یافت.
            </span>
            <div className="mt-8">
              <Link
                href="/category"
                className="bg-teal-700 text-white py-3 px-6 rounded shadow-inner hover:bg-[#711d1c] transition"
              >
                بازگشت به فروشگاه
              </Link>
            </div>
          </div>
        ) : (
          <DataTable />
        )}
      </main>

    </>
  );
};

export default CartPage;
