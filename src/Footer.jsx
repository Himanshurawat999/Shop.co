import React from "react";
import social1 from "./assets/social1.svg";
import social2 from "./assets/social2.svg";
import social3 from "./assets/social3.svg";
import social4 from "./assets/social4.svg";
import pay1 from "./assets/pay1.svg";
import pay2 from "./assets/pay2.svg";
import pay3 from "./assets/pay3.svg";
import pay4 from "./assets/pay4.svg";
import pay5 from "./assets/pay5.svg";

function Footer() {
  return (
    <div className="bg-[#F0F0F0] px-4 pt-[190px] pb-20 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-x-28 lg:gap-y-12 lg:px-24 lg:pt-[140px]">
      <div>
        <h1 className="font-integral mb-3.5 text-3xl font-bold lg:text-[34px]">
          SHOP.CO
        </h1>
        <p className="opacity-60 lg:text-sm">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="mt-5 mb-6 flex gap-2 lg:mt-9 lg:gap-3">
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
          <img src={social4} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 gap-y-6 lg:grid-cols-4 lg:gap-28">
        <div className="col1">
          <h4 className="mb-4 text-sm font-medium tracking-[3px] lg:mb-6 lg:text-base">
            COMPANY
          </h4>
          <div className="flex flex-col gap-3">
            <p className="text-sm opacity-60 lg:text-base">About</p>
            <p className="text-sm opacity-60 lg:text-base">Features</p>
            <p className="text-sm opacity-60 lg:text-base">Works</p>
            <p className="text-sm opacity-60 lg:text-base">Career</p>
          </div>
        </div>

        <div className="col2">
          <h4 className="mb-4 text-sm font-medium tracking-[3px] lg:mb-6 lg:text-base">
            HELP
          </h4>
          <div className="flex flex-col gap-3">
            <p className="text-sm opacity-60 lg:text-base">Customer Support</p>
            <p className="text-sm opacity-60 lg:text-base">Delivery Details</p>
            <p className="text-sm opacity-60 lg:text-base">
              Terms & Conditions
            </p>
            <p className="text-sm opacity-60 lg:text-base">Privacy Policy</p>
          </div>
        </div>

        <div className="col3">
          <h4 className="mb-4 text-sm font-medium tracking-[3px] lg:mb-6 lg:text-base">
            FAQ
          </h4>
          <div className="flex flex-col gap-3">
            <p className="text-sm opacity-60 lg:text-base">Account</p>
            <p className="text-sm opacity-60 lg:text-base">Manage Deliveries</p>
            <p className="text-sm opacity-60 lg:text-base">Order</p>
            <p className="text-sm opacity-60 lg:text-base">Payment</p>
          </div>
        </div>

        <div className="col4">
          <h4 className="mb-4 text-sm font-medium tracking-[3px] lg:mb-6 lg:text-base">
            RESOURCES
          </h4>
          <div className="flex flex-col gap-3">
            <p className="text-sm opacity-60 lg:text-base">Free eBook</p>
            <p className="text-sm opacity-60 lg:text-base">
              Development Tutorial
            </p>
            <p className="text-sm opacity-60 lg:text-base">How to - Blog</p>
            <p className="text-sm opacity-60 lg:text-base">Youtube Playlist</p>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-5 opacity-10 lg:col-span-full lg:my-0" />

      <div className="lg:col-span-full lg:mt-[-24px] lg:flex lg:items-center lg:justify-between">
        <p className="text-center text-sm opacity-60">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="mt-2 flex justify-center">
          <img src={pay1} alt="pay1" />
          <img src={pay2} alt="pay2" />
          <img src={pay3} alt="pay3" />
          <img src={pay4} alt="pay4" />
          <img src={pay5} alt="pay5" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
