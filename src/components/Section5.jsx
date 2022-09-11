import React from "react";
import {Datas} from "../assets";


const Section5 = () => {
  return (
    <div className="bg-[#6772E5] lg:h-[961px] h-[472px]">
      <div className=" lg:w-[1164px] w-[372px]  m-auto lg:pt-[150px] pt-[5px]">
        <div >
          <p className="lg:text-[40px] text-[24px] font-bold text-white m-auto mt-[94px] text-center">
            Why eGator?
          </p>
          <p className="text-white m-auto lg:mb-[82px] mb-[33.84px] text-[14px] lg:text-[16px] text-center">eGator has everything you need to traverse the financial world.</p>

          <div className='lg:w-[1164px] lg:h-[423px] w-[347.39px] h-[135.19px]'>
            <img src={Datas} alt="data" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
