import React from "react";

const Section2 = () => {
  return (
    <div>
      <div className=" lg:max-w-[1440px] max-w-[375px] m-auto">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:w-[1279px] w-[332px] m-auto mt-[89px] lg:mt-[176px]">
          <div className="w-[332px] lg:w-[526px]">

            <h3 className="font-bold lg:text-[38px] text-[24px] leading-[32px] lg:leading-none">
              Secure cashless transactions
            </h3>
            <p className=" lg:w-[526px] lg:mt-[32px] mt-[24px] lg:text-[20px] text-[14px] text-justify lg:text-left m-auto  w-[326px] font-PublicSans">
              Biometric identification and verification systems are proven to be the safest multi-factor authentication systems in the world today. We build on these pillars to ensure smooth and secure transactions.
            </p>
          </div>
          <div className="lg:w-[542.98px]  lg:h-[562px] w-[305.76px] h-[316.67px] mt-[24px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663775481/eGator%20Website%20Assets/cashless_lb24jp.png' alt="computer" />
          </div>
        </div>

        {/* SECTION SECOND LINE */}


        <div className="flex justify-between items-center lg:flex-row flex-col-reverse lg:w-[1279px] w-[332px] m-auto mt-[88px] lg:mt-[119px]">
          <div className="lg:w-[542.48px] lg:h-[481.88px] w-[305.5px] h-[271.37px] mt-[34px] lg:mt-0">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663775469/eGator%20Website%20Assets/analytics_b43d2k.png' alt="computer" />
          </div>

          <div className="w-[332px] lg:w-[519px]">

            <h3 className="font-bold lg:text-[38px] w-[305px] lg:w-full text-[24px] leading-[32px] lg:leading-none">

              Data insights and analytics
            </h3>
            <p className=" lg:w-[519px]  lg:text-[20px] text-[14px] text-justify lg:text-start lg:mt-[32px] mt-[24px] w-[332px] font-PublicSans">
              We provide deep data insights and analytics that you can leverage to make key financial decisions as a business or as a consumer.
            </p>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Section2;
