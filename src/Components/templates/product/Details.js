import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import {
  FaTelegram,
  FaLinkedinIn,
  FaPinterest,
  FaRegStar,
} from "react-icons/fa";
import AddToWhishList from "./AddToWhishList";

const Details = ({ product }) => {
  return (
    <main className="w-full lg:w-[63%] px-4 lg:px-0">
      {/* Title */}
      <h2 className="text-lg lg:text-3xl font-bold leading-8 mt-4">
        {product.name}
      </h2>

      {/* Rating */}
      <div className="flex gap-2 mt-6 items-center">
        <div className="flex gap-[2px] text-orange-500 text-lg lg:text-xl">
          {new Array(product.score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5 - product.score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p className="text-gray-600 text-xs lg:text-sm">
          (دیدگاه {product.comments.length} کاربر)
        </p>
      </div>

      {/* Price */}
      <p className="text-[rgb(52,24,14)] text-xl lg:text-2xl font-bold my-4 lg:my-6">
        {product?.price != null ? product.price.toLocaleString("fa-IR") : ""}{" "}
        تومان
      </p>

      {/* Description */}
      <span className="text-sm text-gray-500 block w-full lg:w-[93%] leading-6">
        {product.shortDescription}
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
        <AddToWhishList productID={product._id}/>
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
        {/* <strong>شناسه محصول: {product._id}   </strong> */}

        <p className="flex flex-col">
          <strong>برچسب:</strong>
          {product.tags.join(" , ")}
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
