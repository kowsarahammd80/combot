import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pt-20">
      <section className="fotterBg py-16 px-8 lg:px-20 border-t-2 bg-base-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 border-b">
          <div>
            {/* footer logo */}
            <div className="footerLogoDiv">
              <img
                className="footerLogo"
                src="https://i.ibb.co.com/hXXHbmq/watheta1.png"
                alt=""
              />
            </div>
            {/* peragraph */}
            <div className="font-light my-4">
              <p className="">
              Transform your customer feedback into growth. Our smart QR system helps you collect more positive reviews while managing feedback professionally.
              </p>
              <p className=" text-lg mt-2">Help Line: 0000000000</p>
            </div>
            <div className="">
                <span className="border p-1 m-1 shadow"><i class="fa-brands fa-facebook-f p-2 text-lg"></i></span>
                <span className="border p-1 m-1 shadow"><i class="fa-brands fa-instagram p-2 text-lg"></i></span>
                <span className="border p-1 m-1 shadow"><i class="fa-brands fa-twitter p-2 text-lg"></i></span>
                <span className="border p-1 m-1 shadow"><i class="fa-brands fa-linkedin p-2 text-lg"></i></span>
                
            </div>
          </div>
          {/* about */}
          <div>
            <div className="flex-none lg:flex md:flex-none justify-center">
              <div>
                <p className=" text-xl">About Us</p>
                <ul className=" my-4">
                  <Link href="" mb-2>
                    <li>Home</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Shope</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Best Sell</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/* Suport */}
          <div>
            <div className="flex-none lg:flex md:flex-none justify-center">
              <div>
                <p className=" text-xl">Support</p>
                <ul className=" my-4">
                  <Link href="" mb-2>
                    <li>Documention</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Contact</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Privacy</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Teams of Service</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        {/* reseved */}
        <div>
            <p className="text-center text-gray-400 text-sm mt-5">© 2025 Reviews QR. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
