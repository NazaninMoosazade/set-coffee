import Gallery from "@/Components/templates/product/Gallery";
import Details from "@/Components/templates/product/Details";
import Tabs from "@/Components/templates/product/Tabs";
import Footer from "@/Components/modules/Footer/Footer";
import Navbar from "@/Components/modules/Navbar/Navbar";
import { authUser } from "@/utils/Server/auth";
import ProductModel from '@/models/Product'
import connectToDB from "@/configs/db";

const ProductPage = async ({ params }) => {
  await connectToDB();

  let user = null;
  try { user = await authUser(); } 
  catch (err) { console.warn("User not authenticated"); }

  const productID = params.id;
  const product = await ProductModel.findOne({ _id: productID }).populate("comments");

  if (!product) {
    return (
      <>
        <Navbar isLogin={user} />
        <div className="container mx-auto mt-20 text-center">
          <h1 className="text-2xl font-bold">محصول یافت نشد!</h1>
        </div>
        <Footer />
      </>
    );
  }

  const productData = JSON.parse(JSON.stringify(product));

  return (
    <div className="overflow-auto">
      {/* Navbar */}
      <Navbar isLogin={user} />

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto mt-16 px-4 lg:px-0 text-right text-black font-shabnam pb-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          <div className="w-full lg:w-2/3">
            <Details product={productData} />
          </div>
          <div className="w-full lg:w-1/3">
            <Gallery images={[productData.img]} />
          </div>
        </div>

        <div className="mt-12">
          <Tabs product={productData} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
