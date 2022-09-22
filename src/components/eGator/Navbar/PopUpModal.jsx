import React from 'react';

function PopUpModal({ visiblePopUp, onClosePopUp }) {

    if (!visiblePopUp) return null;
    return (

        <div className='fixed lg:top-[80px] lg:left-[30%] shadow-md rounded-[10px] bg-white  z-50
         flex justify-center items-center'>
            <div className=" lg:w-[300px] p-5 lg:h-[276px] text-center w-[200px] h-[180px] rounded-lg ">
                <div className="lg:w-[144px] lg:my-[45px] my-[20px]  lg:h-[148px] space-y-[10px] lg:space-y-[32px] m-auto">
                    <a className='block hover:text-[#6772E5] hover:font-bold' href='https://biopay.egator.co/' >For Merchant</a>
                    <a className='block hover:text-[#6772E5] hover:font-bold' href='https://expense.egator.co/' >For Corporate</a>
                    <a className=' block hover:text-[#6772E5] hover:font-bold' href='https://biopay.egator.co/' >For Developer</a>

                </div>


            </div>
        </div>
    );
}

export default PopUpModal;