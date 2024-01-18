import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesCarousel({ data }: any) {
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
    <article className="relative ">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        direction="horizontal"
        modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        spaceBetween={60}
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
          <SwiperSlide key={item.id}>
            <motion.div
              whileHover={{
                transition: { duration: 0.5 },
              }}
              className="w-[calc(20vw)] px-10 py-12 h-96 bg-dark-0 z-50 mb-12
                  flex flex-col gap-y-6 rounded-lg text-dark-1000 shadow-xl"
            >
              <div className="w-max h-max rounded-xl">
                <Image
                  alt="img"
                  className="w-16 h-16 object-contain"
                  src={item.src}
                />
              </div>

              <div className="max-w-max text-xl py-1 font-semibold border-b-2 border-blue-600">
                <h6 className="">{item.title}</h6>
              </div>

              <div className="w-full h-44">
                <p className="text-lg italic ">{item.text}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação personalizados */}
      <div className=" w-full h-[calc(50vh)] top-0 absolute ">
        <div className=" w-[calc(20vw)] pr-6  flex items-end justify-center h-full">
          <button
            onClick={goNext}
            className=" w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 
        left-0 z-50 bottom-0"
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </article>
  );
}
