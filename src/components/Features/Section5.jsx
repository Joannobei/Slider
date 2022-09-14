import React from 'react'
import { NavLink } from "react-router-dom";

const Section5 = () => {
  return (
    <div className=''>
        <div className='lg:max-w-[1440px] max-w-[375px] m-auto lg:h-[618px] h-[378px]'>
          <div className='lg:w-[838px] w-[331px] m-auto flex flex-col justify-center content-center lg:py-[176px] py-[84px]'>
              <h1 className='lg:text-[46px] text-[24px] font-bold text-center leading-tight'>Need more information?</h1>
              <p className='font-PublicSans text-center lg:text-[20px] text-[14px] lg:my-[48px] my-[24px] '> We are always available to host your team and demonstrate how eGator can improve your business process. </p>
              <div className='relative left-0 right-0 m-auto '>
                  <button
                  type="button"
                  className="text-sm rounded-md text-white bg-[#6772E5] w-[169px] h-[50px]">
                  <NavLink to="/ready">Get Started</NavLink>
                  </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Section5;