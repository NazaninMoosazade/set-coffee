"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Article from "./Article";

const Articles = () => {
  return (
    <div className="container mx-auto text-center mt-20 px-4 sm:px-6 lg:px-8">
      <p className="font-myfont font-Bold text-green-600 text-4xl">مقالات ما</p>
      <span className="font-myfont font-Light text-xl block mt-2">دانستنی های جذاب دنیای قهوه</span>

      <main className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          dir="rtl"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          // navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mt-10 relative"
        >
          {Array.from({ length: 9 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <Article />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};

export default Articles;
