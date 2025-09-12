import Link from "next/link";

const Order = ({ status = "تکمیل شده" }) => {
  // رنگ بر اساس وضعیت
  const statusClasses =
    status === "تکمیل شده"
      ? "text-green-600"
      : status === "لغو شده"
      ? "text-red-600"
      : "text-yellow-600"; // مثلا در حال پردازش

  return (
    <Link
      href={`/product/123`}
      className="w-full bg-white text-[#711d1c] p-4 h-[110px] rounded-md flex justify-between my-4 items-center"
    >
      {/* بخش سمت راست */}
      <div>
        <div className="flex flex-row-reverse items-center gap-1 relative -bottom-[5px] left-4 justify-end">
          <p>قهوه عربیکا 40 درصد</p>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
            alt="product"
            className="w-[50px]"
          />
        </div>
        <p className={statusClasses}>{status}</p>
      </div>

      {/* بخش سمت چپ */}
      <div>
        <p>8:00 1402/10/21</p>
        <p className="mt-4">200000 هزار تومان</p>
      </div>
    </Link>
  );
};

export default Order;
