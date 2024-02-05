"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";

import "./Slider.css";

export function SliderCarousel({ data, security = false }: any) {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<any>();

  const handleSlideChange = (swiper: any) => {
    const { realIndex } = swiper;
    setActiveIndex(realIndex);
  };
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Swiper
      className=" w-[calc(80vw)] xl:w-[calc(80vw)] 2xl:w-[calc(70vw)] "
      ref={swiperRef}
      slidesPerView={1}
      breakpoints={{
        690: {
          slidesPerView: 2,
          spaceBetween: 25,
        },

        940: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      direction="horizontal"
      modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
      // effect="coverflow"
      grabCursor={true}
      spaceBetween={-100}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      initialSlide={1}
      speed={1000}
      loop={true}
      // coverflowEffect={{
      //   rotate: 0,
      //   depth: 0,
      //   stretch: 8,
      //   modifier: 20,
      //   slideShadows: false,
      // }}
      autoplay={{
        delay: security ? 4000 : 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
    >
      {data.map((item: any, index: any) => (
        <SwiperSlide key={item.id} className="" style={{ width: "100%" }}>
          <motion.div
            whileHover={{
              scale: 0.95,
              transition: { duration: 0.5 },
            }}
            className=" w-full h-fw-full x items-center justify-center 
                  flex flex-col rounded-lg text-black-1000 "
          >
            {/* <div
                className="w-80 h-80 absolute 
               transition-all duration-500 rounded-lg"
              /> */}
            <span className="text-center md:text-base text-lg font-semibold border-b-2 mb-4  border-blue-600">
              {item.title}
            </span>
            <Image
              src={item.src}
              width={500}
              height={500}
              onClick={() => console.log(activeIndex === index)}
              alt={item.alt}
              className={classNames(
                "w-full h-72 xl:w-72 xl:h-72 rounded-lg ",
                {}
              )}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
