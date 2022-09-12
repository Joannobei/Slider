import React from "react";
import { Herocard } from "../assets";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[#F3F4F6] ">
      <div className="pt-[190px] lg:px-[60px] max-w-[1440px] lg:w-[1440px] md:w-[1300px] w-[375px] m-auto">
        <div className="flex lg:flex-row justify-between flex-col items-center">
          <div className="lg:w-[542px] lg:m-0 w-[331px] m-auto lg:text-left text-center">
            <h1 className="lg:text-[56px] text-[30px] text-[#000505] lg:w-[519px] w-[302px] font-bold lg:h-[128px] leading-none ">
              Control spending, save time & money
            </h1>
            <p className="lg:text-[20px] lg:w-[542px] text-[#000505] lg:my-[48px] my-[24px] ">
              eGator is an open API platform that lets you instantly create,
              control and distribute virtual or physical cards.
            </p>
            <button
              type="button"
              className="text-sm rounded-lg text-white bg-[#6772E5] lg:w-[149px] w-[169px] lg:h-[49px] h-[50px] lg:mb-0 mb-5"
            >
              <NavLink to="/ready">Get Started</NavLink>
            </button>
          </div>

          <div>
            <img
              src={Herocard}
              alt="hero_card"
              className="xl:w-[669.73px] md:w-[568px] w-[288.87px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
