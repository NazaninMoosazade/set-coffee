import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import Product from "@/Components/modules/Product/Product";

const Latest = () => {
  return (
    <div className="container">
      <section className="flex items-center justify-between mt-16">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm lg:text-4xl text-green">آخرین محصولات</p>
          <span className="">Latest products</span>
        </div>
        <Link href={"/category"} className="flex items-center gap-x-2">
          مشاهده همه <FaChevronLeft />
        </Link>
      </section>
      <main className="container">
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </main>
    </div>
  );
};

export default Latest;
