"use client";

import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddDiscount() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");

  const addDiscount = async () => {
    const discount = {
      code,
      percent,
      maxUse,
    };

    const res = await fetch("/api/discounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discount),
    });

    if (res.status === 201) {
      swal({
        title: "کد تخفیف با موفقیت ایجاد شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        setCode("");
        setPercent("");
        setMaxUse("");
        router.refresh();
      });
    }
  };

  return (
    <section className="p-5 font-myfont font-Bold bg-white rounded-lg shadow-md">
      <p className="mt-2 mb-8 text-right uppercase text-2xl md:text-3xl font-bold relative z-10">
        افزودن کد تخفیف جدید
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-lg mb-1">شناسه تخفیف</label>
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="لطفا شناسه تخفیف را وارد کنید"
            type="text"
            className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg mb-1">درصد تخفیف</label>
          <input
            value={percent}
            onChange={(event) => setPercent(event.target.value)}
            placeholder="لطفا درصد تخفیف را وارد کنید"
            type="text"
            className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg mb-1">حداکثر استفاده</label>
          <input
            value={maxUse}
            onChange={(event) => setMaxUse(event.target.value)}
            placeholder="حداکثر استفاده از کد تخفیف"
            type="text"
            className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg mb-1">محصول</label>
          <select className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black">
            <option value="">قهوه ترک</option>
            <option value="">قهوه عربیکا</option>
            <option value="">قهوه اسپرسو</option>
          </select>
        </div>
      </div>

      <button
        onClick={addDiscount}
        type="button"
        className="mt-6 px-6 py-2 bg-[#711d1c] text-white rounded-md hover:bg-red-800 transition ml-auto block"
      >
        افزودن
      </button>
    </section>
  );
}

export default AddDiscount;
