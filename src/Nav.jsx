import React from "react";
import hamburger from "./assets/hamburger.svg";
import search from "./assets/search.svg";
import cart from "./assets/cart.svg";
import frame from "./assets/Frame.svg";
import cross from "./assets/cross.svg";
import arrowDown from "./assets/arrow-down.png";

function Nav() {
  return (
    <div className="w-full">
      <div className="bg-black py-2.5 text-center text-xs text-white">
        Sign up and get 20% of to your first order.
        <span className="font-medium underline"> Sign Up Now</span>
        <img
          src={cross}
          alt="cross"
          className="hidden lg:float-right lg:block"
        />
      </div>
      <nav className="flex h-16 items-center p-4 lg:h-24">
        <img src={hamburger} alt="hamburger" className="lg:hidden" />
        <h4 className="font-integral mr-24 ml-4 text-2xl font-bold lg:mr-0 lg:text-3xl">
          SHOP.CO
        </h4>

        <ul className="hidden lg:mx-10 lg:flex lg:gap-6">
          <li className="flex items-center gap-1">
            <span>Shop</span>
            <img src={arrowDown} alt="arrowDown" />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <form className="hidden lg:relative lg:mr-10 lg:block">
          <img
            src={search}
            alt="search"
            className="absolute top-3 left-4 opacity-40"
          />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-[577px] rounded-[62px] bg-[#F0F0F0] p-3 pl-12 placeholder:opacity-40"
          />
        </form>

        <div className="flex gap-3">
          <img src={search} alt="search" className="lg:hidden" />
          <img src={cart} alt="cart" />
          <img src={frame} alt="frame" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
