import React from 'react'

function Section2() {
    return (
        <div className='bg-[#6772E5] lg:h-[730px] py-[176px] ' >

            <div className="w-[70.5%] m-auto text-center text-white ">
                <p className=' lg:text-[46px] font-bold  '> Web3 Ready Solutions for Modern Payments</p>
                <p className='lg:py-[32px] text-[20px]'>With eGator BioPay, making payments are flexible, fast, and reliable.</p>
                <div className=" flex justify-between lg:w-[440px] m-auto ">
                    <p> <img className='lg:w-[176px] lg:h-[176px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663279214/eGator%20Website%20Assets/finger_ogojyr.png" alt="" />
                        <p className='lg:mt-[28px]'>Facial Recognition</p> </p>
                    <p>
                        <img className='lg:w-[176px] lg:h-[176px]' src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663279213/eGator%20Website%20Assets/snap_ni5pdz.png" alt="" />

                        <p className='lg:mt-[28px]'>Fingerprint</p> </p>

                </div>
            </div>
        </div>
    )
}

export default Section2