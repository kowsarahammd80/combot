import React from "react";
import "./HomeHero.css";

const HomeHero = () => {
  return (
    <div className="pt-14 lg:pt-24 mx-auto" id="homeHero">
      {/* head line */}
      <div className="pt-5">
        <h1 className="text-2xl lg:text-6xl xl:text-6xl md:text-3xl font-semibold text-center ">
          Increase Your
          <span className="headlineStarColor"> 5-Star Ratings </span>
          <br />
          With Insightful QR Codes
        </h1>
      </div>
      {/* paragraph */}
      <div className="flex justify-center items-center py-4">
        <p className="w-4/6 lg:w-1/3 xl:w-1/3 md:w-2/5 text-center text-gray-500 homeHeropera">
          Turn happy customers into glowing reviews. Our WhatsApp-powered QR
          system helps you collect more positive reviews while privately
          handling feedback for improvement.
        </p>
      </div>
      {/* button section */}
      <div className="flex justify-center gap-2 lg:gap-5 xl:gap-5 py-2 mx-10 lg:mx-24 xl:mx-24 md:mx-14">
        <button className="homeGetButton shadow-md hover:shadow-2xl">
          Get Your QR Code
        </button>
        <button className="homeSeeButton shadow-md hover:shadow-2xl">
          See How It Works
        </button>
      </div>
      {/* revier and icon section section */}
      <div className="mx-6">
        <div className="my-5 lg:my-10 xl:my-10 md:my-5 flex flex-wrap justify-center gap-3 lg:gap-8 xl:gap-8 md:gap-6">
          <div className="flex items-center">
            <p className="text-sm lg:text-lg xl:text-lg">
              <i class="fa-regular fa-star text-amber-400 me-1 lg:me-2 xl:me-2 md:me-2"></i>
              <span className="text-gray-500">Increase 4-5★ Reviews</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm lg:text-lg xl:text-lg">
              <i class="fa-regular fa-comment text-green-400 me-1 lg:me-2 xl:me-2 md:me-2"></i>
              <span className="text-gray-500">WhatsApp Integration</span>
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm lg:text-lg xl:text-lg">
              <i class="fa-solid fa-gift text-blue-500 me-1 lg:me-2 xl:me-2 md:me-2"></i>
              <span className="text-gray-500">Reward Happy Customers</span>
            </p>
          </div>
        </div>
      </div>
      {/* revier and icon section section end */}
    </div>
  );
};

export default HomeHero;
