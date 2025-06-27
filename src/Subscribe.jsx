import React from "react";
import mail from "./assets/mail.png";

function Subscribe() {
  return (
    <div className="mx-4 mb-[-40%] pt-8 pb-7 bg-black text-white rounded-2xl relative z-10">
      <div className="px-6">
        <h1 className="font-integral font-bold text-3xl mb-8">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <form className="relative">
          <img src={mail} alt="" className="absolute left-4 top-4" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="mb-3 py-3 px-4 pl-12 w-full rounded-[62px] bg-white placeholder:text-black/60"
          />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-white text-black font-medium text-sm rounded-[62px]"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
