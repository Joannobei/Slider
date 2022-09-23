import React from "react";
// import { PCI, Digital, Wire, Payment, BCard} from "../../assets";

const Section4 = () => {
  return (
    <div className="bg-[#F3F4F6] lg:h-[733px] h-[1509px]">
      <div className="lg:max-w-[1440px] max-w-[375px] lg:pt-[176px] pt-[101px] m-auto">
        <h2 className="text-center lg:text-[46px] text-[24px] font-bold lg:w-[868px] w-[331px] m-auto">eGator also gives you access to;</h2>
       

        <div className="flex lg:flex-row flex-col justify-between lg:w-[1282px] w-[325px] m-auto mt-[88px] ">
          <div className="w-[197px] lg:m-auto">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060143/eGator%20Website%20Assets/PCI_ryophw.png' alt="compliance" className='w-[99px] h-[99px]  lg:m-auto'/>
            <p className="lg:text-center">PCI Compliance</p>
          </div>
          <div className="w-[197px] lg:m-auto lg:mt-0 mt-[88px]">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060132/eGator%20Website%20Assets/digital_bualli.png' alt="wallet" className='w-[99px] h-[99px]  lg:m-auto'/>
            <p className="lg:text-center">Digital Wallet Support</p>
          </div>
          <div className="w-[197px] lg:m-auto lg:mt-0 mt-[88px]">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060140/eGator%20Website%20Assets/payment_ydyuyd.png' alt="compliance" className='w-[99px] h-[99px] lg:m-auto'/>
            <p className="lg:text-center">Payment Processing</p>
          </div>
          <div className="w-[197px] lg:m-auto lg:mt-0  mt-[88px]">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060130/eGator%20Website%20Assets/bcard_qd6d9d.png' alt="compliance" className='w-[99px] h-[99px]  lg:m-auto'/>
            <p className="lg:text-center">Branded Cards</p>
          </div>
          <div className="w-[197px] lg:m-auto lg:mt-0 mt-[88px]">
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060194/eGator%20Website%20Assets/wire_jcxmhr.png' alt="compliance" className='w-[99px] h-[99px]  lg:m-auto'/>
            <p className="lg:text-center">Open API for Cards</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section4;
