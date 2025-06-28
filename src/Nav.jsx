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
      <div className="py-2.5 text-xs bg-black text-white text-center">
        Sign up and get 20% of to your first order.
        <span className="font-medium underline"> Sign Up Now</span>
        <img
          src={cross}
          alt="cross"
          className="hidden lg:block lg:float-right"
        />
      </div>
      <nav className="h-16 p-4 flex items-center lg:h-24">
        <img src={hamburger} alt="hamburger" className="lg:hidden" />
        <h4 className="font-integral font-bold text-2xl ml-4 mr-24 lg:text-3xl lg:mr-0">
          SHOP.CO
        </h4>

        <ul className="hidden lg:flex lg:gap-6 lg:mx-10">
          <li className="flex items-center gap-1">
            <span>Shop</span>
            <img src={arrowDown} alt="arrowDown" />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <form className="hidden lg:block lg:relative lg:mr-10">
          <img src={search} alt="search" className="absolute left-4 top-3 opacity-40"/>
          <input type="text" placeholder="Search for products..." className="w-[577px] p-3 pl-12 rounded-[62px] bg-[#F0F0F0] placeholder:opacity-40"/>
        </form>

        <div className="flex gap-3">
          <img src={search} alt="search" className="lg:hidden"/>
          <img src={cart} alt="cart" />
          <img src={frame} alt="frame" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
