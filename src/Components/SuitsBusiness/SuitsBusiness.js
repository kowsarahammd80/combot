import React from "react";
import useBusinessSuits from "../../Hooks/useBusinessSuits";

const SuitsBusiness = () => {
  const [businesss] = useBusinessSuits();
  console.log(businesss);
  return (
    <div className="mx-5 lg:mx-36 xl:mx-36 py-10" id="suits">
      {/* headline */}
      <div className="text-center">
        <h1 className="text-2xl lg:text-5xl font-semibold mb-1">
          Best suits for Business
        </h1>
        <p className="text-sm lg:text-xl text-center text-gray-500">
          Solutions that inspire success
        </p>
      </div>
      {/* card section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 md:grid-cols-2 py-10 gap-5">
          {/* card div */}
          {businesss.map((business, index) => (
            <div
              key={index}
              className="bg-purple-100 rounded shadow hover:shadow-xl"
              style={{ backgroundColor: business.cardBG }}
            >
              <div className="p-5">
                {/* icon div */}
                <div className="flex items-center justify-center">
                  <span
                    dangerouslySetInnerHTML={{ __html: business.icon }}
                    className="text-4xl"
                    style={{ color: business.iconColor }}
                  ></span>
                </div>
                {/* text div */}
                <div className="my-3">
                  <p className="text-xl font-semibold text-center">
                    {business.headline}
                  </p>
                </div>
                <div className="text-center text-sm text-white ">
                  {/* modal button */}
                  {/* <button
                    onClick={() =>
                      document.getElementById(`${business.id}`).showModal()
                    }
                    className="border px-2 py-1 shadow-lg rounded-lg"
                    style={{ backgroundColor: business.iconColor }}
                  >
                    See More
                  </button> */}
                </div>
                {/* model */}
                {/* <dialog
                  id={business.id}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div
                    className="modal-box"
                    style={{ backgroundColor: business.cardBG }}
                  >
                    <div className="flex items-center justify-center">
                      <span
                        dangerouslySetInnerHTML={{ __html: business.icon }}
                        className="mr-2 text-4xl"
                        style={{ color: business.iconColor }}
                      ></span>
                    </div>
                    <h3 className="font-bold text-lg">{business.headline}</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                       
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: business.iconColor }}
                        >
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog> */}
                {/* <dialog id={business.id} className="modal">
                  <div
                    className="modal-box"
                    style={{ backgroundColor: business.cardBG }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <span
                        dangerouslySetInnerHTML={{ __html: business.icon }}
                        className=" text-5xl"
                        style={{ color: business.iconColor }}
                      ></span>
                    </div>
                    <h3 className="font-bold text-xl">{business.headline}</h3>
                    <p className="py-2 lg:py-4 xl:py-4 md:py-4">
                      {business.description}
                    </p>
                    <div className="modal-action flex justify-center">
                      <form method="dialog" className="">
                        
                        <button
                          className="btn text-white"
                          style={{ background: business.iconColor }}
                        >
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuitsBusiness;
