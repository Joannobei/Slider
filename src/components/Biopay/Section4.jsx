import React from 'react'

function Section4() {
  return (
    <div className='bg-[#F3F4F6] pt-[179px] '>
      <p className='font-bold text-center lg:text-[46px] '>Value proposition</p>
      <p className='mt-[32px] text-center '>The most rewarding
        way for merchants to
        accept payments</p>


      <div className="w-[1130px] lg:py-[174px] flex justify-between m-auto">
        <div className="lg:space-y-[112px]  ">
          <div className="flex justify-between w-[472px] ">
            <img className='w-[50px] h-[50px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663536855/eGator%20Website%20Assets/hands_y0ircj.png" alt="" />
            <div className=" space-y-[24px] w-[404px]  ">
              <p className='text-[24px] font-bold '>Modern APIs</p>
              <p>Integrate Modern APIs that
                result in a simple, few-clicks
                integration. Merchants test
                and go live in days.</p>
            </div>
          </div>
          <div className="flex justify-between w-[472px] ">
            <img className='w-[50px] h-[50px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663536841/eGator%20Website%20Assets/padlock_qe2a2j.png" alt="" />
            <div className=" space-y-[24px] w-[404px]  ">
              <p className='text-[24px] font-bold '>Underwriting</p>
              <p>Sophisticated underwriting
                powered by real-time data
                and machine learning manages credit risk and yields high approval rates.</p>
            </div>
          </div>

          <div className="flex justify-between w-[472px] ">
            <img className='w-[50px] h-[50px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663536830/eGator%20Website%20Assets/thumbs-up_h0nimq.png" alt="" />
            <div className=" space-y-[24px] w-[404px]  ">
              <p className='text-[24px] font-bold '>Realiable</p>
              <p>Digital-first experience and a
                flexible tech stack that results
                in faster innovation, better
                customer experience, and
                lower costs.</p>
            </div>
          </div>

        </div>

        <img  className='lg:w-[567px] ' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663279078/eGator%20Website%20Assets/ladder-biopay_lcotap.png" alt="" />
      </div>
    </div>
  )
}

export default Section4