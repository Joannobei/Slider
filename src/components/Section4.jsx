import React from 'react'
import {Computer} from '../assets'
import {MdOutlineStars, MdStars} from 'react-icons/md'

const Section4 = () => {
  return (
    <div>
    <div className='w-[1340px] max-w-[1440px] m-auto '>
        <div>
            <p className=' w-[255px] text-[40px] font-bold text-[#002366] m-auto mt-[94px] mb-[82px]'>Why eGator?</p>
        </div>
        <div className='flex items-center justify-between'>
            <img src={Computer} alt="computer" className='w-[854.88px] h-[450px]'/>
            <ul className='w-[428px] '>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdOutlineStars/></span>Corporate Expense</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdStars/></span>Digital Wallets</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdOutlineStars/></span>Challenger and  Neobanks</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdStars/></span>Business Credit and Lending</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdOutlineStars/></span>Buy Now, Pay Later</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdStars/></span>Rewards and Gifts</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdOutlineStars/></span>On-Demand Delivery Services</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdStars/></span>Other Fintechs</li>
                <li className='flex items-center text-[24px] font-bold h-[90px]'><span className='text-[#002366] w-[29.44px] h-[29.44px]'><MdStars/></span>Mobile Money Cards</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Section4