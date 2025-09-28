import DataTable from '@/Components/templates/p-admin/discounts/DataTable'
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discout";

const Discounts = async () => {
  await connectToDB();
  const discounts = await DiscountModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main className="p-5">
        <section className="p-5 bg-white rounded-lg shadow-md">
          <p className="mt-2 mb-8 text-right uppercase text-2xl md:text-3xl font-bold relative z-10">
            افزودن کد تخفیف جدید
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-lg mb-1">شناسه تخفیف</label>
              <input
                placeholder="لطفا شناسه تخفیف را وارد کنید"
                type="text"
                className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg mb-1">درصد تخفیف</label>
              <input
                placeholder="لطفا درصد تخفیف را وارد کنید"
                type="text"
                className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg mb-1">حداکثر استفاده</label>
              <input
                placeholder="حداکثر استفاده از کد تخفیف"
                type="text"
                className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg mb-1">محصول</label>
              <select className="p-2 border-2 border-[#711d1c] rounded-md outline-none text-black">
                <option value="">قهوه ترک</option>
                <option value="">قهوه عربیکا</option>
                <option value="">قهوه اسپرسو</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 px-6 py-2 bg-[#711d1c] text-white rounded-md hover:bg-red-800 transition ml-auto block"
          >
            افزودن
          </button>
        </section>

        {discounts.length === 0 ? (
          <p className="mt-6 text-center text-gray-600 text-lg">
            کد تخفیفی وجود ندارد
          </p>
        ) : (
          <div className="mt-6">
            <DataTable discounts={JSON.parse(JSON.stringify(discounts))} />
          </div>
        )}
      </main>
    </AdminPanelLayout>
  );
};

export default Discounts;
