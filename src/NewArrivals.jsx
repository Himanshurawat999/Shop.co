import React from "react";
import new1 from "./assets/new1.png";
import new2 from "./assets/new2.png";
import new3 from "./assets/new3.png";
import new4 from "./assets/new4.png";
import stars from "./assets/stars.png";

function NewArrivals() {
  return (
    <div className="">
      <h1 className="font-integral mb-8 text-center text-3xl font-bold lg:mb-13 lg:text-5xl">
        NEW ARRIVALS
      </h1>
      <div className="flex gap-4">
        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img
              src={new1}
              alt="new1"
              className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            T-shirt with Tape Details
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$120</span>
          </div>
        </div>

        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img src={new2} alt="new1" className="lg:h-[298px] lg:w-[295px]" />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Skinny Fit Jeans
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              3.5/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$120</span>
            <span className="font-bold line-through opacity-60 lg:text-2xl">
              $260
            </span>
            <span className="rounded-[50px] bg-[#ff333310] px-3 py-1 text-[10px] text-[#FF3333] lg:text-xs">
              -20%
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img
              src={new3}
              alt="new1"
              className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]"
            />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">Checkered Shirt</p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$180</span>
          </div>
        </div>

        <div>
          <div className="h-[200px] w-[192px] lg:h-[298px] lg:w-[295px]">
            <img src={new4} alt="new1" className="lg:h-[298px] lg:w-[295px]" />
          </div>
          <p className="mt-2.5 font-bold lg:mt-4 lg:text-xl">
            Sleeve Striped T-shirt
          </p>
          <div className="mb-1 flex items-center gap-2.5 lg:mb-2">
            <img src={stars} alt="stars" />
            <span className="lg:text-sm">
              4.5/<span className="text-xs opacity-60 lg:text-sm">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-bold lg:text-2xl">$130</span>
            <span className="font-bold line-through opacity-60 lg:text-2xl">
              $160
            </span>
            <span className="rounded-[50px] bg-[#ff333310] px-3 py-1 text-[10px] text-[#FF3333] lg:text-xs">
              -20%
            </span>
          </div>
        </div>
      </div>
      <button className="mt-6 mb-4 h-[52px] w-[358px] rounded-[62px] border-2 border-black/10 px-[54px] lg:mx-auto lg:block">
        View All
      </button>
    </div>
  );
}

export default NewArrivals;
