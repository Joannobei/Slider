import React from 'react'
import {Link } from 'react-router-dom'

function NotFoundComponent() {
  return (
    <div className='lg:w-[550px] w-[294px] m-auto mt-[191px] lg:mt-[175px] mb-[88px] lg:mb-[128px] text-center space-y-10'>
<img src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663391729/eGator%20Website%20Assets/404_yfsyxb.png" alt="" />
<p>Something went wrong...</p>

<Link to='/'> <button className='mt-10 bg-[#6772E5] text-white w-[213px] h-[50px] rounded-[4px]'>Back to Main Page</button>
</Link>
    </div>
  )
}

export default NotFoundComponent