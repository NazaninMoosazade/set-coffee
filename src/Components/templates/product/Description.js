import React from "react";

const Description = ({ product }) => {
  return (
    <div>
      <p className="font-bold">توضیحات :</p>
      <hr className="my-2" />

      {/* کوتاه */}
      <h3 className="text-lg">{product.shortDescription}</h3>

      {/* بلند */}
      <p className="mt-4 leading-7 text-gray-700 whitespace-pre-line">
        {product.longDescription}
      </p>
    </div>
  );
};

export default Description;
