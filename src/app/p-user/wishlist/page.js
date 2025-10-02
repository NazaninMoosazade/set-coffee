import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Product from "@/Components/templates/p-user/wishlist/Product";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/Server/auth";
import WishlistModel from "@/models/Wishlist";

const page = async () => {
  await connectToDB();
  const user = await authUser();

  const wishlist = await WishlistModel.find({ user: user._id })
    .populate("product")
    .lean();

  // فقط محصولاتی که موجود هستند
  const products = wishlist.filter((wish) => wish.product);

  return (
    <UserPanelLayout>
      <main className="px-8 md:px-12">
        {/* Title */}
        <h1 className="relative text-2xl md:text-3xl font-medium uppercase text-right mt-8 mb-4 z-10">
          <span className="font-myfont font-Bold bg-white pr-4 pl-4 mr-16">علاقه مندی ها</span>
          <span className="absolute inset-x-0 top-1/2 border-b border-[#711d1c] shadow-[0_1px_0_0_#711d1c] z-[-1]" />
        </h1>

        {/* Container */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2">
            {products.map((wish) => (
              <Product
                key={wish._id}
                productID={String(wish.product._id)}
                {...wish.product}
              />
            ))}
          </div>
        ) : (
          <p className="font-myfont font-Bold text-white bg-[#711d1c] px-8 py-3 w-max mx-auto mt-60 text-xl rounded-md">
            محصولی وجود ندارد
          </p>
        )}
      </main>
    </UserPanelLayout>
  );
};

export default page;
