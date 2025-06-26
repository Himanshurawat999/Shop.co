import React from "react";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";

function Products() {
  return (
    <div className="px-4 py-12 overflow-x-hidden">
      <NewArrivals />
      <hr className="my-10 opacity-10"/>
      <TopSelling />
    </div>
  );
}

export default Products;
