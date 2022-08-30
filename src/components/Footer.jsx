import React from "react";
import { LogoFooter } from "../assets";
import { NavLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white bg-[#002366]">
      <div className=" pt-[2rem]  max-w-[1440px] w-[1340px] m-auto text-white divide-y divide-opacity-10  divide-gray-300">
        <div className="lg:flex lg:justify-between pt-[1.5rem]">
          <div className=" ">
            <div className="lg:flex lg:items-center mb-[2rem] w-[320px] justify-between">
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={LogoFooter} alt="logo_white" />
              </NavLink>
              <div className="mt-10 lg:mt-0  w-[232px]">
                <p className="text-[26px] font-extralight text-2xl">
                  Begin Your Journey With Us Now
                </p>
                <button
                  type="button"
                  className="  rounded-md text-sm border-radius text-[#002366] bg-white w-[149px] h-[49px]"
                >
                  <NavLink to="/register" onClick={() => window.scrollTo(0, 0)}>
                    Get Started
                  </NavLink>
                </button>
              </div>
            </div>
            <p className="mt-[54px]">Follow Us</p>
            <div className="flex pt-5">
              <span className="">
                <a href="https://www.linkedin.com/company/egatorfinance/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span className="pl-4">
                <a href="https://www.facebook.com/eGatorFinance">
                  <FaFacebookF />
                </a>
              </span>
              <span className="pl-4">
                <a href="https://www.instagram.com/egatorfinance ">
                  <FaInstagram />
                </a>
              </span>
              <span className="pl-4">
                <a href="https://twitter.com/eGatorFinance">
                  <FaTwitter />
                </a>
              </span>
            </div>
          </div>

          <div className=" mb-10 ">
            <p className="pb-3 text-[#2B66FF]">
              <NavLink to="/about">Products</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Payment Link</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/terms">Dashboard</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/privacy">Card Manager</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/privacy">Invoicing</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/privacy">Wallet</NavLink>
            </p>
          </div>

          <div className="mb-10">
            <p className="pb-3 text-[#2B66FF] ">
              <NavLink to="/">Resources</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Developers</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Documentation</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">API Reference</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">SDKs</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Sitemap</NavLink>
            </p>
          </div>

          <div className="mb-10">
            <p className="pb-3 text-[#2B66FF] ">
              <NavLink to="/">Company</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">About us</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Blog</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Contact</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/">Terms Of Services</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/contact">Privacy Policy</NavLink>
            </p>
            <p
              className="pb-3 text-[#C4C4C4]"
              onClick={() => window.scrollTo(0, 0)}
            >
              <NavLink to="/contact">Cookie Policy</NavLink>
            </p>
          </div>
        </div>
        <p className="text-[#C4C4C4] w-[958px] m-auto font-light pb-[160px]">
          eGator is a financial technology product of eGator Finance, offering
          card issuing services in partnership with licensed banks and card
          issuers in their respective locations. All trademarks, logos and brand
          names are the property of their respective owners. All companies,
          product and service names used on this website are for identification
          purposes only. Use of these names, trademarks and brands does not mean
          endorsement of any kind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
