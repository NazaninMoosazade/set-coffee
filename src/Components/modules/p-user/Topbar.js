"use client";

import { useState, useEffect } from "react";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import Modal from "./Modal";

const Topbar = ({ toggleSidebar }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

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
    <>
      <div className="w-full bg-[#111111] h-[70px] px-4 md:px-6 flex justify-between items-center text-white border-b-4 border-[#711d1c]">
        
        {/* Hamburger موبایل */}
        <button className="md:hidden text-xl" onClick={toggleSidebar}>☰</button>

        {/* Profile */}
        <div className="flex items-center gap-2 flex-row-reverse">
          <div className="text-right">
            <p className="font-medium">
              {loading ? "در حال بارگذاری..." : user?.name || "ناشناخته"}
            </p>
            <span className="text-sm text-gray-400">
              پنل کاربری
            </span>
          </div>
          <img 
            src="/images/shahin.jpg" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>


      </div>

      {/* Notifications Overlay */}
      {showNotifications && (
        <>
          <div onClick={() => setShowNotifications(false)} className="fixed inset-0 bg-black/40 z-40"/>
          <section className="absolute top-[70px] left-4 md:left-12 z-50 bg-[#711d1c] w-72 rounded-lg p-4 text-white flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p onClick={() => { setShowNotifications(false); setShowModal(true); }} className="cursor-pointer">سلام کاربر محترم</p>
              <button onClick={() => setShowNotifications(false)} className="bg-blue-600 text-white px-3 py-1 rounded">دیدم</button>
            </div>
          </section>
        </>
      )}

      {/* Modal */}
      {showModal && (
        <Modal title="پیام پشتیبانی" hideModal={hideModal}>
          <p className="my-12 text-center">عالی هستید!</p>
        </Modal>
      )}
    </>
  );
};

export default Topbar;
