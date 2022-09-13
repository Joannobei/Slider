import React from "react";
import { Reporting, Visibility} from "../../assets";

const Section2 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1064px] w-[323px] m-auto mt-[88px] lg:mt-[170px]">
          <div className="w-[323px] lg:w-[519px]">
            
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Real-time visibility
            </h3>
            <p className=" lg:w-[519px] w-[322px] m-auto font-PublicSans mt-[48px] text-[14px] lg:text-[16px]">
            View what your business is spending on and how employees trusted with your businesses finances are managing it. No more stories on why a spend can’t be justified.
            </p>
          </div>
          <div className="lg:w-[410px] lg:h-[300px] w-[246.31px] h-[180.23px] mt-[24px] lg:mt-0">
            <img src={Visibility} alt="computer" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

    
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1064px] w-[323px] m-auto mt-[88px] lg:mt-[170px]">
          <div className="lg:w-[410px] lg:h-[300px] w-[246.31px] h-[180.23px] mt-[24px] lg:mt-0">
            <img src={Reporting} alt="computer" />
          </div>

          <div className="w-[323px] lg:w-[519px]">
           
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Advance reporting
            </h3>
            <p className=" lg:w-[519px] w-[322px] m-auto font-PublicSans mt-[48px] text-[14px] lg:text-[16px] ">
            All your spend reports from HR, Procurement and Accounting departments in one place. 
            </p>
          </div>
          
        </div>
        </div>

      
    </div>
  );
};

export default Section2;
