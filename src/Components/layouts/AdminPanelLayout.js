import React from "react";
import TopbarWrapper from "../modules/p-admin/TopbarWrapper";
import SidebarWrapper from "../modules/p-admin/SidebarWrapper";
import { authUser } from "@/utils/Server/auth";
import { redirect } from "next/navigation";

const AdminPanelLayout = async ({ children }) => {
  const user = await authUser();
  if (user) {
    if (user.role !== "ADMIN") {
      return redirect("/login/register");
    }
  } else {
    return redirect("/p-admin");
  }

  return (
    <div className="flex flex-col w-full h-screen bg-white text-black">
      <TopbarWrapper />
      <div className="flex flex-1 overflow-hidden">
        <SidebarWrapper>{children}</SidebarWrapper>
      </div>
    </div>
  );
};

export default AdminPanelLayout;

// 'use client'

// import React, { useState } from "react";
// import Sidebar from "@/Components/modules/p-admin/Sidebar";
// import Topbar from "@/Components/modules/p-admin/Topbar";
// import { FiMenu } from "react-icons/fi";

// const Layout = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col w-full h-screen bg-white text-black">
//       {/* Topbar */}
//       <Topbar setIsOpen={setIsOpen} />

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div
//           className={`fixed inset-y-0 right-0 z-40 w-64 bg-gray-100 transform transition-transform duration-300 md:static md:translate-x-0 ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <Sidebar closeSidebar={() => setIsOpen(false)} />
//         </div>

//         {/* Overlay موبایل */}
//         {isOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-30 md:hidden"
//             onClick={() => setIsOpen(false)}
//           ></div>
//         )}

//         {/* Main content */}
//         <main className="flex-1 overflow-y-auto p-4">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
