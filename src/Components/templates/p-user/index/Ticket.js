import Link from "next/link";

const Ticket = () => {
  return (
    <Link
      href={`/p-user/tickets/answer/2323`}
      className="w-full border-r-[3px] border-[#711d1c] p-4 bg-[#711d1c21] flex justify-between rounded-md my-4 h-[110px] items-center"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <p>حجم بسته بندی</p>
        <p className="px-2 py-1 w-max rounded-md bg-white">واحد پشتیبانی</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-center pt-2">
        <p>8:00 1402/10/21</p>
        <p className="bg-[#711d1c] text-white rounded-md px-2 py-1">
          پاسخ داده نشده
        </p>
        {/* اگر جواب داده شده بود */}
        {/* <p className="bg-white text-[#711d1c] rounded-md px-2 py-1">پاسخ داده شده</p> */}
      </div>
    </Link>
  );
};

export default Ticket;
