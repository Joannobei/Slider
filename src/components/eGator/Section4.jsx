import React from "react";


const Section4 = () => {
  return (
    <div className="bg-[#F3F4F6] lg:h-[1270px] h-[2088px]">
      <div className="lg:max-w-[1440px] max-w-[375px] lg:pt-[176px] pt-[101px] m-auto">
        <h2 className="text-center lg:text-[46px] text-[24px] font-bold lg:w-[813px] w-[331px] m-auto">Why organizations prefer our cards</h2>
        <p className="font-PublicSans text-center lg:mb-[176px] mb-[88px] lg:w-[813px] w-[331px] m-auto">
        Built on solid pillars to enable your growth.
        </p>

        <div className="flex lg:flex-row flex-col justify-between lg:w-[1234px] w-[375px] m-auto ">
          <div className="lg:w-[382px] w-[331px] m-auto">
            <h3 className='lg:text-[30px] text-[20px] font-bold'>We’ve got you covered</h3>
            <p className='lg:w-[382px] w-[307px] font-PublicSans text-[14px] lg:text-[16px] mt-[24px] lg:mt-[32px]'>
            Don’t spend months and months in waiting just to deploy the solution that helps mitigate financial loss and spend fraud within your business. eGator has it all...
            </p>
          </div>
          {/* First */}
          <div className="lg:w-[377px] w-[306px] lg:mt-0 mt-[88px] m-auto">
            <div className="flex flex-col content-between m-auto lg:h-[608px]">
              <div >
                <div className="flex lg:flex-row flex-col lg:w-[375px] w-[306px] justify-between">
                <div className='w-[50px]'><img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060132/eGator%20Website%20Assets/global_ynqvvk.png' alt="global"  /></div>
                <div>
                  <h4 className="text-[24px]">Truly global</h4>
                  <p className="w-[301px] font-PublicSans mt-[24px]">
                    We have on-the-ground regional teams in Europe, Middle East
                    and Africa across different time zones.
                  </p>
                </div>
                </div>
              </div>

              <div className='lg:mt-[88px] mt-[24px]'>
                <div className="flex lg:flex-row flex-col lg:w-[375px] w-[306px] justify-between">
                <div className='w-[50px]'><img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060192/eGator%20Website%20Assets/scale_cqbfur.png' alt="scale"  /></div>
                <div>
                  <h4 className="text-[24px]">Scalable at speed</h4>
                  <p className="w-[301px] font-PublicSans mt-[24px] ">
                    With higher processing capacity, greater speed, and richer
                    data, we’re able to exponentially scale your program without
                    disruption in service.
                  </p>
                  </div>
                </div>
              </div>

              <div className='lg:mt-[88px] mt-[24px]'>
                <div className="flex lg:flex-row flex-col lg:w-[375px] w-[306px] justify-between ">
                <div className='w-[50px]'><img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060192/eGator%20Website%20Assets/speed_sewwha.png' alt="speed" /></div>
                 <div>
                 <h4 className="text-[24px]">Speed to market</h4>
                  <p className="w-[301px] font-PublicSans mt-[24px]">
                    Unbeatable time-to-market, from first handshake to first
                    transaction through unmatched APIs and regional experience.
                  </p>
                 </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second line */}
          <div className="lg:w-[377px] lg:h-[608px] w-[306px] m-auto">
            <div className="flex flex-col content-between">
              <div className='lg:mt-0 mt-[24px]'>
                <div className="flex lg:flex-row flex-col lg:w-[375px] w-[306px] justify-between">
                <div className='w-[50px]'> <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060133/eGator%20Website%20Assets/cloud_fc10wm.png' alt="cloud-native"  /></div>
                 <div>
                 <h4 className="text-[24px]">Cloud-native</h4>
                  <p className="w-[301px] font-PublicSans mt-[24px]">
                    Superior capability across the different cloud platforms,
                    shared or dedicated, with unmatched APIs and flexibly.
                  </p>
                 </div>
                </div>
              </div>

              <div className='lg:mt-[88px] mt-[24px]'>
                <div className="flex lg:flex-row flex-col lg:w-[375px] w-[306px] justify-between">
                <div className='w-[50px]'><img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060131/eGator%20Website%20Assets/data_dizv7j.png' alt="data" /></div>
                  <div>
                  <h4 className="text-[24px]">Real-time data</h4>
                  <p className="w-[301px] font-PublicSans mt-[24px]">
                    Easily innovate, deploy and customize products to more
                    insightfully connect with customers, while reducing
                    operational costs.
                  </p>
                  </div>
                </div>
              </div>

              <div className='lg:mt-[88px] mt-[24px]'>
                <div className="flex lg:flex-row flex-col lg:w-[375px] w-[306px] justify-between">
                  <div className='w-[50px]'><img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060138/eGator%20Website%20Assets/leader_vy7orn.png' alt="leader"  /></div>
                  <div>
                    <h4 className="text-[24px]">Trusted by leaders</h4>
                    <p className="w-[301px] font-PublicSans mt-[24px]">
                      We are trusted by leaders, including leading banks,
                      digital banks and fin-techs, giving world class support to
                      ensure you have a smooth journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
