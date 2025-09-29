import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const Stepper = ({ step }) => {
  return (
    <div
      className="bg-[url('https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg')] bg-cover bg-center mb-10 px-4 sm:px-10 lg:px-20 pt-40"
    >
      <div className="flex items-center justify-center flex-row-reverse gap-4 sm:gap-6 lg:gap-8 pb-16 text-lg sm:text-xl lg:text-2xl text-white">
        {/* سبد خرید */}
        <Link
          href="/cart"
          className={`${step === "cart" ? "font-bold" : "opacity-70"} mt-1 mb-1 uppercase`}
        >
          سبد خرید
        </Link>

        <FaArrowLeftLong className="text-base sm:text-lg opacity-70" />

        {/* پرداخت */}
        {step === "checkout" || step === "complate" ? (
          <Link
            href="/checkout"
            className={`${step === "checkout" ? "font-bold" : "opacity-70"} mt-1 mb-1 uppercase`}
          >
            پرداخت
          </Link>
        ) : (
          <p className="opacity-70 mt-1 mb-1 uppercase">پرداخت</p>
        )}

        <FaArrowLeftLong className="text-base sm:text-lg opacity-70" />

        {/* تکمیل سفارش */}
        {step === "complate" ? (
          <Link
            href="/complate"
            className={`${step === "complate" ? "font-bold" : "opacity-70"} mt-1 mb-1 uppercase`}
          >
            تکمیل سفارش
          </Link>
        ) : (
          <p className="opacity-70 mt-1 mb-1 uppercase">تکمیل سفارش</p>
        )}
      </div>
    </div>
  );
};

export default Stepper;
