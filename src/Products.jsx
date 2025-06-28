import React from "react";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";

function Products() {
  return (
    <div className="overflow-x-hidden px-4 py-12 lg:px-15 lg:py-18">
      <NewArrivals />
      <hr className="my-10 opacity-10" />
      <TopSelling />
    </div>
  );
}

export default Products;
