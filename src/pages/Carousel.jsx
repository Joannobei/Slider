import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className="bg-[#000D83] flex justify-center items-center h-screen ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>


          <div className="lg:w-[530px] w-[343px] m-auto h-[277px] lg:h-[318px] bg-white py-[30px] lg:py-[54px] px-[40px] lg:px-[58px] shadow rounded-md">

            <p>Wow! I never believed I could get such a fast response from any health care centre. TeleSpital is simply the best.</p>
            <div className="lg:mt-[48px] mt-[20px] space-x-3 lg:space-x-0  flex justify-between  ">

              <img className="rounded-full  w-[70px] h-[70px] "
                src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                alt="" />


              <body className=" lg:space-y-2 w-[320px]  ">
                <p className="text-[18px] font-medium leading-[28px] text-[#000D83]">Mary Aderibigbe</p>
                <p>Enterpreneur</p>
              </body>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[530px] w-[343px] m-auto h-[277px] lg:h-[318px] bg-white py-[30px] lg:py-[54px] px-[40px] lg:px-[58px] shadow rounded-md">

            <p>Wow! I never believed I could get such a fast response from any health care centre. TeleSpital is simply the best.</p>
            <div className="lg:mt-[48px] mt-[20px] space-x-3 lg:space-x-0  flex justify-between  ">

              <img className="rounded-full  w-[70px] h-[70px] "
                src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                alt="" />


              <body className=" lg:space-y-2 w-[320px]  ">
                <p className="text-[18px] font-medium leading-[28px] text-[#000D83]">Mary Aderibigbe</p>
                <p>Enterpreneur</p>
              </body>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[530px] w-[343px] m-auto h-[277px] lg:h-[318px] bg-white py-[30px] lg:py-[54px] px-[40px] lg:px-[58px] shadow rounded-md">

            <p>Wow! I never believed I could get such a fast response from any health care centre. TeleSpital is simply the best.</p>
            <div className="lg:mt-[48px] mt-[20px] space-x-3 lg:space-x-0  flex justify-between  ">

              <img className="rounded-full  w-[70px] h-[70px] "
                src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                alt="" />


              <body className=" lg:space-y-2 w-[320px]  ">
                <p className="text-[18px] font-medium leading-[28px] text-[#000D83]">Mary Aderibigbe</p>
                <p>Enterpreneur</p>
              </body>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}