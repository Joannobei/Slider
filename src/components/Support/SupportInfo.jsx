import React from "react";
import { NavLink } from "react-router-dom";

function SupportInfo() {
  return (
    <div className="">
      <div className="lg:h-[811px] bg-white  ">
        <div className="lg:w-[85%] m-auto lg:py-[170px] py-[88px] lg:space-y-0 space-y-[44px] lg:flex justify-between items-center ">
          <img
            className="lg:w-[48.4%] object-contain m-auto w-[325px] h-[227px] lg:h-[459px] "
            src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663073921/eGator%20Website%20Assets/support2_gzaapk.png"
            alt="support"
          />

          <div className=" lg:w-[45%] space-y-[24px] w-[324px] m-auto lg:h-[356px]">
            <p className="font-bold lg:text-[38px] text-[24px] ">
              Need a quick answer?
            </p>
            <p className="lg:text-[24px]  lg:my-[48px] text-[20px] font-medium">
              The eGator customer support centre has{" "}
            </p>
            <div className="lg:w-[93%] w-[88%] m-auto">
              <ul className="list-disc space-y-[24px] lg:space-y-[48px] font-bold">
                <li> Detailed guides and instructions </li>
                <li> How-to videos </li>
                <li>Answers to the most common questions </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F3F4F6] ">
        <div className=" lg:w-[838px] w-[325px] m-auto lg:text-center lg:py-[176px] py-[88px]  lg:h-[592px] ">
          <p className="font-bold text-[24px] lg:text-[46px]">
            Need more information?
          </p>
          <p className="lg:pt-[32px] py-[24px] lg:py-0 lg:pb-[48px] text-[14px] lg:text-[20px] ">
            Our team is always available to present the eGator solution tailored
            to your company's needs.
          </p>
          <button className="bg-[#6772E5] rounded-md text-white w-[169px] h-[50px] ">
            {" "}
            <NavLink to="/ready" onClick={() => window.scrollTo(0, 0)}>
              Get Started
            </NavLink>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupportInfo;
