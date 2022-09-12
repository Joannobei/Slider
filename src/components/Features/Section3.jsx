import React from "react";
import { Phone, Nfc } from "../../assets";

const Section3 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1279px] w-[332px] m-auto mt-[89px] lg:mt-[176px]">
          <div className="w-[332px] lg:w-[519px]">
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
              Admin controls
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            With different access levels to your senior executive, finance team and various locations, you have the controls to to manage your spend by location, departments, subsidiaries and teams. 
            </p>
          </div>
          <div className="lg:w-[641.56px] lg:h-[689.57px] w-[221.59px] h-[238.17px] mt-[24px] lg:mt-0">
            <img src={Phone} alt="phone" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto mt-[88px] lg:mt-[26px]">
          <div className="lg:w-[693.02px] lg:h-[676.38px] w-[275.68px] h-[257.08px] mt-[24px] lg:mt-0">
            <img src={Nfc} alt="cards and phone" />
          </div>

          <div className="w-[332px] lg:w-[519px]">
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none ">
              Webhooks
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            Our webhooks enable real time notifications on every activity within your dashboard.
            </p>
          </div>
        </div>

        {/* SECTION THIRD LINE */}

        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto mt-[88px] lg:mt-[26px]">

          <div className="w-[332px] lg:w-[519px]">
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none ">
            Fraud prevention
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            Prevent employee spend fraud and all out of policy spend with out transparent system and fraud prevention engine.
            </p>
          </div>
          <div className="lg:w-[693.02px] lg:h-[676.38px] w-[275.68px] h-[257.08px] mt-[24px] lg:mt-0">
            <img src={Nfc} alt="cards and phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
