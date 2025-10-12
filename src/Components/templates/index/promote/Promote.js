import Link from "next/link";

const Promote = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div
          data-aos="fade-up-right"
          className="max-w-[1222px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* بخش اول */}
          <main className="flex flex-col md:flex-row-reverse justify-between mt-20 mb-12 text-right gap-8 md:gap-4">
            {/* متن */}
            <section className="w-full md:w-1/2 font-shabnam text-black text-center md:text-right p-6 md:p-10">
              <span className="font-myfont font-Bold text-[#114639] text-2xl md:text-3xl block mb-4">
                خرید قهوه ، به سبک حرفه ای ها
              </span>
              <p className="font-myfont font-Light text-gray-500 mb-8 md:mb-20 text-sm md:text-base">
                زیبایی امروز رو با قهوه “ست” کنید
              </p>
              <img
                data-aos="fade-left"
                src="/images/coffee-image-1.jpg"
                alt=""
                className="w-full h-auto rounded-lg"
              />
            </section>

            {/* تصویر باشگاه */}
            <section
              className="relative w-full md:w-[60%] bg-no-repeat bg-cover rounded-lg"
              style={{ backgroundImage: "url('/images/clubset1.jpg')" }}
            >
              <div className="absolute bottom-5 left-0 p-6 md:p-8 w-full max-w-[411px] bg-white rounded-md shadow-lg">
                <span className="font-myfont font-Bold block mb-2">
                  باشگاه مشتریان ست
                </span>
                <p className="font-myfont font-Light mt-2 text-gray-600 text-sm">
                  برای مشتریان وفادار قهوه ست
                </p>
              </div>
            </section>
          </main>

          {/* بخش دوم */}
          <main className="flex flex-col md:flex-row-reverse justify-between mt-20 mb-12 gap-8 md:gap-4">
            <img
              width={660}
              height={530}
              src="/images/Home32.jpg"
              alt=""
              className="w-full md:w-[50%] h-auto rounded-lg"
            />

            <section
              data-aos="fade-up"
              className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 py-12 md:py-20 font-shabnam text-right"
            >
              <img
                className="w-20 ml-auto mb-4"
                src="/images/coffee-svg-2.svg"
                alt=""
              />
              <p className="font-myfont font-Bold text-[#711d1c] text-3xl md:text-4xl mb-4">
                چرا قهوه ست
              </p>
              <p className="font-myfont font-Light text-gray-500 text-sm md:text-base leading-7 md:leading-8 mb-6">
                برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
                راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم)
                است. تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان
                قهوه ضامن این ویژگی‌ها است.
              </p>
      
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Promote;
