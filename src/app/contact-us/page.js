import React from "react";
import Footer from "@/Components/modules/Footer/Footer";
import Navbar from "@/Components/modules/Navbar/Navbar";
import { authUser } from "@/utils/Server/auth";
import Information from "@/Components/templates/contact-us/Information";
import Form from "@/Components/templates/contact-us/Form";
// import Map from "@/Components/templates/contact-us/Map";
import Link from "next/link";

function page() {
  const user = authUser();

  return (
    <>
      <Navbar isLogin={user} />

      <div className="text-black text-right max-w-[1222px] w-full px-4 mx-auto mb-16">
        <main className="z-0 flex flex-col md:flex-row gap-9 mt-12">
          {/* اولین نقشه */}
          <section className="w-full md:w-1/2 relative">
            {/* <Map
              position={[35.72021225108499, 51.42222691580869]}
              center={[35.72021225108499, 51.42222691580869]}
            >
              {/* کارت اطلاعات روی نقشه */}
              {/* <div className="absolute z-40 left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/3 w-11/12 md:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <span className="text-gray-500 text-sm">فروشگاه ما</span>
                <h3 className="mt-2 text-lg font-semibold">
                  آدرس فروشگاه حضوری قهوه ست (شعبه جم)
                </h3>
                <p className="mt-2 text-gray-700">
                  تهران – خ کریمخان زند – خ قائم مقام فراهانی – ابتدای خ فجر(جم)
                  – شماره ۱۰
                </p>
                <p className="mt-1 text-gray-700">021-88305827</p>
                <Link href="/about-us" className="underline text-sm mt-2 block">
                  درباره فروشگاه
                </Link>
              </div> */}
            {/* </Map> */} 
          </section>

          {/* دومین نقشه */}
          <section className="w-full md:w-1/2 relative">
            {/* <Map
              position={[35.70153474690238, 51.41497422314844]}
              center={[35.70153474690238, 51.41497422314844]}
            >
              {/* <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/3 w-11/12 md:w-3/4 bg-white p-4 md:p-6 rounded-lg shadow-lg z-50">
                <span className="text-gray-500 text-sm">فروشگاه ما</span>
                <h3 className="mt-2 text-lg font-semibold">
                  آدرس فروشگاه حضوری قهوه ست (شعبه جم)
                </h3>
                <p className="mt-2 text-gray-700">
                  تهران – خ کریمخان زند – خ قائم مقام فراهانی – ابتدای خ فجر(جم)
                  – شماره ۱۰
                </p>
                <p className="mt-1 text-gray-700">021-88305827</p>
                <Link href="/about-us" className="underline text-sm mt-2 block">
                  درباره فروشگاه
                </Link>
              </div> */}
            {/* </Map> */} 
          </section>
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
