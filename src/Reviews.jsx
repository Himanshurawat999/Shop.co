import React from "react";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import starsFull from "./assets/stars-full.png";
import tick from "./assets/tick.png";

function Reviews() {
  return (
    <div className="px-4 mb-12 lg:mb-20 lg:px-24">
      <div className="mb-6 flex lg:justify-between">
        <h1 className="font-integral font-bold text-3xl w-[286px]  lg:text-5xl lg:w-auto">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex items-end gap-3">
          <img src={arrowLeft} alt="arrowLeft" className="h-6" />
          <img src={arrowRight} alt="arrowRight" className="h-6" />
        </div>
      </div>

      <div className="lg:flex lg:gap-5">
        <div className="border-2 border-black/10 p-6 rounded-2xl lg:px-8 lg:py-7 lg:mt-10 lg:w-[400px] lg:rounded-3xl">
          <img src={starsFull} alt="stars" />
          <div className="flex items-center gap-1 mt-3 mb-2 lg:mt-4 lg:mb-3">
            <h3 className="font-bold lg:text-xl">Sarah M.</h3>
            <img src={tick} alt="tick" />
          </div>
          <p className="opacity-60">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>

        <div className="hidden border-2 border-black/10 p-6 rounded-2xl lg:px-8 lg:py-7 lg:mt-10 lg:w-[400px] lg:rounded-3xl lg:block">
          <img src={starsFull} alt="stars" />
          <div className="flex items-center gap-1 mt-3 mb-2 lg:mt-4 lg:mb-3">
            <h3 className="font-bold lg:text-xl">Alex K.</h3>
            <img src={tick} alt="tick" />
          </div>
          <p className="opacity-60">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>

        <div className="hidden border-2 border-black/10 p-6 rounded-2xl lg:px-8 lg:py-7 lg:mt-10 lg:w-[400px] lg:rounded-3xl lg:block">
          <img src={starsFull} alt="stars" />
          <div className="flex items-center gap-1 mt-3 mb-2 lg:mt-4 lg:mb-3">
            <h3 className="font-bold lg:text-xl">James L.</h3>
            <img src={tick} alt="tick" />
          </div>
          <p className="opacity-60">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
