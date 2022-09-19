import React from 'react'
import { NavLink } from 'react-router-dom'

function Section6() {
  return (
    <div>
<div className=" bg-[#F3F4F6] ">
        <div className=" lg:w-[838px] w-[325px] m-auto lg:text-center lg:py-[176px] py-[88px]  lg:h-[592px] ">
          <p className="font-bold text-[24px] lg:text-[46px]">
          Embrace the power of the new payment system.
          </p>
          <p className="lg:pt-[32px] py-[24px] lg:py-0 lg:pb-[48px] text-[14px] lg:text-[20px] ">
          Enjoy the freedom to pay through modern and easier ways.
          </p>
          <button className="bg-[#6772E5] rounded-md text-white w-[169px] h-[50px] ">
            {" "}
            <NavLink to="/ready" onClick={() => window.scrollTo(0, 0)}>
              Get Started
            </NavLink>{" "}
          </button>
        </div>
      </div>


    </div>
  )
}

export default Section6