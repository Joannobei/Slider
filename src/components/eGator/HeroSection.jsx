import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#F3F4F6] ">
      <div className="pt-[190px] lg:pb-[50px] m-auto">
        <div className="flex lg:flex-row justify-between flex-col items-center lg:w-[1300px] w-[320px] m-auto ">
          <div className="lg:w-[542px]  lg:m-0 w-[331px] m-auto lg:text-left ">
            <h1 className="lg:text-[56px] leading-[38px] text-[30px] text-[#000505] lg:w-[542px] w-[302px] font-bold lg:h-[128px] lg:leading-none ">
              Modern Payment Solutions for EMEA
            </h1>
            <p className="lg:text-[20px] text-[14px] leading-[24px] lg:leading-[28px] text-[#000505] lg:my-[48px] my-[24px] ">
              eGator offers frictionless biometric payments, through secure
              tokenization and deep AI.
            </p>
            <button
              type="button"
              className="text-sm rounded-md text-white bg-[#6772E5] lg:w-[149px] w-[169px] lg:h-[49px] h-[50px] lg:mb-0 mb-5"
            >
              <a href='https://form.jotform.com/222555797602564' >Get Started</a>
            </button>
          </div>

          <div className="lg:w-[617.77px] lg:mt-0 mt-[57px] w-[305px] lg:h-full h-[285.58px] m-auto ">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663775472/eGator%20Website%20Assets/Hero_jpl1vs.png' alt="hero_card" className="object-contain lg:w-[617.77px] w-[288.87px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
