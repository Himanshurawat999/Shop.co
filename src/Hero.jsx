import React from "react";
import models from "./assets/models.jpg";
import star from "./assets/start.svg";

function Hero() {
  return (
    <div className="bg-[#F2F0F1] lg:flex lg:h-[662px]">
      <div className="left p-4 lg:w-[52%] lg:p-24 lg:pr-0">
        <h1 className="font-integral text-4xl font-bold tracking-tight lg:text-6xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="mt-5 mb-6 opacity-60 lg:my-8">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="mb-4 h-[52px] w-[342px] rounded-[62px] bg-black px-[54px] text-white lg:mb-12 lg:h-[52px] lg:w-[210px]">
          Shop Now
        </button>
        <div className="mb-2 flex flex-wrap justify-center gap-6 lg:flex-nowrap">
          <div>
            <h4 className="text-2xl font-bold lg:text-[40px]">200+</h4>
            <p className="text-xs opacity-60 lg:text-sm">
              International Brands
            </p>
          </div>
          <div className="h-[52px] border-1 opacity-10 lg:h-[74px]"></div>
          <div>
            <h4 className="text-2xl font-bold lg:text-[40px]">2,000+</h4>
            <p className="text-xs opacity-60 lg:text-sm">
              High-Quality Products
            </p>
          </div>
          <div className="hidden lg:block lg:h-[74px] lg:border-1 lg:opacity-10"></div>
          <div>
            <h4 className="text-2xl font-bold lg:text-[40px]">30,000+</h4>
            <p className="text-xs opacity-60 lg:text-sm">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="right relative overflow-hidden lg:w-[58%]">
        <div className="h-[448px] w-[390px] overflow-hidden lg:h-[662px] lg:w-[662px] lg:overflow-x-visible">
          <img className="scale-120 lg:scale-100" src={models} alt="models" />
        </div>
        <img
          src={star}
          alt="startBig"
          className="absolute top-0 right-5 lg:top-35 lg:right-25 lg:w-[104px]"
        />
        <img
          src={star}
          alt="startBig"
          className="absolute top-32 left-6 h-11 lg:top-72 lg:left-10 lg:w-14"
        />
      </div>
    </div>
  );
}

export default Hero;
