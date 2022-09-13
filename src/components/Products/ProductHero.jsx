import React from 'react'


function ProductHero() {
    return (
        <div className="bg-[#F3F4F6]">
            <div className='lg:h-[681px] h-[570px] lg:max-w-[1440px] max-w-[375px] m-auto mt-[33px] lg:mt-[110px]'>
                <p className='lg:w-[1190px] w-[334px] text-[30px] font-bold lg:text-[56px] pt-[110px]  lg:text-center m-auto'>eGator is the spending solution you’ve been waiting for!</p>
                <p className='lg:w-[896px] w-[326px] text-[#000505] m-auto lg:text-center pt-[36px] ' >Africa’s first corporate card and Expense Management Solution. Eliminate manual and complicated reimbursement processes and get real time visibility on your company spending.</p>

                <img src="https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060183/eGator%20Website%20Assets/productHero_d5kqcg.png" className='  flex  m-auto w-[250px] h-[139px] mt-[40px] lg:mt-[88px] lg:h-[280px] lg:w-[560px]' alt="" />
            </div>

            <div className="bg-[#6772E5] relative h-[440px] lg:h-[493px] text-white ">
                <p className='lg:w-[838px] w-[323px] lg:text-center pt-[88px] lg:pt-[176px] m-auto font-bold text-[24px] lg:text-[46px]'>Business spending made simple</p>
                <p className='lg:text-center w-[323px] lg:w-[820px] m-auto mt-[48px]'>Designed to make work easy for accountants, HR personnel and Procurement executive.
                    suitable for Large Corporates, Startups, SMEs, NGOs and Governments. </p>
            </div>
            <div className="lg:flex justify-center lg:space-y-0 space-y-[24px] w-[255px] m-auto lg:w-[1274px] relative  -top-[80px] ">
                <img className='lg:w-[414px] h-[157px] w-[255px] lg:h-[255px]' src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060177/eGator%20Website%20Assets/product1_hk1e61.png' alt="conference-hall" />
                <img className='lg:w-[414px] h-[157px] w-[255px] lg:h-[255px]' src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060191/eGator%20Website%20Assets/product2_dtheee.png' alt="conference-hall" />
                <img className='lg:w-[414px] h-[157px] w-[255px] lg:h-[255px]' src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1663060172/eGator%20Website%20Assets/product3_wrsx4h.png' alt="doctor&patient" />
            </div>
        </div>

    )
}

export default ProductHero