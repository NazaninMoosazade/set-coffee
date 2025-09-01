import Navbar from "@/Components/modules/Navbar/Navbar";
import Articles from "@/Components/templates/index/Articles/Articles";
import Banner from "@/Components/templates/index/banner/Banner";
import Latest from "@/Components/templates/index/latest/latest";
import Promote from "@/Components/templates/index/promote/Promote";
import Footer from "@/Components/modules/Footer/Footer";

import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Latest/>
      <Promote/>
      <Articles/>
      <Footer/>
    </>
  );
}
