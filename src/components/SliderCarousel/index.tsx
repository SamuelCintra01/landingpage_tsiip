"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SlideImageOne from "../../../public/header/iot-logo.png";
import SlideImageTwo from "../../../public/slide/slide-2.jpg";
import SlideImageThree from "../../../public/slide/slide-3.jpg";
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
const dataImages = [
  {
    id: 1,
    src: SlideImageOne,
    title: "Cidades Inteligentes",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  // {
  //   id: 2,
  //   src: SlideImageTwo,
  //   title: "Iluminação Pública",
  //   alt: "slide-image-2",
  //   text: "A Iluminação Pública Inteligente utiliza sensores conectados que melhoram a eficiência energética e diminuem o consumo, reduzindo assim os gastos.",
  // },
  // {
  //   id: 3,
  //   src: SlideImageThree,
  //   title: "Automoção",
  //   alt: "slide-image-3",
  //   text: "A automação, aliada a Internet das Coisas permite conectar dispositivos e automatizar processos de forma rápida e segura",
  // },
];

export function SliderCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Começando do segundo slide visível

  const handleSlideChange = (swiper: any) => {
    const { realIndex } = swiper;
    setActiveIndex(realIndex);
  };

  return (
    <Swiper
      slidesPerView={3}
      modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
      effect="coverflow"
      grabCursor={true}
      spaceBetween={60}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      speed={500}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 250,
        depth: 80,
        modifier: 2.5,
        slideShadows: false,
      }}
      autoplay={{
        delay: 3000, // Defina o intervalo de tempo entre os slides (em milissegundos)
        disableOnInteraction: false,

        // Permite que a reprodução automática continue mesmo quando o usuário interage com o slider
      }}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
    >
      {dataImages.map((item, index) => (
        <SwiperSlide key={item.id} className=" w-full h-full">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            className="flex flex-col gap-4 w-[calc(40vw)] h-[calc(50vh)] items-center text-dark-900 duration-100 justify-center "
          >
            <div className=" items-center w-[calc(40vw)]  h-full ">
              <Image
                src={item.src}
                onClick={() => console.log(activeIndex === index)}
                alt={item.alt}
                className={classNames("w-full h-full self-center rounded-md", {
                  // invert: item.id !== 1 && item.id !== 5,
                })}
              />
            </div>
            <span className=" font-bold text-lg">{item.title}</span>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// const dataImages = [
//   {
//     id: 1,
//     src: EarthIcon,
//     title: "Cidades Inteligentes",
//     alt: "slide-image-1",
//     text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
//   },
//   {
//     id: 2,
//     src: BulbIcon,
//     title: "Iluminação Pública",
//     alt: "slide-image-2",
//     text: "A Iluminação Pública Inteligente utiliza sensores conectados que melhoram a eficiência energética e diminuem o consumo, reduzindo assim os gastos.",
//   },
//   {
//     id: 3,
//     src: AutomationIcon,
//     title: "Automoção",
//     alt: "slide-image-3",
//     text: "A automação, aliada a Internet das Coisas permite conectar dispositivos e automatizar processos de forma rápida e segura",
//   },
//   {
//     id: 4,
//     src: SensorIcon,
//     title: "Sensores Inteligentes",
//     alt: "slide-image-4",
//     text: "Utilizamos sensores em conjunto com a Internet das Coisas para tornar mais eficaz a forma como lidamos com os dados captados.",
//   },
//   {
//     id: 5,
//     src: ComputerIcon,
//     title: "Internet Das Coisas",
//     alt: "slide-image-5",
//     text: "A Internet das Coisas (IoT) revolucionou a maneira como lidamos com o cotidiano. Dispositivos conectados reunem e transmitem dados de itens usados no dia a dia.",
//   },
//   {
//     id: 6,
//     src: IlluminationIcon,
//     title: "Telegestão",
//     alt: "slide-image-6",
//     text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
//   },
// ];
