import Link from "next/link";
import Order from "./Order";
import { FaArrowLeft } from "react-icons/fa6";

const Orders = () => {
  return (
    <div className="font-myfont font-Bold bg-[#711d1c0f] w-full md:w-1/2 text-black px-4 rounded-md mx-auto">
      <div className="flex justify-between p-4 border-b border-[#711d1c]">
        <p>سفارش های اخیر</p>
        <Link href="/p-user/orders" className="flex items-center gap-2">
          همه سفارش ها <FaArrowLeft className="text-[#711d1c]" />
        </Link>
      </div>

      {/* گرید ریسپانسیو */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* <Order />
        <Order />
        <Order /> */}
      </div>

      <p className="text-center text-2xl w-full py-36">
        سفارشی ثبت نشده
      </p>
    </div>
  );
};

export default Orders;
