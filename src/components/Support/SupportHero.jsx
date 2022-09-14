import React from "react";

function SupportHero() {
  return (
    <div className="bg-[#F3F4F6] lg:h-[781px] pt-[150px] lg:pt-[214px] ">
      <div className="lg:w-[896px] w-[329px] m-auto font-bold text-[30px] lg:text-[56px] lg:text-center text-[#000505] ">
        <p>We are happy to help!</p>
        <p className="text-[#0F0F0F] mt-[20px] lg:mt-[36px] text-[14px]  lg:text-[20px] lg:leading-[28px]  ">
          Our team of experts are here to help you build and succeed in your
          business.
        </p>
      </div>
      <img
        className="lg:w-[446px] w-[285px] h-[211px] mt-[62px] lg:mt-[100px] lg:h-[331px] m-auto "
        src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663073850/eGator%20Website%20Assets/supportHero_bzmuja.png"
        alt="support"
      />
    </div>
  );
}

export default SupportHero;
