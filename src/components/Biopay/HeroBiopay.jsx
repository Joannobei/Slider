import React from "react";

function HeroBiopay() {
  return (
    <div className=" bg-[#F3F4F6] pt-[188px] pb-[94px] lg:pt-[260px] lg:pb-[216px]">
      <div className="lg:w-[1281px] lg:flex justify-between  m-auto">
        <div className=" lg:w-[440px] w-[325px] m-auto lg:m-0  ">
          <p className="lg:leading-[64px] font-bold  text-[30px] lg:text-[56px] ">
            Secure and fast way to process payments
          </p>
          <p className=" lg:text-[20px] lg:py-[48px] py-[26px] text-[14px] ">
            eGator enables modern biometric payments through Machine Learning
            and deep AI
          </p>
          <button className="w-[169px] h-[50px] rounded-[4px] bg-[#6772E5] text-white ">
          <a href='https://form.jotform.com/222555797602564' >Get Started</a>
          </button>
        </div>

        <div className="lg:w-[607px] m-auto lg:m-0 w-[324px] lg:mt-0 mt-[29px]">
          <img
            src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663243205/eGator%20Website%20Assets/face_yuv5h6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBiopay;
