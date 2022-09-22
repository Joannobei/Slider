import React from "react";


const Section4 = () => {
  return (
    <div className="bg-[#F3F4F6] lg:h-[1270px] pt-[101px] lg:pt-[176px] pb-[92px] lg:pb-[142px] ">
      <div className="lg:w-[813px] w-[325px] m-auto">


        <p className=" font-bold lg:text-[46px] text-[24px] lg:text-center ">What we offer</p>
        <p className="lg:mt-[32px] lg:leading-[28px] mt-[24px] lg:text-center text-[14px] lg:text-[20px] ">Modern Biometric Payments Infrastructure, Fraud Detection and Unmatched Digital Experiences</p>
      </div>

      <div className=" lg:w-[1281px] w-[325px]   m-auto lg:flex justify-between ">
        <div className="bg-white lg:w-[411px] w-[325px] mt-[32px] lg:mt-[88px] rounded-[10px] lg:h-[576px] ">
          <div className="lg:w-[345px] w-[272px] m-auto py-[69px] lg:py-[88px]">
            <img className=" w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] " src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663800899/eGator%20Website%20Assets/forMerchnats_pawbhq.png" alt="" />
            <h2 className="font-bold lg:text-[30px] my-[19px] lg:my-[24px]">eGator for merchants</h2>

            <p className="lg:h-[140px] lg:leading-[28px] h-[120px] text-justify lg:text-start text-[14px] lg:text-[20px]">Built for Banks, Fintechs, Payment aggregators and storefronts offering the best of services to their users and customers.
            </p>
            <button className="bg-[#6772E5] mt-[19px] lg:mt-[24px] w-[166px] h-[50px] rounded-[4px]  " >Learn More</button>
          </div>
        </div>

        <div className="bg-white lg:w-[411px] mt-[32px] w-[325px] lg:mt-[88px] rounded-[10px] lg:h-[576px] ">
        <div className="lg:w-[345px] w-[272px] m-auto py-[69px] lg:py-[88px]">

            <img className=" w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] " src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663800907/eGator%20Website%20Assets/forCorporate_wv8s6y.png" alt="" />
            <h2 className="font-bold lg:text-[30px] my-[19px] lg:my-[24px]">eGator for corporates</h2>

            <p className="lg:h-[140px] h-[120px] text-justify lg:text-start text-[14px] lg:text-[20px] lg:leading-[28px]">Offers top of the range expense management, dynamic spend controls, real time reconciliation and spend data insights to help you grow your business
            </p>
            <button className="bg-[#6772E5] w-[166px] mt-[19px] lg:mt-[24px] h-[50px] rounded-[4px]  " >Learn More</button>
          </div>
        </div>

        <div className="bg-white lg:w-[411px] mt-[25px] lg:mt-[88px] rounded-[10px] lg:h-[576px] ">
        <div className="lg:w-[345px] w-[272px] m-auto py-[69px] lg:py-[88px]">

            <img className=" w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] " src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663800914/eGator%20Website%20Assets/forDevelpoers_prnukj.png" alt="" />
            <h2 className="font-bold lg:text-[30px] my-[19px] lg:my-[24px]">eGator for developers</h2>

            <p className="lg:h-[140px] lg:leading-[28px] text-justify lg:text-start h-[120px] text-[14px] lg:text-[20px]">We enable you to build, test and quickly launch through our sandbox program with support from our team of experts.

            </p>
            <button className="bg-[#6772E5] mt-[19px] lg:mt-[24px] w-[166px] h-[50px] rounded-[4px]  " > <a href='https://biopay.egator.co/' >Learn More</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
