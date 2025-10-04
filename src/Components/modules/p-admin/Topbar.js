"use client";
import { useEffect, useState } from "react";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export default function Topbar({ setIsOpen }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/adminPanel");
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full bg-[#111] h-[70px] px-4 flex justify-between items-center text-white border-b-4 border-[#711d1c]">
      {/* دکمه منو موبایل */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
        <FiMenu />
      </button>

      {/* لوگو یا عنوان */}
      <span className="font-myfont font-Bold sm:hidden">پنل مدیریت</span>

      {/* پروفایل */}
      <div className="flex flex-row-reverse items-center gap-2">
        <div className="hidden sm:flex flex-col">
          <p className="text-sm sm:text-base">
            {loading ? "در حال بارگذاری..." : user?.name || "ناشناخته"}
          </p>
          <span className=" font-myfont font-Bold text-lg text-gray-400">
           ادمین
          </span>
        </div>
      </div>

   
    </div>
  );
}



// import { IoIosSearch, IoIosNotifications } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
// import { authUser } from "@/utils/Server/auth";

// export default function Topbar({ setIsOpen }) {

//   const user = authUser()

//   return (
//     <div className="w-full bg-[#111] h-[70px] px-4 flex justify-between items-center text-white border-b-4 border-[#711d1c]">
//       {/* دکمه منو موبایل */}
//       <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
//         <FiMenu />
//       </button>
//       {/* لوگو یا عنوان */}
//       <span className="font-bold sm:hidden">پنل مدیریت</span>

//       {/* پروفایل */}
//       <div className="flex flex-row-reverse items-center gap-2">
//         <div className="hidden sm:flex flex-col">
//           <p className="text-sm sm:text-base">  {user}</p>
//           <span className="text-xs text-gray-400">ادمین</span>
//         </div>
//       </div>

//       {/* جستجو و نوتیف فقط دسکتاپ */}
//       <section className="hidden sm:flex items-center gap-5">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="جستجو کنید"
//             className="bg-white text-black rounded-full py-2 px-3 pr-10 w-[250px]"
//           />
//           <div className="absolute left-1 top-1 flex items-center justify-center bg-[#711d1c] text-white h-[34px] w-[34px] rounded-full cursor-pointer text-xl">
//             <IoIosSearch />
//           </div>
//         </div>

//         <div className="relative bg-[#711d1c] flex items-center justify-center h-[34px] w-[34px] text-xl rounded-lg cursor-pointer">
//           <IoIosNotifications />
//           <span className="absolute -top-2 -right-2 bg-white text-[#711d1c] text-[10px] px-[4px] py-[1px] rounded-full">
//             2
//           </span>
//         </div>
//       </section>
//     </div>
//   );
// }

