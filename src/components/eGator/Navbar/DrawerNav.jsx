import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri'
import PopUpModal from "./PopUpModal";


import "./Navbar.css";
import { navList } from "./navList";

const DrawerNav = () => {
  const [showMyPopUp, setShowMyPopUp] = useState(false);
  const handleOnClosePopUp = () => setShowMyPopUp(false);
  return (
    <div className=" border-2 lg:hidden block">
      <div className="flex flex-col justify-between items-center sm:w-80 w-72 h-[524px] absolute right-0 left-32 m-auto z-10 py-10 px-8 mr-5 bg-white border-2 ">
        <div className="flex flex-col justify-between h-[200px]">
          <div className="">
            <NavLink to='#'
              onClick={() => setShowMyPopUp(!showMyPopUp)}
              className="text-gray-800 text-sm flex items-center">
              Products <span className="inline-block text-[20px] "><RiArrowDropDownLine /></span>
            </NavLink>
            <PopUpModal visiblePopUp={showMyPopUp} onClosePopUp={handleOnClosePopUp} />
          </div>



          <NavLink to='#'

            className="text-gray-800 text-sm">
            Developers
          </NavLink>

          <NavLink to='/support'

            className="text-gray-800 text-sm">
            Support
          </NavLink>

          <button className=" text-sm rounded-lg text-white bg-[#6772E5] lg:w-[149px] w-[169px] lg:h-[49px] h-[50px]">
        <NavLink to="/sign_up">Get Started</NavLink>
      </button>
        </div>
      </div>



      

    </div>
  );
};

export default DrawerNav;
