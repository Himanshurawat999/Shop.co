import React from 'react'
import top1 from "./assets/top1.png";
import top2 from "./assets/top2.png";
import top3 from "./assets/top3.png";
import top4 from "./assets/top4.png";
import stars from "./assets/stars.png";

function TopSelling() {
  return (
    <div>
        <h1 className="font-integral font-bold text-3xl mb-8 text-center">
        TOP SELLING
      </h1>
      <div className="flex gap-4">
        <div>
          <div className="w-[192px] h-[200px]">
            <img src={top1} alt="new1" className="w-[192px] h-[200px]" />
          </div>
          <p className="mt-2.5 font-bold">Vertical Striped Shirt</p>
          <div className="flex items-center gap-2.5 mb-1">
            <img src={stars} alt="stars" />
            <span>
              5.0/<span className="opacity-60 text-xs">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl">$212</span>
            <span className="opacity-60 line-through font-bold">$235</span>
            <span className="py-1 px-3 bg-[#ff333310] text-[#FF3333] text-[10px] rounded-[50px]">
              -20%
            </span>
          </div>
        </div>

        <div>
          <div className="w-[192px] h-[200px]">
            <img src={top2} alt="new1" />
          </div>
          <p className="mt-2.5 font-bold">Courage Graphic T-shirt</p>
          <div className="flex items-center gap-2.5 mb-1">
            <img src={stars} alt="stars" />
            <span>
              4.0/<span className="opacity-60 text-xs">5</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-xl">$145</span>
          </div>
        </div>
      </div>
      <button className="w-[358px] h-[52px] mt-6 mb-4 px-[54px] rounded-[62px] border-2 border-black/10">
        View All
      </button>
    </div>
  )
}

export default TopSelling