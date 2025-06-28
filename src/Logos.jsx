import React from "react";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import logo4 from "./assets/logo4.svg";
import logo5 from "./assets/logo5.svg";

function Logos() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8 bg-black py-10 lg:gap-[106px] lg:py-10">
      <img src={logo1} alt="logo1" className="lg:h-8" />
      <img src={logo2} alt="logo2" className="lg:h-8" />
      <img src={logo3} alt="logo3" className="lg:h-8" />
      <img src={logo4} alt="logo4" className="lg:h-8" />
      <img src={logo5} alt="logo5" className="lg:h-8" />
    </div>
  );
}

export default Logos;
