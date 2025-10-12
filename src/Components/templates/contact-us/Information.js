import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Information = () => {
  return (
    <section className="text-right font-Bold font-myfont text-gray-500">
      <span className="text-sm text-gray-400">تماس با ما</span>
      <p className="text-xl mt-4 mb-8">اطلاعات تماس</p>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <PiCoffeeFill className="text-2xl mt-2" />
        <p className="text-base">شرکت فنجان داغ خوارزمی (کارخانه قهوه ست)</p>
      </div>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <FaInternetExplorer className="text-2xl" />
        <p className="text-base">set-coffee.com</p>
      </div>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <BiSolidContact className="text-2xl" />
        <p className="text-base">
          تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان ماگنولیا بلوک آ117
        </p>
      </div>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <FaPhone className="text-2xl" />
        <p className="text-base">021-36479228</p>
      </div>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <FaEnvelopeOpenText className="text-2xl" />
        <p className="text-base">offee[at]set-coffee.com</p>
      </div>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <FaEnvelopeOpenText className="text-2xl" />
        <p className="text-base">whole[at]set-coffee.com</p>
      </div>

      <div className="flex flex-row-reverse items-start gap-3 mb-8">
        <FaTelegramPlane className="text-2xl" />
        <p className="text-base">
          تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563
        </p>
      </div>
    </section>
  );
};

export default Information;
