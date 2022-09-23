import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function SupportContact(props) {
  return (
    <div className="bg-[#6772E5] ">
      <div className=" w-[88.8%]  m-auto lg:flex lg:space-y-0 space-y-[44px] justify-between py-[83px] lg:py-[176px]">
        <div className=" bg-white lg:w-[47%] m-auto w-[322px] rounded-[5px] lg:rounded-lg lg:h-[421px] ">
          <div className=" lg:w-[80%] w-[240px] m-auto py-[47px] lg:py-[95px]">
            <p className="font-bold lg:text-[38px] text-[19px] ">
              General Support
            </p>
            <p className="lg:py-[48px] py-[24px] lg:text-[20px] text-[10px]">
              Do you have general enquiries or need support? Please send us a
              quick email.
            </p>
            <p className="lg:text-[16px] text-[8px]">Support: support@egator.co</p>
            <a href='mailto:support@egator.co' target="_blank" rel="noreferrer" className="flex font-bold space-x-[10px] lg:space-x-[20px] text-[12px] lg:text-[24px] items-center text-[#6772E5]">
              <p>Contact Support </p>
              <span className="inline-block ">
                <MdKeyboardArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div className=" bg-white m-auto lg:w-[47%] w-[322px] rounded-[5px] lg:rounded-lg lg:h-[421px] ">
          <div className=" lg:w-[80%] w-[240px] m-auto py-[47px] lg:py-[95px]">
            <p className="font-bold lg:text-[38px] text-[19px] ">
              Contact Sales
            </p>
            <p className="lg:py-[48px] py-[24px] lg:text-[20px] text-[10px]">
              
              We look forward to working with you to build the next big thing.
            </p>
            <p className="lg:text-[16px] text-[8px]">Sales: concierge@egator.co</p>
            <a href='mailto:concierge@egator.co' target="_blank" rel="noreferrer" className="flex font-bold space-x-[10px] lg:space-x-[20px] text-[12px] lg:text-[24px] items-center text-[#6772E5]">
              <p>Contact Sales </p>
              <span className="inline-block ">
                <MdKeyboardArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportContact;
