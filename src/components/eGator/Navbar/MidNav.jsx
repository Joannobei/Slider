import React, { useState } from "react";
import { Logo } from "../../../assets";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerNav from "./DrawerNav";

const MidNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="set-position bg-white">
      <div className=" xl:hidden pt-10 flex justify-between items-center px-5 pb-10 ">
        <NavLink className="" to="/">
          <img src={Logo} alt="eGator_Logo" className="w-28" />
        </NavLink>

        <div>
          {toggle ? (
            <GrClose onClick={handleClick} />
          ) : (
            <GiHamburgerMenu onClick={handleClick} />
          )}
        </div>
      </div>

      <div>
        {toggle && (
          <div className="flex flex-col justify-end">
            <DrawerNav />
          </div>
        )}
      </div>
    </div>
  );
};

export default MidNav;
