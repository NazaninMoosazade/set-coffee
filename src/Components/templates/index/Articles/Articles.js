"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <div className="container mx-auto text-center mt-20 px-4 sm:px-6 lg:px-8">
      <p className="font-myfont font-Bold text-green-600 text-4xl">مقالات ما</p>
      <span className="font-myfont font-Light text-xl block mt-2">
        دانستنی های جذاب دنیای قهوه
      </span>

      <main className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          dir="rtl"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mt-10 relative"
        >
          {articles?.map((article) => {
            const formattedDate = new Date(article.createdAt).toLocaleDateString("fa-IR");
            return (
              <SwiperSlide key={article._id}>
                <Article
                  _id={article._id}
                  img={article.img}
                  title={article.title}
                  content={article.content}
                  tags={article.tags}
                  createdAt={formattedDate}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </div>
  );
};

export default Articles;
