import React from "react";
import style1 from "./assets/style1.1.png";
import style2 from "./assets/style2.1.png";
import style3 from "./assets/style3.1.png";
import style4 from "./assets/style4.1.png";

function Collections() {
  return (
    <div className="px-4 py-12 mb-12">
      <div className="bg-[#F0F0F0] px-6 pb-7 rounded-2xl">
        <h1 className="font-integral font-bold text-3xl mb-7 pt-10 text-center">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 grid-rows-4 gap-y-4">
          <img src={style1} alt="style1" />
          <img src={style2} alt="style2" />
          <img src={style3} alt="style3" />
          <img src={style4} alt="style4" />
        </div>
      </div>
    </div>
  );
}

export default Collections;
