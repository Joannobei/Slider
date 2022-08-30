import React from "react";
import { Global, Speed, Cloud, Leader, Data, Market } from "../assets";

const Section2 = () => {
  return (
    <div className=" max-w-[1440px] w-[1340px] m-auto">
      <div className="w-[525px] m-auto">
        <p className="w-[451px] m-auto font-semibold text-[40px] text-[#002366] mt-[64px]">
          We’ve got you covered
        </p>
        <p className="w-[525px] m-auto font-light text-[18px] text-[#002366]">
          eGator has everything you need to traverse the financial world.
        </p>
      </div>
      <div className="w-[1234px] flex justify-between m-auto mt-[80px] ">
        <div className="w-[398px] h-[281px] bg-[#ECF0F8] shadow-[2px_2px_2px_2px_#a2a2a2] rounded-lg pt-[26px] pl-[19px] pr-[51px] pb-[46px]">
          <img src={Global} alt="" />
          <p className="text-[20px] font-bold text-[#343434] mt-[15px]">Truly Global</p>
          <p className="w-[328px] mt-[30px]">
            We have on-the-ground regional teams in Europe, Middle East and
            Africa across different time zones.
          </p>
        </div>
        <div className="w-[398px] h-[281px] bg-[#ECF0F8] shadow-[2px_2px_2px_2px_#a2a2a2] rounded-lg pt-[26px] pl-[19px] pr-[51px] pb-[46px]">
          <img src={Cloud} alt="" />
          <p className="text-[20px] font-bold text-[#343434] mt-[15px]"> Cloud-Native</p>
          <p className="w-[328px] mt-[30px]">
            Superior capability across the different cloud platforms, shared or
            dedicated, with unmatched APIs and flexibly.
          </p>
        </div>
        <div className="w-[398px] h-[281px] bg-[#ECF0F8] shadow-[2px_2px_2px_2px_#a2a2a2] rounded-lg pt-[26px] pl-[19px] pr-[51px] pb-[46px]">
          <img src={Speed} alt="" />
          <p className="text-[20px] font-bold text-[#343434] mt-[15px]"> Scalable at Speed</p>
          <p className="w-[328px] mt-[30px]">
            With higher processing capacity, greater speed, and richer data,
            we’re able to exponentially scale your program without disruption in
            service.
          </p>
        </div>
      </div>
      <div className="w-[1234px] flex justify-between m-auto mt-[20px] ">
        <div className="w-[398px] h-[281px] bg-[#ECF0F8] shadow-[2px_2px_2px_2px_#a2a2a2] rounded-lg pt-[26px] pl-[19px] pr-[51px] pb-[46px]">
          <img src={ Data } alt="" />
          <p className="text-[20px] font-bold text-[#343434] mt-[15px]">Real-time Data</p>
          <p className="w-[328px] mt-[30px]">
          Easily innovate, deploy and customize products to more insightfully connect with customers, while reducing operational costs.
          </p>
        </div>
        <div className="w-[398px] h-[281px] bg-[#ECF0F8] shadow-[2px_2px_2px_2px_#a2a2a2] rounded-lg pt-[26px] pl-[19px] pr-[51px] pb-[46px]">
          <img src={Market} alt="" />
          <p className="text-[20px] font-bold text-[#343434] mt-[15px]"> Speed to Market</p>
          <p className="w-[328px] mt-[30px]">
          Unbeatable time-to-market, from first handshake to first transaction through unmatched APIs and regional experience.
          </p>
        </div>
        <div className="w-[398px] h-[281px] bg-[#ECF0F8] shadow-[2px_2px_2px_2px_#a2a2a2] rounded-lg pt-[26px] pl-[19px] pr-[51px] pb-[46px]">
          <img src={Leader} alt="" />
          <p className="text-[20px] font-bold text-[#343434] mt-[15px]"> Trusted by Leaders</p>
          <p className="w-[328px] mt-[30px]">
          We are trusted by leaders, including leading banks, digital banks and fintechs, giving world class support to ensure you have a smooth journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
