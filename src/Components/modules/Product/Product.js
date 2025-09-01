import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Product = () => {
  return (
    <div className="w-full relative pt-5 text-black rtl">
      <div className="relative mt-1 group">
        <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
          alt=""
          className="w-full h-[312px] object-cover transition-transform duration-400 ease-in group-hover:scale-110"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 z-10"></div>

        {/* آیکون‌ها */}
        <div className="absolute top-0 left-0 flex flex-col gap-2 text-white text-2xl opacity-0 group-hover:opacity-100 transition-all z-20">
          <Link href="/" className="flex flex-row-reverse items-center gap-1 relative group">
            <CiSearch className="cursor-pointer" />
            {/* <span className="absolute bottom-full mb-1 hidden group-hover:inline-block bg-black text-white text-xs rounded px-3 py-1 whitespace-nowrap">
              مشاهده سریع
            </span> */}
          </Link>
          <div className="flex flex-row-reverse items-center gap-1 relative group">
            <CiHeart className="cursor-pointer" />
            {/* <span className="absolute top-5 bottom-full mb-1 hidden group-hover:inline-block bg-black text-white text-xs rounded px-3 py-1 whitespace-nowrap">
              افزودن به علاقه مندی ها
            </span> */}
          </div>
        </div>

        
        <button className="absolute top-1/2 left-1/2 z-20 px-4 py-2 md:px-5 md:py-2.5 border border-white rounded text-white bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 -translate-x-1/2 -translate-y-1/2 transition-all text-sm md:text-base">
  افزودن به سبد خرید
</button>

      </div>

      {/* جزئیات */}
      <div className="flex flex-col gap-1 text-center pt-1 justify-center">
        <Link href={"/"} className="text-black">
          کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( RED ) 10 عددی LIMITED
          EDITION
        </Link>
        <div className="flex justify-center gap-1 text-orange-500 ltr">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span className="text-[#34180e]">825,000 تومان</span>
      </div>
    </div>
  );
};

export default Product;
