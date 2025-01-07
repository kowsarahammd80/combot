import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="mx-5 lg:mx-36 xl:mx-36 mb-10">
        <div className="" id="contact">
          <div>
            <div>
              {/* headline */}
              <div>
                <h1 className="text-2xl lg:text-5xl font-semibold text-center mb-2">
                  Let's Get Started
                </h1>
                <p className="text-sm lg:text-xl text-center text-gray-500">
                  Ready to boost your reviews? We're here to help!
                </p>
              </div>
              {/* contact main div */}
              <div className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-row w-full my-5 lg:my-10 gap-10">
                {/* form div */}
                <div className="bg-base-200 w-full shadow-xl p-5 rounded">
                  <form action="" className="w-full">
                    <p className="">Full Name</p>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered w-full mb-4"
                    />
                    <p className="">Email Address</p>
                    <input
                      required
                      type="text"
                      placeholder="example@gmail.com"
                      className="input input-bordered w-full mb-4"
                    />
                    <p className="">Business Name</p>
                    <input
                      required
                      type="text"
                      placeholder="Your Business Name"
                      className="input input-bordered w-full mb-4"
                    />
                    <p className="">Massage</p>
                    <textarea
                      className="textarea textarea-bordered w-full mb-4"
                      placeholder="Tell us bout your business and requirement..."
                    ></textarea>

                    <div className="flex justify-center">
                      <button className="px-2 py-2 lg:px-5 xl:px-5 bg-red-400 text-white w-full shadow-xl rounded bg-gradient-to-l from-red-200 to-transparent">
                        <i class="fa-regular fa-paper-plane"></i> Send Message
                      </button>
                    </div>
                  </form>
                </div>
                {/* text contact div */}
                <div className="flex justify-center items-center w-full">
                  {/* text contact div */}
                  <div className="w-full mx-2 lg:mx-10 ">
                    {/* NUMBER */}
                    <div className="shadow-lg bg-red-200 w-full rounded px-4 lg:px-4 xl:px-4 md:px-3 py-3 lg:py-3 xl:py-3 md:py-2 flex items-center my-2 lg:my-5 xl:my-5">
                      <div className="">
                        <p>
                          <i class="fa-solid fa-phone text-3xl lg:text-3xl xl:text-3xl md:text-3xl me-4"></i>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-lg lg:text-xl xl:text-xl md:text-xl mb-2 lg:mb-3 xl:mb-3 md:mb-3">
                          Phone
                        </p>
                        <p>+1 (555) 123-4567</p>
                        <p>Mon-Fri from 9am to 6pm</p>
                      </div>
                    </div>
                    {/* EMAIL */}
                    <div className="shadow-lg bg-red-200 w-full rounded px-4 py-3 flex items-center my-2 lg:my-5 xl:my-5">
                      <div className="">
                        <p>
                          <i class="fa-regular fa-envelope text-3xl me-4"></i>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-xl mb-3">Email</p>
                        <p className="">support@reviewsqr.com</p>
                        <p>We'll respond within 24 hours</p>
                      </div>
                    </div>
                    {/* CHAT */}
                    <div className="shadow-lg bg-red-200 w-full rounded px-4 py-3 flex items-center my-2 lg:my-5 xl:my-5">
                      <div className="">
                        <p>
                          <i class="fa-regular fa-envelope text-3xl me-4"></i>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-xl mb-3">Live Chat</p>
                        <p className="">Available 24/7</p>
                        <p>Instant support via WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
