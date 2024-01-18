"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";

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
import classNames from "classnames";

export function SliderCarousel({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    const { realIndex } = swiper;
    setActiveIndex(realIndex);
  };
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const swiperRef = useRef<any>();

  return (
    <article className="">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        direction="horizontal"
        modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        spaceBetween={100}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        initialSlide={1}
        speed={500}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          depth: 0,
          stretch: 4,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
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
              className="w-80 h-80  mb-12 bg-transparent
                  flex flex-col rounded-lg text-dark-1000 shadow-xl hover:shadow-2xl"
            >
              <div
                className="bg-dark-0 w-80 h-80 opacity-30 absolute 
              hover:bg-transparent transition-all duration-500 rounded-lg"
              />
              <Image
                src={item.src}
                onClick={() => console.log(activeIndex === index)}
                alt={item.alt}
                className={classNames("w-80 h-80 rounded-lg", {})}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
