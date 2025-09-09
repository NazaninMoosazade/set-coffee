"use client";

import Product from "@/Components/modules/Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MoreProducts = ({ relatedProducts }) => {
  return (
    <div data-aos="fade-right" className="mt-12">
      {/* Section Title */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-right">محصولات مرتبط</h2>
        <div className="w-[70px] h-0.5 bg-black mt-2"></div>
      </section>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        dir="rtl"
        rewind={true}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreProducts;
