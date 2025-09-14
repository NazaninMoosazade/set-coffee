"use client";

import { useEffect, useState } from "react";

const Price = ({ value, currency = "تومان" }) => {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    if (value != null) {
      setFormatted(new Intl.NumberFormat("fa-IR").format(value));
    }
  }, [value]); // فقط value dependency

  if (value == null) return null;

  return (
    <span className="text-[rgb(52,24,14)] text-xl lg:text-2xl font-bold my-4 lg:my-6">
      {formatted} {currency}
    </span>
  );
};

export default Price;
