import React, { useEffect } from "react";
import { LogoFooter } from "../../assets";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {

  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className=" text-white bg-[#6772E5]">
      <div className=" pt-[2rem]  lg:w-[1126px] w-[350px] m-auto text-white ">
        <div className="lg:flex lg:justify-between pt-[1.5rem]">
          <div className=" w-[248px]">
            <NavLink to="/" >
              <img src={LogoFooter} alt="logo_white" />
            </NavLink>
            <p className="text-[16px] mt-[24px] mb-[24px] ">
              Join us to build the future of Finance.
            </p>
            <button
              type="button"
              className=" text-[14px] font-bold rounded-md text-[#6772E5] bg-white w-[169px] h-[50px]"
            >
              <a href='https://form.jotform.com/222555797602564' >Get Started</a>
            </button>
            <div className='flex w-[187px] justify-between mt-5'>
              <a href='https://www.facebook.com/egatorfinance' target="_blank" rel="noreferrer" className="bg-white w-[33px] h-[33px] text-[#6772E5] flex justify-center items-center rounded-md " ><FaFacebookF /></a>
              <a href='https://www.instagram.com/egatorfinance' target="_blank" rel="noreferrer" className="bg-white w-[33px] h-[33px] text-[#6772E5] flex justify-center items-center rounded-md " > <FaInstagram /></a>
              <a href='https://www.twitter.com/eGatorFinance' target="_blank" rel="noreferrer" className="bg-white w-[33px] h-[33px] text-[#6772E5] flex justify-center items-center rounded-md "><FaTwitter /></a>
              <a href='https://www.linkedin.com/company/egatorfinance/' target="_blank" rel="noreferrer" className="bg-white w-[33px] h-[33px] text-[#6772E5] flex justify-center items-center rounded-md "><FaLinkedinIn /></a>
            </div>
          </div>

          <div className=" mb-10 lg:mt-0 mt-10 ">
            <p
              className="pb-3 text-white font-bold"
            >
              Products
            </p>
            <div
              className="pb-3 text-white"
            >
             <a href='https://biopay.egator.co/' > For Merchants </a> 
              
            </div>

            <div
              className="pb-3 text-white"
            >
             <a href='https://expense.egator.co/' > For Corporates</a> 
             
            </div>

            <div
              className="pb-3 text-white"
            >
             <a href='https://biopay.egator.co/' >For Developers</a> 
            </div>
          </div>

          <div className="mb-10">
            <p className="pb-3 text-white font-bold">
              Support
            </p>
            <div
              className="pb-3 text-white"
            >
              <NavLink to="/blog">Blog</NavLink>
            </div>
            <div
              className="pb-3 text-white"
            >
              Community
            </div>
            <div
              className="pb-3 text-white"
            >
              <NavLink to="/support">Contact</NavLink>
            </div>

          </div>

          <div className="mb-10">
            <p className="pb-3 text-white font-bold">
             Company
            </p>

            <div
              className="pb-3 text-white"
            >
              <NavLink to="/">Career</NavLink>
            </div>
            <div
              className="pb-3 text-white"
            >
              <a href="https://www.linkedin.com/company/egatorfinance/">About us</a>
            </div>
          </div>

          <div className="mb-10">
            <p className="pb-3 text-white font-bold">
             Developers
            </p>
            <div
              className="pb-3 text-white"
            >
              <NavLink to="/">API Reference</NavLink>
            </div>
            <div
              className="pb-3 text-white"
            >
              <NavLink to="/">API Documentation</NavLink>
            </div>
            <div
              className="pb-3 text-white"
            >
              <NavLink to="/">Sitemap</NavLink>
            </div>
            <div
              className="pb-3 text-white"
            >
              <NavLink to="/">SDKs</NavLink>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t-[1px] lg:mt-[105px] border-[#E5E7EB] lg:mb-[24px] w-full"></div>

      <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-evenly lg:w-[1107px] w-[355px] lg:h-[100px] h-[200px] m-auto">
        <div>2022 All Rights Reserved eGator Finance LTD.</div>

        <div className="flex lg:justify-between justify-around w-[186px] ">
          <p>
            <NavLink to="/terms">Terms</NavLink>
          </p>
          <p>|</p>
          <p>
            <NavLink to="/privacy">Privacy</NavLink>
          </p>

          <p>|</p>
          
          <p>
            <NavLink to="/cookie">Cookies</NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
