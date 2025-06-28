import React from "react";
import top1 from "./assets/top1.png";
import top2 from "./assets/top2.png";
import top3 from "./assets/top3.png";
import top4 from "./assets/top4.png";
import stars from "./assets/stars.png";

function TopSelling() {
  return (
    <div>
      <h1 className="font-integral mb-8 text-center text-3xl font-bold lg:mb-13 lg:text-5xl">
        TOP SELLING
      </h1>
      <div className="flex gap-4">
        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img
              src={top1}
              alt="new1"
              className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Vertical Striped Shirt
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              5.0/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$212</span>
            <span className="font-bold line-through opacity-60 lg:text-2xl">
              $235
            </span>
            <span className="rounded-[50px] bg-[#ff333310] px-3 py-1 text-[10px] text-[#FF3333] lg:text-xs">
              -20%
            </span>
          </div>
        </div>

        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img
              src={top2}
              alt="new1"
              className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Courage Graphic T-shirt
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.0/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$145</span>
          </div>
        </div>

        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img
              src={top3}
              alt="new1"
              className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Loose Fit Bermuda Short
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              3.0/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$80</span>
          </div>
        </div>

        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img
              src={top4}
              alt="new1"
              className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Faded Skinny Jeans
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$210</span>
          </div>
        </div>
      </div>
      <button className="mt-6 mb-4 h-[52px] w-[358px] rounded-[62px] border-2 border-black/10 px-[54px] lg:mx-auto lg:block">
        View All
      </button>
    </div>
  );
}

export default TopSelling;
