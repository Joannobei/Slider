import React from "react";
import { Datas, Datass, Card, Phone } from "../assets";

const Section1 = () => {
  return (
    <div className=" bg-[#FAFCFE] ">
      <div className=" pt-[92px] pb-[85px] max-w-[1440px] w-[1340px] m-auto">
        <div className="flex w-[1240px] m-auto justify-around items-center shadow-[0px_4px_6px_8px_#a2a2a2] rounded-lg mb-[43px]">
          <p className=" w-[420px] font-semibold text-[40px] text-[#002366]">
            Hassle-free solutions for businesses.
          </p>
          <img src={Datas} alt="graphy" className="w-[359.81px] h-[300px]" />
          <img src={Datass} alt="graphy" className="w-[300px] h-[300px]" />
        </div>

        <div className="flex justify-between w-[1240px] m-auto h-[700px]">
          <div className="w-[610px] rounded-lg shadow-[0px_4px_6px_8px_#a2a2a2] ">
            <p className=" w-[552px] m-auto font-semibold text-[34px] text-[#002366] mt-[40px] mb-[28px]">
              eGator’s <span className="font-extrabold text-[36px]">Card Issuing</span> allows you manage and control every aspect of your program.
            </p>
            <img src={Card} alt="card" className='w-[500px] h-[500px] m-auto ' />
          </div>
          <div className="w-[610px] rounded-lg shadow-[0px_4px_6px_8px_#a2a2a2]">
            <p className="w-[571px] m-auto font-semibold text-[34px] text-[#002366] mt-[40px] mb-[35px]">
              Streamline your business expenses with our comprehensive <span className="font-extrabold text-[36px]">Spend Management
              </span> software.
            </p>
            <img src={Phone} alt="phone" className='  ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
