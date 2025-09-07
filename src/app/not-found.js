"use client";

import React from "react";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4 animate-bounce" />

      <h1 className="text-6xl font-bold mb-2 text-gray-800">404</h1>

      <p className="text-xl text-gray-600 mb-6">
        متأسفیم! صفحه‌ای که به دنبال آن بودید پیدا نشد.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
