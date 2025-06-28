import React from "react";
import mail from "./assets/mail.png";

function Subscribe() {
  return (
    <div className="relative z-10 mx-4 mb-[-40%] rounded-2xl bg-black pt-8 pb-7 text-white lg:mx-24 lg:mb-[-7%] lg:rounded-3xl lg:px-16 lg:py-11">
      <div className="px-6 lg:flex lg:justify-between lg:px-0">
        <h1 className="font-integral mb-8 text-3xl font-bold lg:mb-0 lg:text-[40px]">
          STAY UPTO DATE ABOUT
          <br className="hidden lg:block" /> OUR LATEST OFFERS
        </h1>
        <form className="relative lg:w-[349px]">
          <img src={mail} alt="" className="absolute top-4 left-4" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="mb-3 w-full rounded-[62px] bg-white px-4 py-3 pl-12 placeholder:text-black/60"
          />
          <button
            type="submit"
            className="w-full rounded-[62px] bg-white px-4 py-3 text-sm font-medium text-black lg:text-base"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
