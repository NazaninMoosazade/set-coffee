"use client";

import { IoClose } from "react-icons/io5";

const Modal = ({ hideModal, title, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-36 px-4">
      {/* Overlay */}
      <div
        onClick={hideModal}
        className="fixed inset-0 bg-black/40 z-40"
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-md p-6 z-50 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-black/30 pb-2 mb-4">
          <span className="text-lg font-medium">{title}</span>
          <IoClose
            onClick={hideModal}
            className="cursor-pointer text-xl"
          />
        </div>

        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
