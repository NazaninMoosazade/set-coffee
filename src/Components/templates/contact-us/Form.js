const Form = () => {
  return (
    <form className="text-right">
      <span className="text-sm text-gray-400">فرم تماس با ما</span>
      <p className="text-xl mt-4 mb-8">
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </p>

      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">نام و نام خانوادگی</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">آدرس ایمیل</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">شماره تماس</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-gray-700">نام شرکت</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-black text-base focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="text-gray-700">درخواست شما</label>
        <textarea
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-md text-black text-base resize-none focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#34180e] text-white font-semibold rounded-md hover:bg-[#008979] transition-colors"
      >
        ارسال
      </button>
    </form>
  );
};

export default Form;
