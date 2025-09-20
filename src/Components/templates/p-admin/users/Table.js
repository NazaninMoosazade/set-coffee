"use client";

import React from "react";


export default function DataTable({ users, title }) {
  const changeRole = async (userID) => {
    const res = await fetch("/api/user/role", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id : userID})
    });

    console.log(res);
    
  };

  return (
    <div>
      {/* Title */}
      <div className="relative mt-8 text-right">
        <h1 className="relative z-10 inline-block text-2xl font-medium uppercase bg-white pr-4">
          <span>{title}</span>
        </h1>
        <div className="absolute inset-x-0 top-1/2 border-b border-[#711d1c] shadow-[0_1px_0_0_#711d1c] w-[95%] mx-auto"></div>
      </div>

      {/* Table */}
      <div className="p-10">
        <table className="w-full bg-[#f2f7fd]">
          <thead>
            <tr>
              <th className="p-2 text-center">شناسه</th>
              <th className="p-2 text-center">نام و نام خانوادگی</th>
              <th className="p-2 text-center">ایمیل</th>
              <th className="p-2 text-center">نقش</th>
              <th className="p-2 text-center">ویرایش</th>
              <th className="p-2 text-center">تغییر سطح</th>
              <th className="p-2 text-center">حذف</th>
              <th className="p-2 text-center">بن</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-white text-center align-middle">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">
                  {user.email ? user.email : "ایمیل یافت نشد"}
                </td>
                <td className="p-2">
                  {user.role === "USER" ? "کاربر عادی" : "مدیر"}
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-black px-3 py-1 text-sm text-white hover:opacity-80"
                  >
                    ویرایش
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => changeRole(user._id)}
                    type="button"
                    className="w-full rounded bg-black px-3 py-1 text-sm text-white hover:opacity-80"
                  >
                    تغییر نقش
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-[#711d1c] px-3 py-1 text-sm text-white hover:opacity-80"
                  >
                    حذف
                  </button>
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    className="w-full rounded bg-[#711d1c] px-3 py-1 text-sm text-white hover:opacity-80"
                  >
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
