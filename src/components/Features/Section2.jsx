import React from "react";
import { Computer, Pos } from "../../assets";

const Section2 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1279px] w-[332px] m-auto mt-[89px] lg:mt-[176px]">
          <div className="w-[332px] lg:w-[519px]">
            
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Real-time visibility
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            View what your business is spending on and how employees trusted with your businesses finances are managing it. No more stories on why a spend can’t be justified.
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
           
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Advance reporting
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            All your spend reports from HR, Procurement and Accounting departments in one place. 
            </p>
          </div>
          
        </div>
        </div>

      
    </div>
  );
};

export default Section2;
