import Ticket from "./Ticket";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Tickets = () => {
  return (
    <div className="bg-[#711d1c0f] w-1/2 text-black px-4 rounded-md">
      {/* هدر بالای تیکت‌ها */}
      <div className="flex justify-between p-4 border-b border-[#711d1c]">
        <p className="font-medium">تیکت های اخیر</p>
        <Link href="/p-user/tickets" className="flex items-center gap-[9px] text-sm font-medium">
          همه تیکت ها <FaArrowLeft className="text-[#711d1c]" />
        </Link>
      </div>

      {/* لیست تیکت‌ها */}
      <Ticket />
      <Ticket />
      <Ticket />

      {/* نمایش در صورت خالی بودن */}
      {/* <p className="text-center text-2xl w-full py-[9rem] pb-[12.5rem]">تیکتی ثبت نشده</p> */}
    </div>
  );
};

export default Tickets;
