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
              <NavLink to={item.path} className="text-gray-800 text-sm">
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>

        <div className=" flex flex-col justify-between h-[120px]">
          <button className="text-lg border-radius border-[#002366] border-2 w-[149px] h-[49px]">
            <NavLink to="/sign_in">Sign In</NavLink>
          </button>
          <button className=" text-lg border-radius border-2 text-white bg-[#002366] w-[149px] h-[49px]">
            <NavLink to="/sign_up">Get Started</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
