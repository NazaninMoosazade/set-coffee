"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function SidebarWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen bg-white text-black">
      {/* Topbar با دسترسی به setIsOpen */}
      <Topbar setIsOpen={setIsOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 z-40 w-64 bg-gray-100 transform transition-transform duration-300 md:static md:translate-x-0 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Sidebar closeSidebar={() => setIsOpen(false)} />
        </div>

        {/* Overlay موبایل */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}



