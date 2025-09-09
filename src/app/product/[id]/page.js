import Gallery from "@/Components/templates/product/Gallery";
import Details from "@/Components/templates/product/Details";
import Tabs from "@/Components/templates/product/Tabs";
import MoreProducts from "@/Components/templates/product/MoreProducts";
import Footer from "@/Components/modules/Footer/Footer";
import Navbar from "@/Components/modules/Navbar/Navbar";
import { authUser } from "@/utils/Server/auth";
import ProductModel from '@/models/Product'
import connectToDB from "@/configs/db";

const product = async ({params}) => {

  connectToDB()
  const user = await authUser();

  const productID = params.id
  const product = await ProductModel.findOne({_id : productID}).populate("comments");


  const relatedProducts = await ProductModel.find(({smell : product.smell}))

  return (
    <div className="overflow-auto">
      {/* Navbar */}
      <Navbar isLogin={user} />

      {/* Main Content */}
      <div
        data-aos="fade-up"
        className="max-w-[1200px] mx-auto mt-40 px-4 lg:px-0 text-right text-black font-shabnam pb-20"
      >
        {/* Gallery + Details */}
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* Details */}
          <div className="w-full lg:w-2/3">
            <Details product={JSON.parse(JSON.stringify(product))} />
          </div>

          {/* Gallery */}
          <div className="w-full lg:w-1/3">
            <Gallery />
          </div>
        </div>

        {/* Tabs (Description, MoreInfo, Comments) */}
        <div className="mt-12">
          <Tabs product={JSON.parse(JSON.stringify(product))}/>
        </div>

        {/* More Products Section */}
        <div className="mt-12">
          <MoreProducts relatedProducts={relatedProducts}/>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default product;
