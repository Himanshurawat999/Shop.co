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
    <div className="px-4 pt-[190px] bg-[#F0F0F0]">
      <div>
        <h1 className="font-integral font-bold text-3xl mb-3.5">SHOP.CO</h1>
        <p className="opacity-60">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="flex gap-2 mt-5 mb-6">
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
          <img src={social4} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 gap-y-6">
        <div className="col1">
          <h4 className="font-medium text-sm tracking-[3px] mb-4">COMPANY</h4>
          <div className="flex flex-col gap-3">
            <p className="opacity-60 text-sm ">About</p>
            <p className="opacity-60 text-sm">Features</p>
            <p className="opacity-60 text-sm">Works</p>
            <p className="opacity-60 text-sm">Career</p>
          </div>
        </div>

        <div className="col2">
          <h4 className="font-medium text-sm tracking-[3px] mb-4">HELP</h4>
          <div className="flex flex-col gap-3">
            <p className="opacity-60 text-sm ">Customer Support</p>
            <p className="opacity-60 text-sm">Delivery Details</p>
            <p className="opacity-60 text-sm">Terms & Conditions</p>
            <p className="opacity-60 text-sm">Privacy Policy</p>
          </div>
        </div>

        <div className="col3">
          <h4 className="font-medium text-sm tracking-[3px] mb-4">FAQ</h4>
          <div className="flex flex-col gap-3">
            <p className="opacity-60 text-sm ">Account</p>
            <p className="opacity-60 text-sm">Manage Deliveries</p>
            <p className="opacity-60 text-sm">Order</p>
            <p className="opacity-60 text-sm">Payment</p>
          </div>
        </div>

        <div className="col4">
          <h4 className="font-medium text-sm tracking-[3px] mb-4">RESOURCES</h4>
          <div className="flex flex-col gap-3">
            <p className="opacity-60 text-sm ">Free eBook</p>
            <p className="opacity-60 text-sm">Development Tutorial</p>
            <p className="opacity-60 text-sm">How to - Blog</p>
            <p className="opacity-60 text-sm">Youtube Playlist</p>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-5 opacity-10" />

      <div>
        <p className="opacity-60 text-sm text-center">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex justify-center mt-2">
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
