import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="bg-base-200 my-5 lg:my-10 xl:my-10">
      <div className="mx-5 lg:mx-36 xl:mx-36 py-10" id="features">
        {/* headline */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-5xl font-semibold">
            All the things you need to improve reviews
          </h1>
          <p className="text-sm lg:text-lg text-gray-500 mt-1">
            An all-inclusive system for gathering, organizing, and rewarding
            client reviews
          </p>
        </div>
        {/* service card */}
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 my-5 lg:my-10 xl:my-10 gap-5 lg:gap-8 xl:gap-8">
          {/* card main div */}
          <div className="bg-purple-100 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  <i class="fa-solid fa-qrcode text-blue-400 p-3"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Smart QR Codes
                </p>
                <p className="text-lg text-center text-gray-500">
                  Custom branded QR codes that seamlessly connect customers to
                  your review system.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-green-200 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  <i class="fa-regular fa-comment text-green-500"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  WhatsApp Integration
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automated chat bot that guides customers through the review
                  process naturally.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-blue-200 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  {/* <i class="fa-solid fa-gift "></i> */}
                  <i class="fa-solid fa-gifts text-blue-500"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Reward System
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automatically distribute discount codes to customers who leave
                  positive reviews.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-yellow-50 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  <i class="fa-regular fa-star text-amber-400"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Review Management
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automatically distribute discount codes to customers who leave
                  positive reviews.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-red-200 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  <i class="fa-solid text-red-500 fa-chart-simple"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Analytics Dashboard
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automatically distribute discount codes to customers who leave
                  positive reviews.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-yellow-100 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  <i class="fa-solid text-emerald-400 fa-gears"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Custom Workflows
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automatically distribute discount codes to customers who leave
                  positive reviews.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-green-200 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  <i class="fa-solid text-green-500 fa-shield-halved"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Feedback Protection
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automatically distribute discount codes to customers who leave
                  positive reviews.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
          {/* card main div */}
          <div className="bg-purple-200 rounded shadow hover:shadow-xl">
            <div className="p-5">
              {/* icon div */}
              <div className="flex justify-center items-center">
                <p className="text-4xl">
                  {/* <i class="fa-solid fa-mobile-screen-button "></i> */}
                  <i class="fa-solid fa-boxes-stacked text-purple-700"></i>
                </p>
              </div>
              {/* text div */}
              <div className="my-3">
                <p className="text-xl font-semibold text-center">
                  Multi-Platform
                </p>
                <p className="text-lg text-center text-gray-500">
                  Automatically distribute discount codes to customers who leave
                  positive reviews.
                </p>
              </div>
            </div>
          </div>
          {/* card main div end */}
        </div>
        <div className="flex justify-center ">
          <button className="px-16 py-2 rounded-xl text-lg font-semibold text-red-400 serviceGetReviewButton">
            Get Your Reviews Up
          </button>
        </div>
      </div>
      {/* button */}
    </div>
  );
};

export default Service;
