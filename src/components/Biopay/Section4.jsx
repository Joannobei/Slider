import React from 'react'

function Section4() {
  return (
    <div className='bg-[#F3F4F6]  pt-[88px] lg:pt-[179px] '>
      <p className='font-bold lg:text-center lg:text-[46px] text-[24px] w-[326px] lg:w-full m-auto'>Value proposition</p>
      <p className='lg:mt-[32px] mt-[24px] w-[326px] m-auto lg:w-full lg:text-center '>The most rewarding
        way for merchants to
        accept payments</p>


      <div className="lg:w-[1130px] lg:py-[174px] lg:flex justify-between m-auto">
        <div className="lg:space-y-[112px] space-y-[88px] lg:mt-0 mt-[112px]  ">
          <div className="flex justify-between w-[325px] m-auto lg:m-0 lg:w-[472px]">
            <img className='w-[50px] h-[50px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663601216/eGator%20Website%20Assets/api_qqlhk4.png" alt="" />
            <div className=" space-y-[24px] lg:w-[404px] w-[251px]  ">
              <p className='lg:text-[24px] text-[20px] font-bold '>Modern APIs</p>
              <p className='text-[14px] lg:text-[16px]'>Integrate Modern APIs that
                result in a simple, few-clicks
                integration. Merchants test
                and go live in days.</p>
            </div>
          </div>
          <div className="flex justify-between w-[325px] m-auto lg:m-0 lg:w-[472px]">
            <img className='w-[50px] h-[50px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663601225/eGator%20Website%20Assets/underwriting_sfvtez.png" alt="" />
            <div className=" space-y-[24px] lg:w-[404px] w-[251px] ">
              <p className='lg:text-[24px] text-[20px] font-bold '>Underwriting</p>
              <p className='text-[14px] lg:text-[16px]'>Sophisticated underwriting
                powered by real-time data
                and machine learning manages credit risk and yields high approval rates.</p>
            </div>
          </div>

          <div className="flex justify-between w-[325px] m-auto lg:m-0 lg:w-[472px] ">
            <img className='w-[50px] h-[50px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663601236/eGator%20Website%20Assets/infrastructure_jtgryx.png" alt="" />
            <div className=" space-y-[24px] lg:w-[404px] w-[251px]  ">
              <p className='lg:text-[24px] text-[20px] font-bold '>Modern Infrastructure</p>
              <p className='text-[14px] lg:text-[16px]'>Digital-first experience and a
                flexible tech stack that results
                in faster innovation, better
                customer experience, and
                lower costs.</p>
            </div>
          </div>

        </div>

        <img className='lg:w-[567px] w-[322px] m-auto lg:m-0 py-[88px] lg:py-0 ' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663279078/eGator%20Website%20Assets/ladder-biopay_lcotap.png" alt="" />

      </div>
    </div>
  )
}

export default Section4