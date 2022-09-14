import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../assets";
import MidNav from "./MidNav";
import { navList } from "./navList";

const Navbar = () => {
  return (
    <div className="">
      <div className="fixed top-0 right-0 left-0 pb-10 bg-white ">
        <nav className="hidden xl:block max-w-[1440px] w-[1300px] m-auto">
          <div className="flex justify-between pt-10">
            <div className=" flex items-center">
              <NavLink to="/">
                <img src={Logo} alt="eGator_Logo" className="w-28" />
              </NavLink>
            </div>

            <div className="flex w-[484px] m-auto justify-between">
              {navList.map((item) => (
                <div key={item.id} className="flex items-center ">
                  <NavLink to={item.path} onClick={() => window.scrollTo(0, 0)} className="text-gray-800 text-sm">
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>

            <button
              type="button"
              className=" text-sm rounded-md text-white bg-[#6772E5] w-[149px] h-[49px]"
            >
              <NavLink to="/sign_up">Get Started</NavLink>
            </button>
          </div>
        </nav>
      </div>
      <MidNav />
    </div>
  );
};

export default Navbar;
