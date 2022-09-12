import React from "react";
import { WebHook, Control, Prevention } from "../../assets";

const Section3 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1064px] w-[323px] m-auto mt-[88px] lg:mt-[170px]">
          <div className="w-[323px] lg:w-[519px]">
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
              Admin controls
            </h3>
            <p className=" lg:w-[519px] w-[323px] font-PublicSans lg:mt-[48px] mt-[24px]">
            With different access levels to your senior executive, finance team and various locations, you have the controls to to manage your spend by location, departments, subsidiaries and teams. 
            </p>
          </div>
          <div className="lg:w-[410px] lg:h-[300px] w-[246.31px] h-[180.23px] mt-[24px] lg:mt-0">
            <img src={Control} alt="phone" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1064px] w-[323px] m-auto mt-[88px] lg:mt-[170px]">
          <div className="lg:w-[410px] lg:h-[300px] w-[246.31px] h-[180.23px] mt-[24px] lg:mt-0">
            <img src={WebHook} alt="cards and phone" />
          </div>

          <div className="w-[323px] lg:w-[519px]">
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none ">
              Webhooks
            </h3>
            <p className=" lg:w-[519px] w-[323px] font-PublicSans lg:mt-[48px] mt-[24px]">
            Our webhooks enable real time notifications on every activity within your dashboard.
            </p>
          </div>
        </div>

        {/* SECTION THIRD LINE */}

        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1064px] w-[323px] m-auto mt-[88px] lg:mt-[170px] lg:mb-[170px] mb-[88px]">

          <div className="w-[323px] lg:w-[519px]">
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none ">
            Fraud prevention
            </h3>
            <p className=" lg:w-[519px] w-[323px] font-PublicSans lg:mt-[48px] mt-[24px]">
            Prevent employee spend fraud and all out of policy spend with out transparent system and fraud prevention engine.
            </p>
          </div>
          <div className="lg:w-[410px] lg:h-[300px] w-[246.31px] h-[180.23px] mt-[24px] lg:mt-0">
            <img src={Prevention} alt="cards and phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
