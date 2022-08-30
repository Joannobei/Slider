import React from "react";
import { Pos } from "../assets";
import { NavLink } from "react-router-dom";

const Section3 = () => {
  return (
    <div>
      <div className="flex justify-end w-[1240px] max-w-[1440px] m-auto -z-10 relative mt-[60px]">
        <div className='mt-[63px] absolute left-0 '>
          <p className="text-[32px] font-[200] w-[635px] h-[279px]">
            A digital-first experience where you can instantly push cards to
            digital wallets for immediate access and enable contactless
            payments.
          </p>
          <button
            type="button"
            className=" text-sm border-radius text-white bg-[#002366] w-[149px] h-[49px]"
          >
            <NavLink to="/sign_up">Get Started</NavLink>
          </button>
        </div>

        <img src={Pos} alt="nfc" className="w-[1050px] h-[700px] " />
      </div>
    </div>
  );
};

export default Section3;
