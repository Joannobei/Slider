import React from "react";
import { Phone, Nfc } from "../assets";


const Section3 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1279px] w-[332px] m-auto mt-[89px] lg:mt-[176px]">
          <div className="w-[332px] lg:w-[519px]">
            <p className="text-[#6772E5] lg:text-[24px] text-[20px] font-bold ">
            Goodbye to time wasting
            </p>
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Spend less hours reconciling receipts
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra vitae pulvinar dolor pellentesque habitant. Blandit vel in
              sed gravida risus elit. Id vel adipiscing orci, orci. Venenatis,
              in tellus fringilla dui viverra cursus. Tincidunt augue auctor
              felis vulputate pretium, lacus.
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
            <p className="text-[#6772E5] lg:text-[24px] text-[20px] font-bold ">
            Unlimited cards issuing
            </p>
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none ">
            Physical and Virtual cards issuing
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra vitae pulvinar dolor pellentesque habitant. Blandit vel in
              sed gravida risus elit. Id vel adipiscing orci, orci. Venenatis,
              in tellus fringilla dui viverra cursus. Tincidunt augue auctor
              felis vulputate pretium, lacus.
            </p>
          </div>
          
        </div>
        </div>

      
    </div>
  );
};

export default Section3;
