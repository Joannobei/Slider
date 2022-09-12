import React from "react";
import { PCI, Digital, Wire, Payment, BCard} from "../../assets";

const Section4 = () => {
  return (
    <div className="bg-[#F3F4F6] lg:h-[1270px] h-[2088px]">
      <div className="lg:max-w-[1440px] max-w-[375px] lg:pt-[176px] pt-[101px] m-auto">
        <h2 className="text-center lg:text-[46px] text-[24px] font-bold lg:w-[868px] w-[331px] m-auto">eGator also gives you access to;</h2>
       

        <div className="flex lg:flex-row flex-col justify-between lg:w-[1282px] w-[325px] m-auto mt-[88px] ">
          <div className="w-[197px] m-auto">
            <img src={PCI} alt="compliance" className='w-[99px] h-[99px]'/>
            <p className="text-center">PCI Compliance</p>
          </div>
          <div className="w-[197px] m-auto">
            <img src={Digital} alt="wallet" className='w-[99px] h-[99px]'/>
            <p className="text-center">Digital Wallet Support</p>
          </div>
          <div className="w-[197px] m-auto">
            <img src={Payment} alt="compliance" className='w-[99px] h-[99px]'/>
            <p className="text-center">Payment Processing</p>
          </div>
          <div className="w-[197px] m-auto">
            <img src={BCard} alt="compliance" className='w-[99px] h-[99px]'/>
            <p className="text-center">Branded Cards</p>
          </div>
          <div className="w-[197px] m-auto">
            <img src={Wire} alt="compliance" className='w-[99px] h-[99px]'/>
            <p className="text-center">Open API for Cards</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section4;
