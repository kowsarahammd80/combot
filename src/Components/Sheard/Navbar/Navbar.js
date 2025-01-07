import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import { Link } from 'react-scroll'

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="fixed z-50 w-full shadow-sm bg-white text-black">
      <header className="mx-0 xl:mx-32 lg:mx-32">
        {/*nav logo */}
        <Link to="homeHero" className=" cursor-pointer font-semibold" smooth={true} offset={-120} duration={500}>
          <div className="navLogoDiv">
            <img
              className="navLog"
              src="https://i.ibb.co.com/hXXHbmq/watheta1.png"
              alt=""
            />
          </div>
        </Link>
        {/* nav link */}
        <nav
          ref={navRef}
          onClick={showNavbar}
          className="nav-link mt-0 lg:mt-2 xl:mt-2"
        >
          <Link className="navLink-hover" to="features" smooth={true} offset={-120} duration={500}>
            <i class="fa-solid fa-layer-group me-1 text-sm" ></i>
            Features
          </Link>
          <Link className="navLink-hover" to="pricing" smooth={true} offset={-120} duration={500}>
            <i class="fa-solid fa-wallet me-1 text-sm"></i>
            Pricing
          </Link>
          <Link className="navLink-hover" to="contact" smooth={true} offset={-120} duration={500}>
            <i class="fa-regular fa-comment me-1 text-sm"></i>
            Contact
          </Link>

          <button className="nav-btn nav-close-btn">
            <i class="fa-regular fa-circle-xmark mt-10"></i>
          </button>
        </nav>

        <div className="felx justify-end w-4/5 lg:w-1/5 xl:w-1/5 md:2/5 ms-10 lg:ms-2 xl:ms-2 md:ms-10">
          <button className="mt-1 px-2 lg:px-5 xl:px-5 py-0 lg:py-2 xl:py-2 rounded-lg getSatartBtn shadow-md">
            <i class="fa-solid fa-angle-right me-1 text-sm"></i> Get Start
          </button>
        </div>

        {/* togol button*/}
        <button className="nav-btn" onClick={showNavbar}>
          <i class="fa-solid fa-bars text-lg lg:text-lg xl:text-lg "></i>
        </button>
      </header>
    </div>
  );
};

export default NavBar;
