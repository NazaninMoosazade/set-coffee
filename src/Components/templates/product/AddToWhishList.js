"use client";

import React, { useEffect, useState } from "react";
// import { CiHeart } from "react-icons/ci";
import { showSwal } from "@/utils/helper";

function AddToWhishList({ productID }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");
      // console.log(res);
      if (res.status === 200) {
        const data = await res.json();
        // console.log(data);
        setUser({ ...data });
      }
    };

    authUser();
  }, []);

  const addToWishlist = async (event) => {
    event.preventDefault();
    if (!user?._id) {
      return showSwal(
        "برای اضافه کردن به علاقه مندی‌ها لطفا ابتدا لاگین بکنین",
        "error",
        "فهمیدم"
      );
    }

    const wish = {
      user: user._id,
      product: productID,
    };

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    });

    // console.log("Response ->", res);

    if (res.status === 201) {
      showSwal("محصول مورد نظر به علاقه‌مندی‌ها اضافه شد", "success", "فهمیدم");
    }
  };

  return (
    <div className="flex items-center gap-1 text-gray-700 hover:text-gray-500 transition">
      {/* <CiHeart className="text-base lg:text-lg" /> */}
      <button onClick={addToWishlist} className="text-xs lg:text-sm">
        افزودن به علاقه مندی ها
      </button>
    </div>
  );
}

export default AddToWhishList;
