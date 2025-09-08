"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    "https://set-coffee.com/wp-content/uploads/2020/12/Gold-DG-700x700.jpg",
    "https://set-coffee.com/wp-content/uploads/2020/12/Gold-box-DG--150x150.jpg",
  ];

  return (
    <section className="w-full px-4 lg:px-0">
      {/* Main Image Slider */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-2xl overflow-hidden shadow-lg"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Gallery image ${idx}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 }, // روی موبایل ۳ تا، روی تبلت و دسکتاپ ۴ تا
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="cursor-pointer">
            <img
              src={img}
              alt={`Thumbnail ${idx}`}
              className="w-full h-auto object-cover rounded-xl border border-gray-200 hover:border-gray-400 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
