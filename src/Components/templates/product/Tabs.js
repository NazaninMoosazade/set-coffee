"use client";
import React, { useState } from "react";
import Description from "./Description";
import MoreInfoes from "./MoreInfoes";
import Comments from "./Comments";

const Tabs = ({ product }) => {
  const [tab, setTab] = useState("description");

 const tabs = [
  { id: "description", label: "توضیحات", component: <Description product={product} /> },
  { id: "moreInfoes", label: "اطلاعات بیشتر", component: <MoreInfoes product={product}/> },
  {
    id: "comments",
    label: ` ${product.comments.length} نظرات`,
    component: (
      <Comments productID={product._id} comments={product.comments} />
    ),
  },
];


  return (
    <div data-aos="fade-left" className="w-full px-4 lg:px-0 mt-8">
      {/* Tab Buttons */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 border-b border-gray-300">
        {tabs.map((t) => (
          <li key={t.id} className="font-myfont font-Bold flex-1 text-center">
            <button
              onClick={() => setTab(t.id)}
              className={`relative py-3 px-2 sm:px-4 text-sm sm:text-base font-bold transition-colors duration-300
                ${
                  tab === t.id
                    ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-gray-800 after:to-gray-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-6 text-sm sm:text-base leading-6 space-y-4">
        {tabs.map(
          (t) =>
            tab === t.id && (
              <section key={t.id} className="animate-fadeIn">
                {t.component}
              </section>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
