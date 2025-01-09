import React, { useState } from "react";
import usePackeg from "../../Hooks/usePackeg";
import './Price.css'

const Price = () => {
  const [packegs] = usePackeg(); // Assuming this fetches the packages correctly
  const [selectedCurrency, setSelectedCurrency] = useState("BDT");

  const handleCurrencyChange = (currencyCode) => {
    setSelectedCurrency(currencyCode);
  };

  return (
    <div className="mx-5 lg:mx-36 xl:mx-36 mt-5 mb-5" id="pricing">
      {/* Headline */}
      <div className="text-center" >
        <h1 className="text-2xl lg:text-5xl font-semibold text-center mb-2">
          Select your strategy
        </h1>
        <p className="text-sm lg:text-xl text-center text-gray-500">
          As you expand, scale from a free start
        </p>
        {/* Button */}
        <div className="flex justify-center mt-5 mb-3">
          <div className="border rounded-lg">
          <button
              onClick={() => handleCurrencyChange("BDT")}
              className={`p-2 rounded-lg ${
                selectedCurrency === "BDT" ? "bg-red-500 text-white" : ""
              }`}
            >
              BDT
            </button>
            <button
              onClick={() => handleCurrencyChange("USD")}
              className={`p-2 rounded-lg ${
                selectedCurrency === "USD" ? "bg-red-500 text-white" : ""
              }`}
            >
              USD
            </button>
            
          </div>
        </div>
      </div>
      {/* Price Section */}
      <section className="py-10">
        {/* Price Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {packegs.map((packeg, index) => {
            const price = packeg.prices[selectedCurrency]; // Get price for selected currency
            return (
              <div
                key={index}
                className={`priceCard w-full shadow hover:shadow-2xl cursor-pointer rounded-xl ${packeg.planName === "Platinum" ? "border-2 border-yellow-500" : ""}`}
                style={{ backgroundColor: packeg.bgColor }} // Set background color dynamically
              >
                {packeg.planName === "Platinum" && (
                  <div className="popular-badge">Popular</div> // Use the external CSS class
                )}
                <div className="card-body">
                  <div className="flex items-center">
                    <span
                      dangerouslySetInnerHTML={{ __html: packeg.icon }}
                      className="mr-2 text-2xl"
                      style={{ color: packeg.iconColor }} // Set icon color dynamically
                    ></span>
                    <h2 className="text-xl font-semibold">{packeg.planName}</h2>
                  </div>
                  <p className="text-sm">{packeg.business}</p>
                  <div>
                    <p className="text-2xl font-bold mt-4">
                      <span className="me-1">{price.currencySymbol}</span>
                      {price.amount}
                      <span className="text-sm"> /{price.billingPeriod}</span>
                    </p>
                  </div>
                  <div>
                    {packeg.features.map((featur, index) => (
                      <ul key={index} className="list-disc list-inside">
                        {/* <li className="my-2 lg:my-4 xl:my-4 md:my-3">{featur}</li> */}
                        <p className="my-2 lg:my-4 xl:my-4 md:my-3"> <span className="me-1 lg:me-2 xl:me-2 text-lg"><i class="fa-solid fa-check"></i></span> {featur}</p>
                      </ul>
                    ))}
                  </div>
                  <div className="card-actions justify-center mt-4">
                    {packeg.planName === "Free" ? (
                      <button className="w-full bg-gray-600 rounded-xl py-2 text-white shadow hover:shadow-2xl">
                        Get Start
                      </button>
                    ) : (
                      <button className="w-full bg-rose-500 rounded-xl py-2 shadow hover:shadow-2xl text-white">
                        Subscribe Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* test */}
      <section>
         <div className="bg-base-100 p-5">
           <div>
              
           </div>
         </div>
      </section>
    </div>
  );
};
export default Price;
