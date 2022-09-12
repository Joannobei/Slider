import React from "react";
import { Computer, Pos } from "../../assets";

const Section2 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1279px] w-[332px] m-auto mt-[89px] lg:mt-[176px]">
          <div className="w-[332px] lg:w-[519px]">
            <p className="text-[#6772E5] lg:text-[24px] text-[20px] font-bold ">
              Stay in control
            </p>
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
              Manage and control company expenses
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra vitae pulvinar dolor pellentesque habitant. Blandit vel in
              sed gravida risus elit. Id vel adipiscing orci, orci. Venenatis,
              in tellus fringilla dui viverra cursus. Tincidunt augue auctor
              felis vulputate pretium, lacus.
            </p>
          </div>
          <div className="lg:w-[677.85px] lg:h-[538px] w-[230px] h-[209.42px] mt-[24px] lg:mt-0">
            <img src={Computer} alt="computer" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

    
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto mt-[88px] lg:mt-[26px]">
          <div className="lg:w-[474.35px] lg:h-[555.93px] w-[188px] h-[220.33px] mt-[24px] lg:mt-0">
            <img src={Pos} alt="computer" />
          </div>

          <div className="w-[332px] lg:w-[519px]">
            <p className="text-[#6772E5]  font-bold lg:text-[24px] text-[20px] ">
            Make payment easily
            </p>
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Frictionless payment options
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

export default Section2;
