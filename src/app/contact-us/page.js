import React from "react";
import Footer from "@/Components/modules/Footer/Footer";
import Navbar from "@/Components/modules/Navbar/Navbar";
import { authUser } from "@/utils/Server/auth";
import Information from "@/Components/templates/contact-us/Information";
import Form from "@/Components/templates/contact-us/Form";


function page() {
  const user = authUser();

  return (
    <>
      <Navbar isLogin={user} />

      <div className="text-black text-right max-w-[1222px] w-full px-4 mx-auto mb-16">
        <main className="z-0 flex flex-col md:flex-row gap-9 mt-12">
        </main>
      </div>

      <div className="max-w-[1222px] w-full mx-auto mb-16  px-4 text-right text-black">
        <div className="flex flex-col md:flex-row gap-9 ">
          <div className="w-full md:w-1/2">
            <Form />
          </div>
          <div className="w-full md:w-1/2">
            <Information />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
