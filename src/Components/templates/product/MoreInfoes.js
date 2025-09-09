import React from "react";

const MoreInfoes = ({product}) => {
  return (
    <div>
      <p>اطلاعات بیشتر :</p>
      <hr />
      <main className="space-y-6">
        <div className="mt-5" style={{ display: "flex", justifyContent: "space-between" }}>
          <p>وزن</p>
          <p>{product.weight} گرم</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>مناسب برای عموم</p>
          <p>{product.suitableFor} </p>
        </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>  میزان بو</p>
          <p>{product.smell} </p>
        </div>
      </main>
    </div>
  );
};

export default MoreInfoes;
