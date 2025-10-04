import React from "react";

function Table({ discounts }) {

  
  return (
    <div className="overflow-x-auto font-myfont font-Bold">
      <table className="w-full bg-[#f2f7fd] rounded-lg shadow-md">
        <thead>
          <tr className="bg-[#e4ebf7] text-black text-sm md:text-base">
            <th className="px-4 py-2 text-center">شناسه</th>
            <th className="px-4 py-2 text-center">کد</th>
            <th className="px-4 py-2 text-center">درصد</th>
            <th className="px-4 py-2 text-center">حداکثر استفاده</th>
            <th className="px-4 py-2 text-center">دفعات استفاده شده</th>
            {/* <th className="px-4 py-2 text-center">حذف</th> */}
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount, index) => (
            <tr
              key={discount._id}
              className="bg-white text-sm md:text-base border-b hover:bg-gray-50 transition"
            >
              <td className={`${discount.uses === discount.maxUse ? 'bg-red-500' : 'bg-emerald-500'} px-4 py-2 text-center`}>{index + 1}</td>
              <td className="px-4 py-2 text-center">{discount.code}</td>
              <td className="px-4 py-2 text-center">{discount.percent}</td>
              <td className="px-4 py-2 text-center">{discount.maxUse}</td>
              <td className="px-4 py-2 text-center">{discount.uses}</td>
              
              {/* <td className="px-4 py-2 text-center">
                <button
                  type="button"
                  className="text-white bg-[#711d1c] hover:bg-red-800 transition px-3 py-1 rounded text-xs md:text-sm"
                >
                  حذف
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
