import React from "react";
import "./BusinessQr.css";

const BusinessQr = () => {
  return (
    <div className="mx-5 lg:mx-0 xl:mx-0 md:mx-5 py-5 lg:py-10 xl:py-10">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-b  lg:bg-gradient-to-r from-red-100 to-transparent rounded gap-5 shadow">
          {/* qr icone */}
          <div className="p-4 rounded ">
            <p className="qrIcon bg-white px-0 lg:px-24 py-10 rounded flex justify-center items-center">
              <i class="fa-solid fa-qrcode"></i>
            </p>
          </div>
          {/* qr icone end */}
          {/* text and icon */}
          <div className="p-5 flex justify-center items-center">
            <div className="">
              <p className="text-sm lg:text-lg my-4">
                <span className="">
                  <i class="fa-regular fa-comment text-green-400 me-1 lg:me-2 xl:me-2 md:me-2"></i>
                </span>
                <span className="text-gray-500">
                  Customer scans & chats with our smart WhatsApp bot
                </span>
              </p>
              <p className="text-sm lg:text-lg my-4">
                <span className="">
                <i class="fa-regular fa-star text-amber-400 me-1 lg:me-2 xl:me-2 md:me-2"></i>
                </span>
                <span className="text-gray-500">
                  Happy customers are guided to leave Google reviews
                </span>
              </p>
              <p className="text-sm lg:text-lg my-4">
                <span className="">
                <i class="fa-solid fa-gift text-blue-500 me-1 lg:me-2 xl:me-2 md:me-2"></i>
                </span>
                <span className="text-gray-500">
                  Reward them with discounts for their positive feedback
                </span>
              </p>
            </div>
          </div>
          {/* text and icon end */}
        </div>
      </div>
    </div>
  );
};

export default BusinessQr;
