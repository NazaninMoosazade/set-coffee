"use client";

import React, { useState } from "react";
import swal from "sweetalert";
import Sms from "../Sms";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOtpForm = () => setIsRegisterWithOtp(false);

  const signUp = async () => {
    const user = { name, phone, email, password };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    if (res === 201) {
      swal({
        title: "ثبت نام انجام شد",
        icon: "ok",
      });
    }
  };

  return (
    <>
      {!isRegisterWithOtp ? (
        <div className="grid bg-white p-6 w-full max-w-[380px] font-[shabnam] mx-auto mt-20 mb-8 rounded-xl shadow-lg text-center text-black">
          {/* نام */}
          <input
            className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
            type="text"
            placeholder="نام"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {/* شماره موبایل */}
          <input
            className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
            type="text"
            placeholder="شماره موبایل"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          {/* ایمیل */}
          <input
            className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
            type="email"
            placeholder="ایمیل (دلخواه)"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* رمز عبور (در صورت نیاز) */}

          {isRegisterWithPass && (
            <input
              className="font-[shabnam] p-3 bg-white text-black rounded-md border border-gray-400 rtl mt-5 w-full focus:outline-none focus:ring-2 focus:ring-[#34180e]"
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          )}

          {/* دکمه ثبت نام با کد تایید */}
          <p
            onClick={() => setIsRegisterWithOtp(true)}
            className="mt-4 p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition"
          >
            ثبت نام با کد تایید
          </p>

          {/* دکمه ثبت نام با رمزعبور */}
          <button
            onClick={() => {
              if (isRegisterWithPass) {
                signUp();
              } else {
                setIsRegisterWithPass(true);
              }
            }}
            className="mt-3 p-3 cursor-pointer font-[shabnam] bg-[#34180e] text-white rounded-lg hover:bg-[#452315] transition"
          >
            ثبت نام با رمز عبور
          </button>

          {/* برگشت به ورود */}
          <button
            onClick={showloginForm}
            className="text-sm text-center mt-4 cursor-pointer mb-12 hover:underline"
          >
            برگشت به ورود
          </button>
        </div>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Register;
