import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Logo } from "../../../assets";
import MidNav from "./MidNav";
import { navList } from "./navList";
import PopUpModal from "./PopUpModal";

const Navbar = () => {

  const [showMyPopUp, setShowMyPopUp] = useState(false);
  const handleOnClosePopUp = () => setShowMyPopUp(false);
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="">
      <div className="fixed top-0 right-0 left-0 pb-10 bg-white shadow-md ">
        <nav className="hidden xl:block max-w-[1440px] w-[1300px] m-auto">
          <div className="flex justify-between pt-10">
            <div className=" flex items-center">
              <NavLink to="/">
                <img src={Logo} alt="eGator_Logo" className="w-28" />
              </NavLink>
            </div>

            <div className="flex w-[330px] m-auto justify-between">
              <div className="">
                <NavLink to='#'
                  className="text-gray-800 peer text-sm flex items-center">
                  Products <span className="inline-block text-[20px] "><RiArrowDropDownLine /></span>
                </NavLink>
                <PopUpModal />
              </div>



              <NavLink to='#'

                className="text-gray-800 text-sm">
                Developers
              </NavLink>

              <NavLink to='/support'

                className="text-gray-800 text-sm">
                Support
              </NavLink>


            </div>

            <button
              type="button"
              className=" text-sm rounded-md text-white bg-[#6772E5] w-[149px] h-[49px]"
            >
              <a href='https://form.jotform.com/222555797602564' >Get Started</a>
            </button>
          </div>
        </nav>
      </div>

      <MidNav />
    </div>
  );
};

export default Navbar;
