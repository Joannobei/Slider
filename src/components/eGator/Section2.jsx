import React from "react";

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
            Manage your company’s spend using our unique financial dashboard and spend controls that put you in total control. Built for businesses of all sizes, NGO’s and Government agencies/ departments.
            </p>
          </div>
          <div className="lg:w-[677.85px] lg:h-[538px] w-[230px] h-[209.42px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060138/eGator%20Website%20Assets/computer_g9qzgc.png' alt="computer" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}

    
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto mt-[88px] lg:mt-[26px]">
          <div className="lg:w-[474.35px] lg:h-[555.93px] w-[188px] h-[220.33px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060193/eGator%20Website%20Assets/pos_ybte6s.png' alt="computer" />
          </div>

          <div className="w-[332px] lg:w-[519px]">
            <p className="text-[#6772E5]  font-bold lg:text-[24px] text-[20px] ">
            Make payment easily
            </p>
            <h3 className="font-bold lg:text-[38px] text-[24px] leading-none">
            Frictionless payment options
            </h3>
            <p className=" lg:w-[519px] w-[332px] font-PublicSans">
            Our cards are accepted globally at ATM’s, Point of Sales and Online. This puts you in the lead and grants you the freedom to transact wherever you find yourself. 
            </p>
          </div>
          
        </div>
        </div>

      
    </div>
  );
};

export default Section2;
