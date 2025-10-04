"use client";
import React, { useState } from "react";
import { showSwal } from "@/utils/helper";
import swal from "sweetalert";

export default function DataTable({ products: initialProducts, title }) {
  const [products, setProducts] = useState(initialProducts);

  const showProductBody = (shortDescription) => {
    showSwal(shortDescription, undefined, "خوندم");
  };

  const deleteProduct = (productID) => {
    swal({
      title: "آیا از حذف محصول اطمینان داری؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (res) => {
      if (res) {
        try {
          const response = await fetch("/api/products/delete", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: productID }),
          });

          const data = await response.json();

          if (response.ok) {
            swal("موفق!", data.message, "success");
            setProducts((prev) => prev.filter((product) => product._id !== productID));
          } else {
            swal("خطا!", data.message, "error");
          }
        } catch (err) {
          swal("خطا!", err.message, "error");
        }
      }
    });
  };

  return (
    <div className="p-4 font-myfont font-Bold md:p-8">
      {/* Title */}
      <div className="relative text-right my-8">
        <h1 className="text-2xl md:text-3xl font-medium uppercase inline-block relative z-10">
          <span className="bg-white px-4">{title}</span>
        </h1>
        <div className="absolute top-1/2 left-0 right-0 w-[95%] border-b border-red-900 z-0"></div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-md">
        <table className="min-w-full bg-white text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">شناسه</th>
              <th className="py-2 px-4">نام</th>
              <th className="py-2 px-4">قیمت</th>
              <th className="py-2 px-4">امتیاز</th>
              <th className="py-2 px-4">مشاهده جزئیات</th>
              {/* <th className="py-2 px-4">ویرایش</th> */}
              <th className="py-2 px-4">حذف</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="odd:bg-white even:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.price.toLocaleString()}</td>
                <td className="py-2 px-4">{product.score}</td>
                <td className="py-2 px-4" onClick={() => showProductBody(product.shortDescription)}>
                  <button className="bg-black text-white px-3 py-1 rounded w-full hover:bg-gray-800 transition">
                    مشاهده جزئیات
                  </button>
                </td>
                {/* <td className="py-2 px-4">
                  <button className="bg-black text-white px-3 py-1 rounded w-full hover:bg-gray-800 transition">
                    ویرایش
                  </button>
                </td> */}
                <td onClick={() => deleteProduct(product._id)} className="py-2 px-4">
                  <button className="bg-red-900 text-white px-3 py-1 rounded w-full hover:bg-red-700 transition">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {products.length === 0 && (
          <div className="text-center text-white bg-red-900 py-4 px-8 mt-8 rounded text-lg md:text-xl mx-auto w-max">
            محصولی یافت نشد
          </div>
        )}
      </div>
    </div>
  );
}
