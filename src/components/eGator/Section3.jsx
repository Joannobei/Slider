import React from "react";


const Section3 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1279px] w-[332px] m-auto mt-[89px] lg:mt-[106px]">
          <div className="w-[332px] lg:w-[526px]">
            
          <h3 className="font-bold lg:text-[38px] w-[305px] lg:w-full text-[24px] leading-[32px] lg:leading-none">

            Digital and branchless banking
            </h3>
            <p className=" lg:w-[526px] lg:text-[20px] text-[14px] text-justify lg:text-start mt-[24px] lg:mt-[32px] w-[332px] font-PublicSans">
            Our system is built with core infrastructure that underpins unique identification, thereby enabling unlimited possibilities in digital and branchless banking.
            </p>
          </div>
          <div className="lg:w-[594.84px] lg:h-[433.01px] w-[334px] h-[242.97px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663775469/eGator%20Website%20Assets/banking_b0jupt.png' alt="phone" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

    
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto my-[88px] lg:mt-[58px] lg:mb-[181px]">
          <div className="lg:w-[505px] lg:h-[480px] w-[284.39px] h-[270.47px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663775469/eGator%20Website%20Assets/security_qiald0.png' alt="cards and phone" />
          </div>

          <div className="w-[332px] lg:w-[519px]">
           
          <h3 className="font-bold lg:text-[38px] w-[305px] lg:w-full text-[24px] leading-[32px] lg:leading-none">
            End-to-End security protocols
            </h3>
            <p className=" lg:w-[519px] text-[14px] lg:text-[20px] text-justify lg:text-start w-[332px] mt-[24px] lg:mt-[32px] font-PublicSans">
            We guarantee beyond-bank grade security that protects every consumer, right from your device information to your financial information.
            </p>
          </div>
          
        </div>
        </div>

      
    </div>
  );
};

export default Section3;
