import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";

const Details = () => {
  return (
    <main className="w-full lg:w-[63%] px-4 lg:px-0">
      <Breadcrumb
        title={
          "کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GOLD ) ده -10- عددی"
        }
      />

      {/* Title */}
      <h2 className="text-lg lg:text-xl font-bold leading-8 mt-4">
        کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GOLD ) ده -10- عددی
      </h2>

      {/* Rating */}
      <div className="flex gap-2 mt-6 items-center">
        <div className="flex gap-[2px] text-orange-500 text-lg lg:text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-gray-600 text-xs lg:text-sm">(دیدگاه 7 کاربر)</p>
      </div>

      {/* Price */}
      <p className="text-[rgb(52,24,14)] text-xl lg:text-2xl font-bold my-4 lg:my-6">
        205,000 تومان
      </p>

      {/* Description */}
      <span className="text-sm text-gray-500 block w-full lg:w-[93%] leading-6">
        کپسول قهوه ست مدل Gold سازگار با دستگاههای کپسولی نسپرسو می باشد .
        ترکیب این قهوه عربیکا بوده و با برشته کاری متوسط درجاتی از اسیدیته به
        همراه تن واری متوسط , و برای ترکیب با شیر بسیار عالی می باشد.
      </span>

      <hr className="my-6" />

      {/* Availability */}
      <div className="flex items-center gap-2 mb-10 text-green-600">
        <IoCheckmark className="text-lg lg:text-xl" />
        <p className="text-sm lg:text-base">موجود در انبار</p>
      </div>

      {/* Cart Section */}
      <div className="flex flex-row-reverse items-center justify-end gap-3 text-center mb-6">
        <button className="bg-teal-600 hover:bg-[rgb(113,29,28)] text-white px-4 lg:px-5 py-2.5 lg:py-3 transition rounded-md text-sm lg:text-base">
          افزودن به سبد خرید
        </button>
        <div className="w-20 flex items-center justify-between border border-gray-400">
          <span className="cursor-pointer py-2 px-2 border-l border-black">
            -
          </span>
          <span className="px-2">1</span>
          <span className="cursor-pointer py-2 px-2 border-r border-black">
            +
          </span>
        </div>
      </div>

      {/* Wishlist */}
      <section className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-8">
        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-500 transition">
          <CiHeart className="text-base lg:text-lg" />
          <a href="/" className="text-xs lg:text-sm">
            افزودن به علاقه مندی ها
          </a>
        </div>
        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-500 transition">
          <TbSwitch3 className="text-base lg:text-lg" />
          <a href="/" className="text-xs lg:text-sm">
            مقایسه
          </a>
        </div>
      </section>

      <hr />

      {/* Product Details */}
      <div className="flex flex-col gap-3 mt-8 text-sm lg:text-base leading-6">
        <strong>شناسه محصول: GOLD Nespresso Compatible capsule</strong>
        <p>
          <strong>دسته:</strong> Coffee Capsule, کپسول قهوه, همه موارد
        </p>
        <p>
          <strong>برچسب:</strong> کپسول قهوه،کپسول قهوه ست پرسو،کپسول قهوه
          ایرانی،کپسول قهوه نسپرسو ایرانی،قهوه ست ، Setpresso،Gold Setpresso
        </p>
      </div>

      {/* Share Section */}
      <div className="flex items-center gap-2 mt-8 text-gray-700 flex-wrap">
        <p className="text-sm lg:text-base">به اشتراک گذاری: </p>
        <a href="/" className="hover:text-gray-500 transition">
          <FaTelegram className="text-base lg:text-lg" />
        </a>
        <a href="/" className="hover:text-gray-500 transition">
          <FaLinkedinIn className="text-base lg:text-lg" />
        </a>
        <a href="/" className="hover:text-gray-500 transition">
          <FaPinterest className="text-base lg:text-lg" />
        </a>
        <a href="/" className="hover:text-gray-500 transition">
          <FaTwitter className="text-base lg:text-lg" />
        </a>
        <a href="/" className="hover:text-gray-500 transition">
          <FaFacebookF className="text-base lg:text-lg" />
        </a>
      </div>

      <hr className="my-6" />
    </main>
  );
};

export default Details;
