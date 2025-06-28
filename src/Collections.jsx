import React from "react";
import style1 from "./assets/style1.1.png";
import style2 from "./assets/style2.1.png";
import style3 from "./assets/style3.1.png";
import style4 from "./assets/style4.1.png";
import style5 from "./assets/style1.png";
import style6 from "./assets/style2.png";
import style7 from "./assets/style3.png";
import style8 from "./assets/style4.png";

function Collections() {
  return (
    <div className="mb-12 px-4 py-12 lg:mb-20 lg:px-24">
      <div className="rounded-2xl bg-[#F0F0F0] px-6 pb-7 lg:rounded-4xl lg:px-16">
        <h1 className="font-integral mb-7 pt-10 text-center text-3xl font-bold lg:mb-16 lg:text-5xl">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 grid-rows-4 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <picture>
            <source media="(min-width: 1024px)" srcSet={style5} />
            <img
              src={style1}
              alt="style1"
              className="lg:h-[289px] lg:object-fill"
            />
          </picture>
          <picture className="lg:col-span-2">
            <source media="(min-width: 1024px)" srcSet={style6} />
            <img src={style2} alt="style2" />
          </picture>
          <picture className="lg:col-span-2">
            <source media="(min-width: 1024px)" srcSet={style7} />
            <img src={style3} alt="style3" />
          </picture>
          <picture>
            <source media="(min-width: 1024px)" srcSet={style8} />
            <img
              src={style4}
              alt="style4"
              className="lg:h-[289px] lg:object-fill"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Collections;
