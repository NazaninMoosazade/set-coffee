import { MdOutlineCopyright } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 mt-20 pt-10 text-white">
      <main className="container mx-auto flex flex-col md:flex-row-reverse justify-between text-right gap-10 md:gap-0 pb-10">
        
        {/* بخش توضیحات */}
        <section className="w-full md:w-72 p-3 text-sm leading-relaxed space-y-4">
          <img src="/images/logo_light.png" alt="logo" className="mb-4" />
          <p className="mt-5 mb-7">
            شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
          </p>

          <div className="flex items-start gap-2 mt-2">
            <FaRegHeart className="text-2xl mt-1" />
            <p>
              تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
              خیابان ماگنولیا بلوک آ117
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaRegHeart />
            <p>پیگیری سفارشات : 02188305827</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaRegHeart />
            <p>support [at] set-coffee.com</p>
          </div>
        </section>

        {/* بخش لینک‌ها */}
        <ul className="flex flex-col sm:flex-row gap-10 md:gap-20 text-right">
          <div>
            <h4 className="mb-4 font-bold">منوی فوتر</h4>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/about-us"}>درباره ما</Link>
            </li>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/rules"}>قوانین</Link>
            </li>
          </div>
          <div>
            <h4 className="mb-4 font-bold">دسترسی سریع</h4>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/category"}>فروشگاه</Link>
            </li>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/articles"}>مقالات</Link>
            </li>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/cart"}>سبد خرید</Link>
            </li>
            <li className="mt-2 text-neutral-400 hover:text-white">
              <Link href={"/wishlist"}>علاقه مندی ها</Link>
            </li>
          </div>
        </ul>

        {/* بخش مجوزها */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 h-auto items-center">
          <img
            src="/images/license4.htm"
            width={76}
            height={76}
            alt="license"
          />
          <img
            src="/images/license1.png"
            width={85}
            height={85}
            alt="license"
          />
          <img src="/images/license3.png" alt="license" />
          <img
            src="/images/license2.svg"
            width={62}
            height={95}
            alt="license"
            className="ml-0 md:ml-4"
          />
        </div>
      </main>

      <hr className="border-neutral-600" />

      <div className="container mx-auto">
        <p className="py-5 text-xs text-right text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
          2023 <MdOutlineCopyright /> تمام حقوق متعلق است به
          <strong className="text-white"> قهوه ست </strong> | طراحی و اجرا
          <strong className="text-white"> نازنین موسی زاده</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
