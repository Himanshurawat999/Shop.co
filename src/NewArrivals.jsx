import React from "react";
import new1 from "./assets/new1.png";
import new2 from "./assets/new2.png";
import new3 from "./assets/new3.png";
import new4 from "./assets/new4.png";
import stars from "./assets/stars.png";

function NewArrivals() {
  return (
    <div className="">
      <h1 className="font-integral font-bold text-3xl mb-8 text-center lg:text-5xl lg:mb-13">
        NEW ARRIVALS
      </h1>
      <div className="flex gap-4">
        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img
              src={new1}
              alt="new1"
              className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            T-shirt with Tape Details
          </p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$120</span>
          </div>
        </div>

        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img src={new2} alt="new1" className="lg:w-[295px] lg:h-[298px]"/>
          </div>
          <p className="mt-2.5 font-bold  lg:mt-4 lg:text-xl">Skinny Fit Jeans</p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              3.5/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$120</span>
            <span className="opacity-60 line-through font-bold lg:text-2xl">$260</span>
            <span className="py-1 px-3 bg-[#ff333310] text-[#FF3333] text-[10px] rounded-[50px] lg:text-xs">
              -20%
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img
              src={new3}
              alt="new1"
              className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Checkered Shirt
          </p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$180</span>
          </div>
        </div>

        <div>
          <div className="w-[192px] h-[200px] lg:w-[295px] lg:h-[298px]">
            <img src={new4} alt="new1" className="lg:w-[295px] lg:h-[298px]"/>
          </div>
          <p className="mt-2.5 font-bold  lg:mt-4 lg:text-xl">Sleeve Striped T-shirt</p>
          <div className="flex items-center gap-2.5 mb-1 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="opacity-60 text-xs lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl lg:text-2xl">$130</span>
            <span className="opacity-60 line-through font-bold lg:text-2xl">$160</span>
            <span className="py-1 px-3 bg-[#ff333310] text-[#FF3333] text-[10px] rounded-[50px] lg:text-xs">
              -20%
            </span>
          </div>
        </div>
      </div>
      <button className="w-[358px] h-[52px] mt-6 mb-4 px-[54px] rounded-[62px] border-2 border-black/10 lg:block lg:mx-auto">
        View All
      </button>
    </div>
  );
}

export default NewArrivals;
