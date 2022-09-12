import React from "react";
import { product1, product2, product3, productHero } from "../../assets";

function ProductHero() {
  return (
    <div className="">
      <div className="h-[681px] bg-[#F3F4F6] mt-[110px] ">
        <p className="lg:w-[1190px] text-[56px] pt-[110px] font-bold text-center m-auto">
          eGator is the spending solution you’ve been waiting for!
        </p>
        <p className="w-[896px] m-auto text-center pt-[36px] ">
          Africa’s first corporate card and Expense Management Solution.
          Eliminate manual and complicated reimbursement processes and get real
          time visibility on your company spending.
        </p>

        <img
          src={productHero}
          className=" flex  m-auto mt-[88px] lg:h-[280px] lg:w-[560px]"
          alt="hero-img"
        />
      </div>

      <div className="bg-[#6772E5] h-[493px] text-white  ">
        <p className="w-[838px] pt-[176px] m-auto font-bold text-[46px]">
          Business spending made simple
        </p>
        <p className="text-center w-[820px] m-auto mt-[48px]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla
          est, tempus sed vitae. Tincidunt nulla sit diam nisi, interdum dui
          interdum. Nulla diam tortor justo, dignissim nibh. Eget tellus orci
          eros, quis congue.
        </p>
      </div>

      <div className="flex justify-between w-[1274px] m-auto mt-[-80px]">
        <img className="w-[414px] h-[255px] " src={product1} alt="" />
        <img className="w-[414px] h-[255px] " src={product2} alt="" />
        <img className="w-[414px] h-[255px] " src={product3} alt="" />
      </div>
    </div>
  );
}

export default ProductHero;
