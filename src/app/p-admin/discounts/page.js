import DataTable from "@/Components/templates/p-admin/discounts/DataTable";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discout";
import AddDiscount from "@/Components/templates/p-admin/discounts/AddDiscount";

const Discounts = async () => {
  await connectToDB();
  const discounts = await DiscountModel.find({}).sort({_id: -1}).lean();

  return (
    <AdminPanelLayout>
      <main className="p-5">
        <AddDiscount />

        {discounts.length === 0 ? (
          <p className="mt-6 font-myfont font-Bold text-center px-6 py-2 bg-[#711d1c] text-white rounded-md hover:bg-red-800 transition ">
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
