import React, { useState } from "react";
import usePackeg from "../../Hooks/usePackeg";
import "./Price.css";
// import { Form } from "react-router-dom";

const Price = () => {
  const [packegs] = usePackeg(); // Assuming this fetches the packages correctly
  const [selectedCurrency, setSelectedCurrency] = useState("BDT");
  const [isLoading, setIsLoading] = useState(false);

  const handleCurrencyChange = (currencyCode) => {
    setSelectedCurrency(currencyCode);
  };

  // const STATIC_AUTH_TOKEN = "f94737c6-7029-4dce-8aff-2d777424e1f2";

  // const authenticate = (req, res, next) => {
  //   const token = req.headers["authorization"];
  //   if (token === STATIC_AUTH_TOKEN) {
  //     next();
  //   } else {
  //     res.status(403).json({ message: "Forbidden" });
  //   }
  // };

  const handleGetPayment = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const businessName = form.businessName.value;
    const contactNumber = Number(form.contactNumber.value);
    const packegPrice = Number(form.dataset.price);
    const currencySymbol = form.dataset.currency;
    const planName = form.dataset.planname;

    const postData = {
      name: name,
      email: email,
      businessName: businessName,
      contactNumber: contactNumber,
      packegPrice: packegPrice,
      currencySymbol: currencySymbol,
      planName,
    };

    // console.log(postData);
    setIsLoading(true);
    fetch("https://combot-server-1.onrender.com/api/paymentInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          const paymentUrl = `https://unrivaled-bombolone-c1a555.netlify.app/?name=${name}&email=${email}&businessName=${businessName}&contactNumber=${contactNumber}&packageName=${planName}&amount=${packegPrice}&currency=${currencySymbol}`;
          window.location.href = paymentUrl;
          // setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        form.reset()
        setIsLoading(false);
      });
  };

  return (
    <div className="mx-5 lg:mx-36 xl:mx-36 mt-5 mb-5" id="pricing">
      {/* Headline */}
      <div className="text-center">
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
                className={`priceCard w-full shadow hover:shadow-2xl cursor-pointer rounded-xl ${
                  packeg.planName === "Platinum"
                    ? "border-2 border-yellow-500"
                    : ""
                }`}
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
                        <p className="my-2 lg:my-4 xl:my-4 md:my-3">
                          {" "}
                          <span className="me-1 lg:me-2 xl:me-2 text-lg">
                            <i class="fa-solid fa-check"></i>
                          </span>{" "}
                          {featur}
                        </p>
                      </ul>
                    ))}
                  </div>
                  {/* <div>
                    {
                      isLoading ? (<p className="text-red-500">Loading...</p>) : ""
                    }
                  </div> */}
                  {/* {isLoading && (
                    <p className="text-red-500 font-semibold text-center">
                      <span className="loading loading-infinity loading-lg"></span>
                    </p>
                  )} */}
                  <div className="card-actions justify-center mt-4">
                    {packeg.planName === "Free" ? (
                      <button
                        onClick={() =>
                          document.getElementById(`${packeg.id}`).showModal()
                        }
                        className="w-full bg-gray-600 rounded-xl py-2 text-white shadow hover:shadow-2xl"
                      >
                        Get Start
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          document.getElementById(`${packeg.id}`).showModal()
                        }
                        className="w-full bg-rose-500 rounded-xl py-2 shadow hover:shadow-2xl text-white"
                      > 
                        Subscribe Now
                      </button>
                    )}
                  </div>
                </div>
                {/* modal */}
                <dialog id={packeg.id} className="modal">
                  <div
                    className="modal-box"
                    style={{ backgroundColor: packeg.bgColor }}
                  >
                    <div className="text-center border-b-2">
                      <h3 className="font-bold text-lg">
                        You Getting Packeg : <span>{packeg.planName}</span>{" "}
                      </h3>
                      <p className="mb-2">
                        Price:{" "}
                        <span className="ms-1 font-semibold">
                          {price.amount}
                        </span>{" "}
                        <span>{price.currencySymbol}</span>
                      </p>
                    </div>
                    {/* form div */}
                    <form
                      onSubmit={handleGetPayment}
                      className="pt-5 lg:pt-10 xl:pt-10 md:pt-6"
                      data-price={price.amount}
                      data-currency={price.currencySymbol}
                      data-planname={packeg.planName}
                    >
                      <p className="mb-2">Full Name</p>
                      <input
                        name="name"
                        required
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered w-full mb-3"
                      />
                      <p className="mb-2">Email</p>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="business@gmail.com"
                        className="input input-bordered w-full mb-3"
                      />
                      <p className="mb-2">Business Name</p>
                      <input
                        name="businessName"
                        required
                        type="text"
                        placeholder="business Name"
                        className="input input-bordered w-full mb-3"
                      />
                      <p className="mb-2">Business Contact Number</p>
                      <input
                        name="contactNumber"
                        required
                        type="number"
                        placeholder="Business Number"
                        className="input input-bordered w-full mb-3"
                      />
                      {isLoading && (
                          <p className="text-red-500 font-semibold text-center">
                            <span className="loading loading-infinity loading-lg"></span>
                          </p>
                        )}
                      {/* post button */}
                      <div className="flex justify-center items-center gap-5">
                        <div className="modal-action w-full">
                          {/* modal close button */}
                          <form method="dialog" className="w-full">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="py-2 px-4 bg-rose-500 w-full text-white rounded-xl">
                              Cancle
                            </button>
                          </form>
                        </div>
                        <div className="pt-5 w-full">
                          <button
                            type="submit"
                            className={`py-2 px-4 w-full rounded-xl shadow-xl ${
                              packeg.planName === "Platinum" ||
                              packeg.planName === "Free"
                                ? "text-white"
                                : ""
                            } `}
                            style={{ backgroundColor: packeg.iconColor }}
                          >
                            Go For Payment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </dialog>
                {/* modal end */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Price;
