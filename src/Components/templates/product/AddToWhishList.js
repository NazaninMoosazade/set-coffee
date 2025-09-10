'use client'

import React from 'react'
import { CiHeart } from "react-icons/ci";

const AddToWhishList = () => {

  const handleAddToWhishList = (e) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه
    console.log('AddToWhishList');
  }

  return (
    <div className="flex items-center gap-1 text-gray-700 hover:text-gray-500 transition">
      {/* <CiHeart className="text-base lg:text-lg" /> */}
      <button 
        onClick={handleAddToWhishList} 
        className="text-xs lg:text-sm"
      >
        افزودن به علاقه مندی ها
      </button>
    </div>
  )
}

export default AddToWhishList
