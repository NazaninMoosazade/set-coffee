"use client";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import stateData from "@/utils/stateData";
import Select from "react-select";
import { showSwal } from "@/utils/helper";

const stateOptions = stateData();

// برای فرمت اعداد به فارسی
const formatter = new Intl.NumberFormat("fa-IR", {
  style: "decimal",
});

const Table = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [changeAddress, setChangeAddress] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  useEffect(calcTotalPrice, [cart]);

  function calcTotalPrice() {
    let price = 0;
    if (cart.length) {
      price = cart.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
    }
    setTotalPrice(price);
  }

  const checkDiscount = async () => {
    const res = await fetch("/api/discounts/use", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: discount }),
    });

    if (res.status === 404) {
      return showSwal("کد تخفیف وارد شده معتبر نیست", "error", "تلاش مجدد");
    } else if (res.status === 422) {
      return showSwal("کد تخفیف وارد شده منقضی شده", "error", "تلاش مجدد");
    } else if (res.status === 200) {
      const discountCode = await res.json();
      setDiscountPercent(discountCode.percent);
      return showSwal("کد تخفیف با موفقیت اعمال شد", "success", "فهمیدم");
    }
  };

  // محاسبه قیمت نهایی با تخفیف
  const finalPrice = totalPrice - (totalPrice * discountPercent) / 100;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* جدول سبد خرید */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse bg-white border-b-2 border-black/10 text-black text-sm sm:text-base">
          <thead>
            <tr className="text-center border-b-2 border-black/10">
              <th className="py-3">جمع جزء</th>
              <th className="py-3">تعداد</th>
              <th className="py-3">قیمت</th>
              <th className="py-3">محصول</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={idx} className="align-middle text-center">
                <td className="py-2">
                  {item.price.toLocaleString()} تومان
                </td>

                {/* شمارنده */}
                <td>
                  <div className="flex justify-between border-2 border-black/10 w-fit mx-auto">
                    <span className="cursor-pointer px-3 py-2 hover:bg-[#34180e] hover:text-white transition">
                      -
                    </span>
                    <p className="px-3 py-2">{item.count}</p>
                    <span className="cursor-pointer px-3 py-2 hover:bg-[#34180e] hover:text-white transition">
                      +
                    </span>
                  </div>
                </td>

                {/* قیمت */}
                <td className="text-gray-500 text-sm py-2">
                  {formatter.format(item.price)} تومان
                </td>

                {/* محصول */}
                <td>
                  <div className="flex items-center gap-3 w-[220px] sm:w-[365px] mx-auto">
                    <img
                      src="https://set-coffee.com/wp-content/uploads/2020/12/Red-box-DG--430x430.jpg"
                      alt=""
                      className="w-16 sm:w-20"
                    />
                    <Link
                      href={"/"}
                      className="text-right text-sm sm:text-base leading-5 break-words"
                    >
                      {item.name}
                    </Link>
                  </div>
                </td>

                {/* حذف */}
                <td className="px-2">
                  <IoMdClose className="cursor-pointer text-lg sm:text-xl mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* دکمه‌های پایین جدول */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
          <button className="bg-[#f3f3f3] text-gray-800 px-5 py-3 text-xs sm:text-sm font-semibold uppercase transition hover:bg-gray-200">
            بروزرسانی سبد خرید
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={checkDiscount}
              className="bg-teal-700 text-white px-6 py-2 text-sm font-medium shadow-inner hover:bg-[#711d1c] transition"
            >
              اعمال کوپن
            </button>
            <input
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              type="text"
              placeholder="کد تخفیف"
              className="px-4 py-2 border border-black/10 rounded w-[160px] sm:w-[230px] text-sm"
            />
          </div>
        </section>
      </div>

      {/* بخش مجموع سبد خرید */}
      <div className="bg-white border border-black/10 p-6 rounded-md shadow-sm w-full lg:w-1/2">
        <p className="mb-2 text-xl font-semibold uppercase">جمع کل سبد خرید</p>

        <div className="flex justify-between border-b border-black/10 py-2">
          <p>جمع جزء</p>
          <p>{formatter.format(totalPrice)} تومان</p>
        </div>

        {discountPercent > 0 && (
          <div className="flex justify-between border-b border-black/10 py-2 text-green-600">
            <p>تخفیف ({discountPercent}%)</p>
            <p>-{formatter.format((totalPrice * discountPercent) / 100)} تومان</p>
          </div>
        )}

        <p className="py-2 text-sm">
          پیک موتوری: <strong>{formatter.format(30000)}</strong>
        </p>

        <div className="py-2 flex justify-between items-start">
          <p className="font-medium">حمل و نقل</p>
          <span className="text-sm text-gray-600">
            حمل و نقل به تهران (فقط شهر تهران).
          </span>
        </div>

        <p
          onClick={() => setChangeAddress((prev) => !prev)}
          className="text-blue-600 cursor-pointer mt-2 text-sm"
        >
          تغییر آدرس
        </p>

        {changeAddress && (
          <div className="flex flex-col gap-3 mt-4">
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption}
              isClearable={true}
              placeholder={"استان"}
              isRtl={true}
              isSearchable={true}
              options={stateOptions}
            />
            <input
              type="text"
              placeholder="شهر"
              className="px-3 py-2 border border-black/10 rounded text-sm"
            />
            <input
              type="number"
              placeholder="کد پستی"
              className="px-3 py-2 border border-black/10 rounded text-sm"
            />
            <button
              onClick={() => setChangeAddress(false)}
              className="bg-gray-100 text-gray-700 py-2 px-4 rounded text-sm hover:bg-gray-200 transition w-fit"
            >
              بروزرسانی
            </button>
          </div>
        )}

        <div className="flex justify-between border-t border-black/10 mt-4 pt-4 font-semibold">
          <p>مجموع</p>
          <p className="text-xl text-[#34180e]">
            {formatter.format(finalPrice)} تومان
          </p>
        </div>

        <Link href={"/checkout"}>
          <button className="w-full bg-teal-700 text-white py-3 mt-4 font-medium rounded hover:bg-[#711d1c] transition">
            ادامه جهت تصویه حساب
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Table;
