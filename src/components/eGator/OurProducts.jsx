import React from 'react'
import { productCards, productComputer, productPhoneCard } from '../../assets'

function OurProducts
() {
  return (
    <div>
<p className='lg:mt-[113px] lg:w-[813px] lg:font-bold lg:text-[46px] m-auto text-center'>Our Products</p>
<p className='lg:w-[813px] m-auto text-center mt-[48px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sapien non in a est et turpis. Urna quisque at sit ornare consectetur ac.</p>


<div className=' w-[1281px] h-[606px]  m-auto mt-[88px] bg-[#F3F4F6] rounded-md '> 
<div className='w-[1157px] m-auto flex py-[129px] justify-between'> 
<img className='lg:w-[424px] lg:h-[352px] ' src={productComputer} alt="" />
<div className='w-[542px] '>
  <p className='font-bold text-[38px] '>Expense Management</p>
  <p className='w-[full] mt-[48px] text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, placerat ultricies id facilisis a odio laoreet nec. Et nec amet non pharetra. Sed rutrum pellentesque sagittis.</p>
<button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md'>Learn More</button>
</div>
</div>
</div>

<div className=' w-[1281px] h-[606px]  m-auto mt-[88px] bg-[#F3F4F6] rounded-md '> 
<div className='w-[1143px] m-auto flex py-[129px] justify-between'> 
 <div className='w-[542px] '>
  <p className='font-bold text-[38px] '>Programmable Card Issuing</p>
  <p className='w-[full] mt-[48px] text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, placerat ultricies id facilisis a odio laoreet nec. Et nec amet non pharetra. Sed rutrum pellentesque sagittis.</p>
    <button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md'>Learn More</button>
  </div>

  <img className='lg:w-[600px] lg:h-[385px] ' src={productCards} alt="" />

</div>
</div>

<div className=' w-[1281px] h-[606px]  m-auto mt-[88px] bg-[#F3F4F6] rounded-md '> 
<div className='w-[1147px] m-auto flex py-[129px] justify-between'> 
<img className='lg:w-[526px] lg:h-[361px] ' src={productPhoneCard} alt="" />
<div className='w-[542px] '>
  <p className='font-bold text-[38px] '>Card Stack</p>
  <p className='w-[full] mt-[48px] text-[20px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, placerat ultricies id facilisis a odio laoreet nec. Et nec amet non pharetra. Sed rutrum pellentesque sagittis.</p>
<button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md '>Learn More</button>
</div>
</div>
</div>

<div className='w-[963px] m-auto space-y-[36px] text-center my-[176px] '>
  <p className=' font-bold text-[46px] ' >Join eGator today</p>

  <p className='text-[20px] '>Take control of your spending.
Book a demo session to see how eGator can transform your company spending</p>
<button className='w-[166px] h-[50px] bg-[#6772E5] text-white mt-[48px] rounded-md '>Get Started</button>

</div>

    </div>
  )
}

export default OurProducts

