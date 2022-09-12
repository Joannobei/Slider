import React from 'react'
import {Card} from '../../assets'

const HeroSection = () => {
  return (
    <div className='bg-[#F3F4F6] relative -z-50'>
        <div className='lg:max-w-[1440px] max-w-[375px] lg:w-[1190px] w-[334px] h-[681px] pt-[190px] m-auto '>
            <h1 className='text-[#1D1D1D] text-[56px] font-bold text-center '>The new way to take control of your business expenses </h1>
            <p className='text-center'>eGator is equipped with advanced tools to keep you up to date on your company's expenses in real time, approve requests and avoid double subscriptions to services.</p>
            <div className='absolute top-48  w-[1039.56px] h-[916.17px]'>
            <img src={Card} alt="cards" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection