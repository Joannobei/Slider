import React from "react";
import { Herocard } from "../assets";
import { NavLink } from "react-router-dom";
import { RiShareForwardLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="bg-[#FAFCFE]">
      <div className="pt-[184px] w-[1340px] m-auto pb-[87px] px-[60px]">
        <div className="flex  ">
          <div className="">
            <h1 className="text-[65px] text-[#212121] w-[774px] font-semibold">
              Modern <span className="text-[#002366]">Programmable Card</span>{" "}
              Issuing for Innovators
            </h1>
            <p className="text-[20px] w-[561px] text-[#515154]">
              eGator is an open API platform that lets you instantly create,
              control and distribute virtual or physical cards.
            </p>

            <div className="flex w-[354px] justify-between items-center mt-[50px]">
              <button
                type="button"
                className=" text-sm border-radius text-white bg-[#002366] w-[149px] h-[49px]"
              >
                <NavLink to="/sign_up">Get Started</NavLink>
              </button>
              <button
                type="button"
                className="text-sm text-[#002366] w-[157px] flex items-center justify-around"
              >
                <RiShareForwardLine />
                Request a Demo
              </button>
            </div>
          </div>

          <div>
            <img src={Herocard} alt="hero_card" className="w-[680px] h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
