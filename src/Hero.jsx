import React from "react";
import models from "./assets/models.jpg";
import star from "./assets/start.svg";

function Hero() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="p-4">
        <h1 className="text-4xl font-integral font-bold tracking-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="mt-5 mb-6 opacity-60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="w-[358px] h-[52px] mb-4 px-[54px] bg-black text-white rounded-[62px]">
          Shop Now
        </button>
        <div className="flex justify-center flex-wrap gap-6 mb-2">
          <div>
            <h4 className="font-bold text-2xl">200+</h4>
            <p className="opacity-60 text-xs">International Brands</p>
          </div>
          <div className="h-[52px] border-1 opacity-10"></div>
          <div>
            <h4 className="font-bold text-2xl">2,000+</h4>
            <p className="opacity-60 text-xs">High-Quality Products</p>
          </div>
          <div>
            <h4 className="font-bold text-2xl">30,000+</h4>
            <p className="opacity-60 text-xs">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="image relative">
        <div className="w-[390px] h-[448px] overflow-hidden">
          <img className="scale-120 " src={models} alt="models" />
        </div>
        <img src={star} alt="startBig" className="absolute top-0 right-5" />
        <img
          src={star}
          alt="startBig"
          className="h-11 absolute top-32 left-6"
        />
      </div>
    </div>
  );
}

export default Hero;
