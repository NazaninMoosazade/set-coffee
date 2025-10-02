import React from "react";
import { IoStatsChart } from "react-icons/io5";

const Box = ({ title, value }) => {
  return (
    <div className="relative w-[270px] mx-auto rounded-md p-4 border-2 border-[#711d1c]">
      <span className="block text-lg font-myfont font-Bold">{value}</span>
      <div className="flex justify-between items-center">
        <p className="relative text-sm text-gray-700 font-myfont font-Mediom
          after:content-[''] after:block after:h-[2px] after:bg-[#711d1c] after:w-[80%] after:relative after:top-[6px] 
          before:content-[''] before:block before:h-[2px] before:bg-[#711d1c] before:w-[58%] before:relative before:top-[40px]">
          {title}
        </p>
        <IoStatsChart className="text-[#711d1c] text-[2.5rem]" />
      </div>
    </div>
  );
};

export default Box;
