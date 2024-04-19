"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../../public/Slider-01.webp";
import Slider2 from "../../../../public/slider-02.webp";

import Slider3 from "../../../../public/Slider-03.webp";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "../button/page";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider1}
              // style={{width:'100%',height:'500px'}}
              className="slider_img"
            />
        
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider2}
              // className="w-full h-screen object-cover object-center"
              className="slider_img"
            />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider3}
              // className="w-full h-screen object-cover object-center"
              className="slider_img"
              
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
