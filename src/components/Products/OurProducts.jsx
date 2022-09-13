import React from 'react'
import { productCards, productComputer, productPhoneCard, } from '../../assets'

function OurProducts
  () {
  return (
    <div className='lg:max-w-[1440px] max-w-[375px] m-auto'>

      <p className='lg:mt-[61px] text-[24px] w-[328px] lg:w-[813px] font-bold lg:text-[46px] m-auto lg:text-center'>Our Products</p>


      <div className=' lg:w-[1281px] h-[606px]  m-auto mt-[88px] bg-[#F3F4F6] rounded-md '>
        <div className='lg:w-[1157px] w-[332px] m-auto lg:flex py-[129px] justify-between'>
          <img className='lg:w-[424px] lg:h-[352px] m-auto w-[250px] h-[208px]  ' src={productComputer} alt="" />
          <div className='lg:w-[542px]  '>
            <p className='font-bold lg:text-[38px] text-[24px]  '>Expense Management</p>
            <p className='w-[full] mt-[48px] text-[14px] lg:text-[20px] '>Use our comprehensive software to manage your business spend and reconcile receipts in real time.
              Brand and issue corporate cards with their own design and logo for your employees, vendors and subscription.</p>
            <button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md'>Learn More</button>
          </div>
        </div>
      </div>

      <div className=' lg:w-[1281px] h-[606px]  m-auto lg:mt-[88px] bg-[#F3F4F6] rounded-md '>
        <div className='lg:w-[1143px] w-[332px] m-auto flex flex-col-reverse lg:flex-row  items-center py-[129px] justify-between'>
          <div className='lg:w-[542px]  '>
            <p className='font-bold text-[24px] lg:text-[38px] '>Programmable Card Issuing</p>
            <p className='w-[full] mt-[48px] text-[14px] lg:text-[20px] '>eGator’s Card Issuing open API platform lets you instantly create, control, distribute and manage every aspect of your payment card program.</p>
            <button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md'>Learn More</button>
          </div>

          <img className='lg:w-[600px] lg:h-[385px] w-[304px] h-[190px] ' src={productCards} alt="" />
        </div>
      </div>

      <div className=' lg:w-[1281px] lg:h-[606px]  m-auto lg:mt-[88px] bg-[#F3F4F6] rounded-md '>
        <div className='lg:w-[1147px] w-[334px] items-center m-auto lg:flex lg:flex-row py-[129px] justify-between'>
          <img className='lg:w-[526px] lg:h-[361px] ' src={productPhoneCard} alt="" />
          <div className='lg:w-[542px] '>
            <p className='font-bold text-[24px] lg:text-[38px] '>Card Stack</p>
            <p className='lg:w-[542px] w-[332px] mt-[48px] text-[14px] lg:text-[20px]  '>Free up your wallet by replacing all the cards you carry around.
              Our Stack Super Card allows you to ditch your cards at home and still get to use them when you have to spend.
              Now, you can also use your virtual card at physical POS. </p>
            <button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md '>Learn More</button>
          </div>
        </div>
      </div>

      <div className='lg:w-[963px] w-[324px] m-auto space-y-[24px] lg:space-y-[36px] lg:text-center my-[176px] '>
        <p className=' font-bold text-[24px] lg:text-[46px] ' >Join eGator today</p>

        <p className='lg:text-[20px] text-[14px]  '>Take control of your spending.
          Book a demo session to see how eGator can transform your company spending</p>
        <button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md '>Get Started</button>

      </div>

    </div>
  )
}

export default OurProducts

