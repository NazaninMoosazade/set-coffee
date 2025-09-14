"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

const SendTicket = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [departments, setDepartments] = useState([]);
  const [subDepartments, setSubDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState(-1);
  const [subDepartmentID, setSubDepartmentID] = useState(-1);
  const [priority, setPriority] = useState(1);

  // گرفتن لیست دپارتمان‌ها
  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      if (res.ok) {
        const data = await res.json();
        setDepartments(data);
      }
    };
    getDepartments();
  }, []);

  // گرفتن زیردپارتمان‌ها بعد از انتخاب دپارتمان
  useEffect(() => {
    if (departmentID === -1) return;

    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`);
      if (res.ok) {
        const data = await res.json();
        setSubDepartments(data);
      }
    };

    getSubDepartments();
  }, [departmentID]);

  return (
    <main className="px-8 md:px-12">
      {/* عنوان */}
      <h1 className="mt-8 mb-8 relative text-2xl md:text-3xl font-medium flex justify-between items-center uppercase">
        <span className="bg-white px-4 mr-16">ارسال تیکت جدید</span>
        <Link
          href="/p-user/tickets"
          className="bg-white text-[#711d1c] text-base flex items-center px-3 py-1 rounded-full border border-[#711d1c] relative left-7"
        >
          همه تیکت‌ها
        </Link>
        <span className="absolute top-1/2 left-0 w-full border-b border-[#711d1c] -z-10"></span>
      </h1>

      {/* فرم تیکت */}
      <div className="grid md:grid-cols-2 gap-5 mb-4">
        {/* انتخاب دپارتمان */}
        <div className="flex flex-col gap-1 bg-white p-2 rounded">
          <label>دپارتمان را انتخاب کنید:</label>
          <select
            className="border-2 border-[#711d1c] rounded p-2 outline-none mt-1 text-black"
            value={departmentID}
            onChange={(e) => setDepartmentID(e.target.value)}
          >
            <option value={-1}>لطفا دپارتمان را انتخاب نمایید</option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.title}
              </option>
            ))}
          </select>
        </div>

        {/* انتخاب زیردپارتمان */}
        <div className="flex flex-col gap-1 bg-white p-2 rounded">
          <label>نوع تیکت را انتخاب کنید:</label>
          <select
            className="border-2 border-[#711d1c] rounded p-2 outline-none mt-1 text-black"
            value={subDepartmentID}
            onChange={(e) => setSubDepartmentID(e.target.value)}
          >
            <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
            {subDepartments.map((sub) => (
              <option key={sub._id} value={sub._id}>
                {sub.title}
              </option>
            ))}
          </select>
        </div>

        {/* عنوان */}
        <div className="flex flex-col gap-1 bg-white p-2 rounded">
          <label>عنوان تیکت را وارد کنید:</label>
          <input
            type="text"
            placeholder="عنوان..."
            className="border-2 border-[#711d1c] rounded p-2 outline-none mt-1 text-black w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* اولویت */}
        <div className="flex flex-col gap-1 bg-white p-2 rounded">
          <label>سطح اولویت تیکت را انتخاب کنید:</label>
          <select
            className="border-2 border-[#711d1c] rounded p-2 outline-none mt-1 text-black"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value={-1}>لطفا یک مورد را انتخاب نمایید</option>
            <option value="3">کم</option>
            <option value="2">متوسط</option>
            <option value="1">بالا</option>
          </select>
        </div>
      </div>

      {/* بدنه تیکت */}
      <div className="flex flex-col gap-1 mb-4">
        <label>محتوای تیکت را وارد نمایید:</label>
        <textarea
          rows={10}
          className="border-2 border-[#711d1c] rounded p-2 outline-none mt-1 text-black w-full resize-none"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      {/* آپلود فایل */}
      <div className="flex flex-col items-center bg-[#711d1c21] rounded p-5 mb-4 text-center">
        <span>حداکثر اندازه: 6 مگابایت</span>
        <span>فرمت‌های مجاز: jpg, png, jpeg, rar, zip</span>
        <input type="file" className="mt-2 cursor-pointer bg-transparent" />
      </div>

      {/* دکمه ارسال */}
      <button className="flex items-center gap-2 bg-[#711d1c] text-white px-4 py-2 rounded cursor-pointer mb-8">
        <IoIosSend className="text-lg" />
        ارسال تیکت
      </button>
    </main>
  );
};

export default SendTicket;
