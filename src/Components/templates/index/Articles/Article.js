"use client";
import { MdOutlineSms } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Article = ({ _id, img, title, content, createdAt, tags }) => {
  return (
    <div className="relative overflow-hidden group">
      {/* تصویر مقاله */}
      <Link href={`/article/${_id}`} className="block relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="transition-transform duration-700 ease-in-out group-hover:scale-105 w-full h-auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-700"></div>
      </Link>

      {/* تاریخ */}
      <div className="absolute top-3 right-3 bg-white text-black rounded-sm px-2 py-1 grid place-items-center z-10">
        <span className="text-sm font-semibold">{createdAt}</span>
      </div>

      {/* جزئیات */}
      <div className="absolute bottom-0 w-full text-center text-white p-6 bg-gradient-to-b from-transparent via-black/30 to-black transition-shadow">
        {/* تگ‌ها */}
        <div className="flex justify-center flex-wrap gap-1 mb-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-[#34180e] text-white text-xs px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* عنوان */}
        <Link
          href={`/article/${_id}`}
          className="block text-xl md:text-2xl font-semibold my-2 leading-snug"
        >
          {title}
        </Link>

        {/* نویسنده و آیکون‌ها */}
        <div className="flex justify-center items-center gap-3 text-gray-300 text-sm mt-2 flex-wrap">
          <p className="w-full">{content}</p>

          {/* کامنت */}
          <div className="relative">
            <MdOutlineSms className="text-lg cursor-pointer" />
            <span className="absolute -top-1 -left-1 text-[7px] bg-[#34180e] px-[2px] rounded-full">
              0
            </span>
          </div>

          {/* اشتراک گذاری */}
          <div className="relative group">
            <IoShareSocialOutline className="text-lg cursor-pointer" />
            <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <Link href="/"><FaTelegram className="text-white text-sm" /></Link>
              <Link href="/"><FaLinkedinIn className="text-white text-sm" /></Link>
              <Link href="/"><FaPinterest className="text-white text-sm" /></Link>
              <Link href="/"><FaTwitter className="text-white text-sm" /></Link>
              <Link href="/"><FaFacebookF className="text-white text-sm" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
