import React from "react";
import top1 from "./assets/top1.png";
import top2 from "./assets/top2.png";
import top3 from "./assets/top3.png";
import top4 from "./assets/top4.png";
import stars from "./assets/stars.png";

function TopSelling() {
  return (
    <div>
      <h1 className="font-integral font-bold text-3xl mb-8 text-center lg:text-5xl lg:mb-13">
        TOP SELLING
      </h1>
      <div className="flex gap-4">
        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img
              src={top1}
              alt="new1"
              className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Vertical Striped Shirt
          </p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              5.0/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$212</span>
            <span className="opacity-60 line-through font-bold lg:text-2xl">
              $235
            </span>
            <span className="py-1 px-3 bg-[#ff333310] text-[#FF3333] text-[10px] rounded-[50px] lg:text-xs">
              -20%
            </span>
          </div>
        </div>

        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img
              src={top2}
              alt="new1"
              className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Courage Graphic T-shirt
          </p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.0/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$145</span>
          </div>
        </div>

        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img
              src={top3}
              alt="new1"
              className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Loose Fit Bermuda Short
          </p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              3.0/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$80</span>
          </div>
        </div>

        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img
              src={top4}
              alt="new1"
              className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Faded Skinny Jeans
          </p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$210</span>
          </div>
        </div>
      </div>
      <button className="w-[358px] h-[52px] mt-6 mb-4 px-[54px] rounded-[62px] border-2 border-black/10 lg:block lg:mx-auto">
        View All
      </button>
    </div>
  );
}

export default TopSelling;
