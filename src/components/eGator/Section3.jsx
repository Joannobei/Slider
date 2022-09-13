import React from "react";


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
            Do you know accountants lose a minimum of 55 hours every month in their attempt to reconcile all receipts? We provide you the tool to keep track of your receipts and auto-reconcile in real time with the spend item when uploaded.
            </p>
          </div>
          <div className="lg:w-[641.56px] lg:h-[689.57px] w-[221.59px] h-[238.17px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060155/eGator%20Website%20Assets/phone_climex.png' alt="phone" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

    
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto mt-[88px] lg:mt-[26px]">
          <div className="lg:w-[693.02px] lg:h-[676.38px] w-[275.68px] h-[257.08px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060164/eGator%20Website%20Assets/nfc_jfonvi.png' alt="cards and phone" />
          </div>

          <div className="w-[332px] lg:w-[519px]">
            <p className="text-[#6772E5] lg:text-[24px] text-[20px] font-bold ">
            Unlimited cards issuing
            </p>
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none ">
            Physical and Virtual cards issuing
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            eGator provides an open API platform that lets you instantly create, control and distribute virtual or physical cards. Our solution affords you the necessary environment to build, test and launch in record-fast time. 
            </p>
          </div>
          
        </div>
        </div>

      
    </div>
  );
};

export default Section3;
