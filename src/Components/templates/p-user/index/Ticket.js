import Link from "next/link";

const Ticket = ({ _id, title, department, hasAnswer, createdAt }) => {
  return (
    <a
      className="font-myfont font-Bold w-full border-r-[3px] border-[#711d1c] p-4 bg-[#711d1c21] flex justify-between rounded-md my-4 h-[110px] items-center"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <p> {title}</p>
        <p className="px-2 py-1 w-max rounded-md bg-white">{department.title} </p>
      </div>
      <div className="flex flex-col items-center gap-2 text-center pt-2">
        <p>{new Date(createdAt).toLocaleDateString('fa-IR')}</p>
        {/* <p className="bg-[#711d1c] text-white rounded-md px-2 py-1">
          پاسخ داده نشده
        </p> */}
        {/* اگر جواب داده شده بود */}
        {/* <p className="bg-white text-[#711d1c] rounded-md px-2 py-1">پاسخ داده شده</p> */}
      </div>
    </a>
  );
};

export default Ticket;
