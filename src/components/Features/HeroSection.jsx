import React from 'react'


const HeroSection = () => {
  return (
    <div className='bg-[#F3F4F6] relative -z-50'>
        <div className='lg:max-w-[1440px] max-w-[375px] lg:w-[1193px] w-[331px] lg:h-[681px] h-[473px] lg:pt-[190px] pt-[140px] m-auto '>
            <h1 className='text-[#1D1D1D] lg:text-[56px] text-[30px] font-bold text-center lg:w-[1193px] w-[325px]'>The new way to take control of your business expenses </h1>
            <p className='text-center lg:text-[20px] text-[14px]'>eGator is equipped with advanced tools to keep you up to date on your company's expenses in real time, approve requests and avoid double subscriptions to services.</p>
            <div className='absolute lg:top-48 top-64 lg:right-auto -right-6 lg:w-[1039.56px] lg:h-[916.17px] w-[463.11px] h-[408.14px]'>
            <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060140/eGator%20Website%20Assets/cards_bc9qdo.png' alt="cards" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection