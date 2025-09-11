"use client";

import { useState } from "react";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import Modal from "./Modal";

const Topbar = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  return (
    <>
      <div className="w-full bg-[#111111] h-[70px] px-4 md:px-6 flex justify-between items-center text-white border-b-4 border-[#711d1c]">
        
        {/* Hamburger موبایل */}
        <button className="md:hidden text-xl" onClick={toggleSidebar}>☰</button>

        {/* Profile */}
        <div className="flex items-center gap-2 flex-row-reverse">
          <div className="text-right">
            <p className="font-medium">شاهین مشکل گشا</p>
            <span className="text-sm text-gray-400">ادمین</span>
          </div>
          <img src="/images/shahin.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover"/>
        </div>

        {/* Search & Notifications */}
        <section className="hidden md:flex items-center gap-5">
          <div className="relative">
            <input type="text" placeholder="جستجو کنید" className="bg-white text-black py-1 px-3 rounded-full w-48 md:w-64 focus:outline-none"/>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#711d1c] text-white flex items-center justify-center h-8 w-8 rounded-full text-xl cursor-pointer">
              <IoIosSearch />
            </div>
          </div>
          <div onClick={() => setShowNotifications(true)} className="relative bg-[#711d1c] flex items-center justify-center h-8 w-8 rounded-lg text-xl cursor-pointer">
            <IoIosNotifications />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-[#711d1c] text-[9px] px-1.5 py-[1px] rounded-full">0</span>
          </div>
        </section>
      </div>

      {/* Notifications Overlay */}
      {showNotifications && (
        <>
          <div onClick={() => setShowNotifications(false)} className="fixed inset-0 bg-black/40 z-40"/>
          <section className="absolute top-[70px] left-4 md:left-12 z-50 bg-[#711d1c] w-72 rounded-lg p-4 text-white flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p onClick={() => { setShowNotifications(false); setShowModal(true); }} className="cursor-pointer">سلام ادمین محترم</p>
              <button onClick={() => setShowNotifications(false)} className="bg-blue-600 text-white px-3 py-1 rounded">دیدم</button>
            </div>
            <div className="flex justify-between items-center">
              <p onClick={() => { setShowNotifications(false); setShowModal(true); }} className="cursor-pointer">سلام ادمین محترم</p>
              <button onClick={() => setShowNotifications(false)} className="bg-blue-600 text-white px-3 py-1 rounded">دیدم</button>
            </div>
          </section>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <Modal title="از واحد پشتیبانی" hideModal={hideModal}>
          <p className="my-12 text-center">عالی هستی ادمین عزیز</p>
        </Modal>
      )}
    </>
  );
};

export default Topbar;
