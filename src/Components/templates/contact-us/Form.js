"use client";
import { showSwal } from "@/utils/helper";
import { useState } from "react";
import { valiadteEmail, valiadtePhone } from "@/utils/global/auth";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async (event) => {
    event.preventDefault();

    // Validation
    if (!name) {
      return showSwal("لطفا  نام خود را وارد نمایید", "error", "چشم");
    }

    const isValidEmail = valiadteEmail(email);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده صحیح نیست", "error", "تلاش مجدد");
    }

    const isValidPhone = valiadtePhone(phone);
    if (!isValidPhone) {
      return showSwal("شماره وارد شده صحیح نیست", "error", "تلاش مجدد");
    }

    if (!company) {
      return showSwal("لطفا  نام شرکت را وارد نمایید", "error", "چشم");
    }

    if (!message) {
      return showSwal("لطفا درخواست خود را وارد نمایید", "error", "چشم");
    }

    const contact = {
      name,
      email,
      phone,
      company,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    console.log(res);
    
    if (res.status === 200) {
      setEmail("");
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
      showSwal("پیغام شما با موفقیت ثبت شد", "success", "فهمیدم");
    }
  };

  return (
    <form className="text-right">
      <span className="text-sm text-gray-400">فرم تماس با ما</span>
      <p className="text-xl mt-4 mb-8">
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </p>

      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">نام و نام خانوادگی</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">آدرس ایمیل</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">شماره تماس</label>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">نام شرکت</label>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="text-gray-700">درخواست شما</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-md text-black text-base resize-none focus:outline-none"
        ></textarea>
      </div>

      <button
        onClick={submitMessage}
        type="submit"
        className="w-full py-3 bg-[#34180e] text-white font-semibold rounded-md hover:bg-[#008979] transition-colors"
      >
        ارسال
      </button>
    </form>
  );
};

export default Form;
