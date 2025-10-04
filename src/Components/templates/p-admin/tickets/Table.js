"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helper";
import swal from "sweetalert";

export default function DataTable({ tickets, title }) {
  const router = useRouter();

  const showTicketBody = (body) => {
    showSwal(body, undefined, "بستن");
  };

  const answerToTicket = async (ticket) => {
    swal({
      title: "لطفا پاسخ مورد نظر را وارد کنید:",
      content: "input",
      buttons: "ثبت پاسخ",
    }).then(async (answerText) => {
      if (answerText) {
        const answer = {
          ...ticket,
          body: answerText,
          ticketID: ticket._id,
        };

        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answer),
        });
        if (res.status === 201) {
          swal({
            title: "پاسخ مورد نظر ثبت شد",
            icon: "success",
            buttons: "فهمیدم",
          });
        }
      }
    });
  };

  return (
    <div className="px-4 sm:px-6 font-myfont font-Bold lg:px-10 py-6">
      {/* عنوان */}
      <div className="relative text-right mb-8">
        <h1 className="text-2xl sm:text-3xl font-medium uppercase inline-block relative z-10">
          <span className="bg-white px-3 sm:px-4 mr-12 sm:mr-16">{title}</span>
        </h1>
        <div className="absolute top-1/2 left-0 right-0 w-[95%] border-b border-[#711d1c] shadow-sm"></div>
      </div>

      {/* جدول */}
      <div className="overflow-x-auto bg-[#f2f7fd] p-4 sm:p-10 rounded-lg">
        <table className="min-w-[700px] w-full text-center border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-sm sm:text-base">شناسه</th>
              <th className="p-2 text-sm sm:text-base">کاربر</th>
              <th className="p-2 text-sm sm:text-base">عنوان</th>
              <th className="p-2 text-sm sm:text-base">دپارتمان</th>
              <th className="p-2 text-sm sm:text-base">مشاهده</th>
              <th className="p-2 text-sm sm:text-base">حذف</th>
              <th className="p-2 text-sm sm:text-base">پاسخ</th>
              <th className="p-2 text-sm sm:text-base">بن</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id} className="bg-white hover:bg-gray-50">
                <td className="p-1 sm:p-2 text-sm sm:text-base">{index + 1}</td>
                <td className="p-1 sm:p-2 text-sm sm:text-base">
                  {ticket.user.name}
                </td>
                <td className="p-1 sm:p-2 text-sm sm:text-base">
                  {ticket.title}
                </td>
                <td className="p-1 sm:p-2 text-sm sm:text-base">
                  {ticket.department.title}
                </td>
                <td className="p-1 sm:p-2">
                  <button
                    className="bg-black text-white text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded w-full hover:bg-gray-800 transition"
                    onClick={() => showTicketBody(ticket.body)}
                  >
                    مشاهده
                  </button>
                </td>
                <td className="p-1 sm:p-2">
                  <button className="bg-black text-white text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded w-full hover:bg-gray-800 transition">
                    حذف
                  </button>
                </td>
                <td className="p-1 sm:p-2">
                  <button
                    onClick={() => answerToTicket(ticket)}
                    className="bg-[#711d1c] text-white text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded w-full hover:bg-red-700 transition"
                  >
                    پاسخ
                  </button>
                </td>
                <td className="p-1 sm:p-2">
                  <button className="bg-[#711d1c] text-white text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded w-full hover:bg-red-700 transition">
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
