import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[#F3F4F6] w-full">
      <div className="pt-[190px] lg:max-w-[1440px] max-w-375px] lg:w-[1440px] w-[375px] m-auto">
        <div className="flex lg:flex-row justify-between flex-col items-center lg:w-[1300px] w-[320px] m-auto ">
          <div className="lg:w-[519px] md:w-[419px] lg:m-0 w-[331px] m-auto lg:text-left text-center">
            <h1 className="lg:text-[56px] text-[30px] text-[#000505] lg:w-[519px] w-[302px] font-bold lg:h-[128px] leading-none ">
              Control spending, save time & money
            </h1>
            <p className="lg:text-[20px] text-[#000505] lg:my-[48px] my-[24px] ">
              eGator offers Spend Management and Payment Card solutions to
              businesses of all types and sizes.
            </p>
            <button
              type="button"
              className="text-sm rounded-md text-white bg-[#6772E5] lg:w-[149px] w-[169px] lg:h-[49px] h-[50px] lg:mb-0 mb-5"
            >
              <a href='https://form.jotform.com/222555797602564' >Get Started</a>
            </button>
          </div>

          <div className="lg:w-[617.77px] w-[288.87px] ">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060203/eGator%20Website%20Assets/herocard_opi5ms.png' alt="hero_card" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
