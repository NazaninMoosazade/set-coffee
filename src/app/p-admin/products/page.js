import React from 'react'
import DataTable from '@/Components/templates/p-admin/products/DataTable'
import AdminPanelLayout from '@/Components/layouts/AdminPanelLayout'
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import AddProduct from '@/Components/templates/p-admin/products/AddProduct';

const page = async () => {
  await connectToDB();
  const products = await ProductModel.find({}).sort({ _id: -1 }).lean();

  return (
    <AdminPanelLayout>
      <main>
        <AddProduct/>
        {products.length === 0 ? (
          <p className="text-white bg-red-900 py-4 px-8 mt-8 rounded text-lg md:text-xl text-center">
            محصولی وجود ندارد
          </p>
        ) : (
          <DataTable
            products={JSON.parse(JSON.stringify(products))}
            title="لیست محصولات"
          />
        )}
      </main>
    </AdminPanelLayout>
  )
}

export default page
