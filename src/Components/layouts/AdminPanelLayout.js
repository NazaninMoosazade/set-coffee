'use client'

import React, { useState } from "react";
// import Sidebar from "@/components/modules/p-admin/Sidebar";
// import Topbar from "@/components/modules/p-admin/Topbor";
// import { Menu } from "lucide-react";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-full h-screen text-black flex flex-col">
      {/* Topbar همیشه بالاست */}
      <div className="w-full shadow-md">
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* <Menu className="w-6 h-6" /> */}
          </button>
          <span className="font-bold">پنل مدیریت</span>
        </div>
        {/* <Topbar className="hidden md:block" /> */}
      </div>

      {/* بخش اصلی */}
      <section className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 z-40 w-64 bg-gray-100 transform transition-transform duration-300 md:static md:translate-x-0 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* <Sidebar /> */}
        </div>

        {/* محتوا */}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
