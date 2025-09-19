"use client";

import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

export default function LogoutButtonClient({ closeSidebar }) {

     const router = useRouter();

  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });

        if (res.status === 200) {
          swal({
            title: "با موفقیت از اکانت خارج شدین",
            icon: "success",
            buttons: "فهمیدم",
          }).then((result) => {
            router.replace("/");
            closeSidebar()
          });
        }
      }
    });
  };

  return (
    <div
      className="flex items-center justify-between flex-row-reverse cursor-pointer w-[90%] mx-auto pt-3 text-xl border-t-2 border-white"
      onClick={logoutHandler}
    >
      <MdLogout /> خروج
    </div>
  );
}
