import React from "react";
import Navbar from "@/Components/modules/Navbar/Navbar";
import Footer from "@/Components/modules/Footer/Footer";
import { authUser } from "@/utils/Server/auth";

const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user} />
      <div className="max-w-[1222px] w-full mx-auto mb-16 px-4 text-right text-black">
        {/* بخش درباره ما */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[110px] py-10 text-gray-700">
          <div className="grid gap-1 mb-6 md:mb-0">
            <span className="text-sm font-myfont font-light">درباره ما</span>
            <p className="text-2xl font-myfont font-Bold leading-[2.4rem]">
              فنجان داغ خوارزمی قهوه ست
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4 text-gray-700">
            <p className="text-base leading-8 font-myfont font-Light">
              تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
              ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه
              راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید
              قهوه است.
            </p>
            <p className="text-base font-myfont font-Light leading-8">
              مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
              2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee
              association of Europe) در آمده است.
            </p>
          </div>
        </section>

        {/* بخش اصلی */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[90px] mt-[150px] mb-[150px]">
          <div className="space-y-5 font-myfont font-Light">
            <p className="mt-5 leading-7">
              مسیری را که بنیان‌گذاران «قهوه ست» در دهه 20 شمسی آغاز کرده‌اند
              اکنون وارد مرحله جدیدی شده است و مفتخریم اعلام کنیم در بهمن ماه 94
              موفق به اخذ مجوزهای مربوطه از وزارت بهداشت درمان و آموزش پزشکی و
              سازمان غذا دارو شده‌ایم و تولید سنتی و محدود قهوه را تبدیل به
              تولید صنعتی و انبوه کرده‌ایم.
            </p>
            <p className="leading-7 " >
              از دیگر افتخارات مجموعه «قهوه ست» اخذ مدرک دیپلم دانش قهوه از
              انجمن قهوه تخصصی اروپا در فروردین ماه سال 95 است. (SCAE Coffee
              Diploma)
            </p>
            <p className="leading-7">
              امید داریم با کسب دانش روز دنیا در این صنعت ارتقا کیفیت و تنوع
              محصول در حد استانداردهای جهانی را در آینده‌ای نزدیک شاهد باشیم.
            </p>
            <p className="leading-7">صاحب امتیاز: شرکت فنجان داغ خوارزمی</p>
          </div>

          <div className="space-y-5">
            <span className="text-sm">Set Coffee</span>
            <p className="text-[35px] my-2 font-myfont font-Bold">داستان قهوه ست</p>
            <p className="leading-7 font-myfont font-Light">
              تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان ضامن این
              ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه ست واردات مواد اولیه
              راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد اولیه جهت تولید
              قهوه است.
            </p>
            <p className="leading-7 font-myfont font-Light">
              مجموعه قهوه ست اولین مجموعه مرتبط با قهوه در ایران است که در سال
              2007 به عضویت انجمن تخصصی قهوه اروپا (Speciality coffee
              association of Europe) در آمده است و بسیاری از دوره‌های مربوط به
              فرآوری قهوه را مدیریت این مجموعه به صورت تخصصی در کارگاه‌های
              آموزشی این انجمن و همچنین کارگاه‌های تخصصی فرآوری قهوه به خصوص در
              زمینه بو دادن قهوه(Roasting) را در کشور آمریکا که از پیشگامان این
              صنعت است را گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و
              تکنولوژی روز دنیا وارد مرحله تولید قهوه به صورت صنعتی و گسترده
              شده‌ایم و مفتخریم اعلام کنیم که «قهوه ست» از این پس یک نام تجاری
              صنعتی در صنعت قهوه ایران است
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default page;
