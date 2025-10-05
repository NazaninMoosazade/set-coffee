"use client";
import Link from "next/link";


const Article = ({ _id, img, title, content, createdAt, tags }) => {
  return (
    <Link href={`/article/${_id}`}>
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
        <span className="text-sm font-myfont font-Bold">{createdAt}</span>
      </div>

      {/* جزئیات */}
      <div className="absolute bottom-0 w-full text-center text-white p-6 bg-gradient-to-b from-transparent via-black/30 to-black transition-shadow">
        {/* تگ‌ها */}
        <div className="flex justify-center flex-wrap gap-1 mb-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block font-myfont font-Bold bg-[#34180e] text-white text-xs px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* عنوان */}
        <Link
          href={`/article/${_id}`}
          className="block text-xl md:text-2xl font-myfont font-Bold my-2 leading-snug"
        >
          {title}
        </Link>

   
     
      </div>
    </div>
    </Link>

  );
};

export default Article;
