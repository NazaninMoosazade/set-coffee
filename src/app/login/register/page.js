"use client";

import React, { useState } from "react";
import Login from "@/Components/templates/login/register/Login";
import Register from "@/Components/templates/login/register/Register";
import { authTypes } from "@/utils/contans";

const LoginRegister = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm  = () =>{
    setAuthType(authTypes.REGISTER)
  }

  
  const showloginForm  = () =>{
    setAuthType(authTypes.LOGIN)
  }


  return (
    <div className="h-screen overflow-hidden w-full bg-gradient-to-b from-[#ede6ea] to-[#ede6ea] flex flex-col md:flex-row">
      {/* فرم */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-6"
        data-aos="fade-up"
      >
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
      </div>

      {/* سکشن عکس */}
      <section className="w-full md:w-1/2 h-[300px] md:h-full bg-[#34180e] flex items-center justify-center">
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt="coffee"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
};

export default LoginRegister;
