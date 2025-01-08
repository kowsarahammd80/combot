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
                    className="mr-2 text-4xl"
                    style={{ color: business.iconColor }} // Set icon color dynamically
                  ></span>
                </div>
                {/* text div */}
                <div className="my-3">
                  <p className="text-xl font-semibold text-center">
                    {business.headline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuitsBusiness;
