import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Product = ({ name, price, img, _id }) => {
  return (
    <Link href={`/product/${_id}`}>
      <div className="w-full relative pt-5 text-black rtl">
        <div className="relative mt-1 group">
          <img
            src={img}
            alt=""
            className="w-full h-[312px] rounded-md object-cover pb-3 transition-transform duration-400 ease-in group-hover:scale-110"
          />
        </div>

        {/* جزئیات */}
        <div className="flex flex-col gap-1 text-center mt-6 justify-center">
          <Link href={`/product/${_id}`} className="font-myfont font-Bold text-black">
            {name}
          </Link>
          <div className="flex justify-center gap-1 text-orange-500 ltr">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <span className="font-myfont font-Light text-[#34180e]">
            {price?.toLocaleString()} تومان
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
