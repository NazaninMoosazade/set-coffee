"use client";

import React, { useState } from "react";
import Topbar from "@/Components/modules/p-user/Topbar";
import Sidebar from "@/Components/modules/p-user/Sidebar";

const UserPanelLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white w-full min-h-screen text-black flex flex-col md:flex-row direction-rtl">
      {/* Sidebar دسکتاپ */}
      <div className="hidden md:flex w-64">
        <Sidebar />
      </div>

      {/* Sidebar موبایل - drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 w-64 h-full bg-[#711d1c] p-2">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default UserPanelLayout;
