import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { navList } from "./navList";

const DrawerNav = () => {
  return (
    <div className=" border-2">
      <div className="flex flex-col justify-between items-center sm:w-80 w-72 h-[524px] absolute right-0 left-32 m-auto z-10 py-10 px-8 mr-5 bg-white border-2 ">
        <div className="flex flex-col justify-between h-[200px]">
          {navList.map((item) => (
            <div key={item.id} className="">
              <NavLink to={item.path} className=" font-PublicSans text-[24px] ">
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>

        
         
          <button className=" text-sm rounded-lg text-white bg-[#6772E5] lg:w-[149px] w-[169px] lg:h-[49px] h-[50px]">
            <NavLink to="/sign_up">Get Started</NavLink>
          </button>
       
      </div>
    </div>
  );
};

export default DrawerNav;
