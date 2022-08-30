import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import MidNav from "./MidNav";
import { navList } from "./navList";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 bg-white pb-5 ">
        <nav className="hidden xl:block max-w-[1440px] w-[1220px] m-auto ">
          <div className="flex justify-between pt-10 ">
            <div className=" flex items-center ">
              <NavLink to="/">
                <img src={Logo} alt="eGator_Logo" className="w-28" />
              </NavLink>
            </div>

            <div className='flex w-[484px] m-auto justify-between'>
            {navList.map((item) => (
              
                <div key={item.id} className="flex items-center ">
                  <NavLink to={item.path} className="text-gray-800 text-sm">
                    {item.name}
                  </NavLink>
                </div>
              
            ))}

            </div>

            <div className="flex w-[323px] justify-between items-center">
              <button type="button" className=" text-sm border-radius border-[#002366] border-2 w-[149px] h-[49px]">
                <NavLink to="/sign_in">Sign In</NavLink>
              </button>
              <button
                type="button"
                className=" text-sm border-radius text-white bg-[#002366] w-[149px] h-[49px]"
              >
                <NavLink to="/sign_up">Get Started</NavLink>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <MidNav />
    </div>
  );
};

export default Navbar;
