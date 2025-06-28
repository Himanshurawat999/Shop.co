import React from "react";
import models from "./assets/models.jpg";
import star from "./assets/start.svg";

function Hero() {
  return (
    <div className="bg-[#F2F0F1] lg:flex lg:h-[662px]">
      <div className="left p-4 lg:w-[52%] lg:p-24 lg:pr-0">
        <h1 className="text-4xl font-integral font-bold tracking-tight lg:text-6xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="mt-5 mb-6 opacity-60 lg:my-8 ">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="w-[342px] h-[52px] mb-4 px-[54px] bg-black text-white rounded-[62px] lg:w-[210px] lg:h-[52px] lg:mb-12">
          Shop Now
        </button>
        <div className="flex justify-center flex-wrap gap-6 mb-2 lg:flex-nowrap">
          <div>
            <h4 className="font-bold text-2xl lg:text-[40px]">200+</h4>
            <p className="opacity-60 text-xs lg:text-sm">
              International Brands
            </p>
          </div>
          <div className="h-[52px] border-1 opacity-10 lg:h-[74px]"></div>
          <div>
            <h4 className="font-bold text-2xl lg:text-[40px]">2,000+</h4>
            <p className="opacity-60 text-xs lg:text-sm">
              High-Quality Products
            </p>
          </div>
          <div className="hidden lg:block lg:border-1 lg:opacity-10 lg:h-[74px]"></div>
          <div>
            <h4 className="font-bold text-2xl lg:text-[40px]">30,000+</h4>
            <p className="opacity-60 text-xs lg:text-sm">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="right relative overflow-hidden lg:w-[58%]">
        <div className="w-[390px] h-[448px] overflow-hidden lg:h-[662px] lg:w-[662px] lg:overflow-x-visible">
          <img className="scale-120 lg:scale-100 " src={models} alt="models" />
        </div>
        <img
          src={star}
          alt="startBig"
          className="absolute top-0 right-5 lg:w-[104px] lg:top-35 lg:right-25"
        />
        <img
          src={star}
          alt="startBig"
          className="h-11 absolute top-32 left-6 lg:w-14 lg:top-72 lg:left-10"
        />
      </div>
    </div>
  );
}

export default Hero;
