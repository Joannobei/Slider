import React from 'react'
import { NavLink } from "react-router-dom";

const Section6 = () => {
  return (
    <div className='bg-[#F5F5F5]'>
        <div className='lg:w-[1440px] w-[375px] m-auto '>
        <div className='lg:w-[838px] w-[331px] m-auto h-[266px] flex flex-col justify-center content-center'>
            <h1 className='lg:text-[46px] text-[24px] font-bold text-center leading-tight'>Embrace the power of the new corporate banking.</h1>
            <p className='font-PublicSans text-center lg:text-[20px] text-[14px]'> Innovative corporate banking for accessible and convenient solutions that meets the criteria for future growth.  </p>
            <div className='flex flex-col justify-center'>
            <button
              type="button"
              className="text-sm rounded-lg text-white bg-[#6772E5] w-[169px] h-[50px] "
            >
              <NavLink to="/ready">Get Started</NavLink>
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section6