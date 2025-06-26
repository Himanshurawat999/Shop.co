import React from "react";
import hamburger from "./assets/hamburger.svg";
import search from "./assets/search.svg";
import cart from "./assets/cart.svg";
import frame from "./assets/Frame.svg";

function Nav() {
  return (
    <div className="w-full">
      <div className="py-2.5 px-10 text-xs bg-black text-white text-center">
        Sign up and get 20% of to your first order.
        <span className="font-medium underline"> Sign Up Now</span>
      </div>
      <nav className="h-16 p-4 flex items-center">
        <img src={hamburger} alt="hamburger" />
        <h4 className="font-integral font-bold text-2xl ml-4 mr-24">
          SHOP.CO
        </h4>
        <div className="flex gap-3">
          <img src={search} alt="search" />
          <img src={cart} alt="cart" />
          <img src={frame} alt="frame" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
