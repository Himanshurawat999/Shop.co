import React from "react";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import starsFull from "./assets/stars-full.png";
import tick from "./assets/tick.png";

function Reviews() {
  return (
    <div className="px-4 mb-12">
      <div className="mb-6 flex">
        <h1 className="font-integral font-bold text-3xl w-[286px]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex items-end gap-3">
          <img src={arrowLeft} alt="arrowLeft" className="h-6" />
          <img src={arrowRight} alt="arrowRight" className="h-6" />
        </div>
      </div>
      <div className="border-2 border-black/10 p-6 rounded-2xl">
        <img src={starsFull} alt="stars" />
        <div className="flex items-center gap-1 mt-3 mb-2">
          <h3 className="font-bold">Sarah M.</h3>
          <img src={tick} alt="tick" />
        </div>
        <p className="opacity-60">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
      </div>
    </div>
  );
}

export default Reviews;
