"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/header/logo.png";
import { motion } from "framer-motion";
import { FaRegMoon, FaRegSun, FaPaperPlane, FaLink } from "react-icons/fa";
import classNames from "classnames";
import "../components/SliderCarousel/Slider.css";

import SlideImageOne from "../../public/header/phone-1.png";
import SlideImageTwo from "../../public/header/notebook-1.png";

import {
  FaInstagram,
  FaFacebook,
  FaSkype,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Card1 from "../../public/cards/img-1.png";
import Card2 from "../../public/cards/img-2.png";
import Card3 from "../../public/cards/img-3.png";
import Card4 from "../../public/cards/img-4.png";
import Card5 from "../../public/cards/img-5.png";
import Card6 from "../../public/cards/img-6.png";

import About from "../../public/cards/about.jpg";
import DiamondIcon from "../../public/cards/diamond.png";
import MissionIcon from "../../public/cards/mission.png";
import { MdEmail, MdPhone } from "react-icons/md";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMarkerRef,
  Marker,
} from "@vis.gl/react-google-maps";
import { InputForm } from "@/components/InputForm";
import MapComponent from "@/components/Map";

const icons = [
  { src: FaInstagram },
  { src: FaFacebook },
  { src: FaSkype },
  { src: FaLinkedinIn },
  { src: FaTwitter },
];

const fields = [
  { label: "nome" },
  { label: "email" },
  { label: "telefone" },
  { label: "cidade" },
  { label: "estado" },
  { label: "titulo" },
  { label: "mensagem" },
];

const cards = [
  {
    id: 1,
    src: Card5,
    title: "Telegestão",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
  {
    id: 2,
    src: Card4,
    title: "Automação",
    text: "A automação, aliada a Internet das Coisas permite conectar dispositivos e automatizar processos de forma rápida e segura.",
  },
  {
    id: 3,
    src: Card2,
    title: "Cidades Inteligentes",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 4,
    src: Card3,
    title: "Iluminação Pública",
    text: "A Iluminação Pública Inteligente utiliza sensores conectados que melhoram a eficiência energética e diminuem o consumo, reduzindo assim os gastos.",
  },
  {
    id: 5,
    src: Card1,
    title: "Internet das Coisas",
    text: "A Internet das Coisas (IoT) revolucionou a maneira como lidamos com o cotidiano. Dispositivos conectados reunem e transmitem dados de itens usados no dia a dia.",
  },
  {
    id: 6,
    src: Card6,
    title: "Sensores Inteligentes",
    text: "Utilizamos sensores em conjunto com a Internet das Coisas para tornar mais eficaz a forma como lidamos com os dados captados.",
  },
];

export default function Home() {
  const [sendEmail, setSendEmail] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyCFkh_qWb43L2hFec0g-DcxvEUwDL0tSDE">
      <body className="w-full h-screen  bg-dark-0 overflow-hidden">
        <header
          className="bg-dark-0 w-full h-[calc(20vh)] "
          // style={{
          //   backgroundImage: "url(/header/bg-header-1.svg)",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <div className=" w-full py-2 flex flex-row justify-center gap-16 bg-blue-600">
            <div className="flex flex-row items-center text-zinc-50">
              <MdEmail className="w-6 h-6 mr-2 " />
              <p className="text-base">inforpratica@inforpratica.com.br</p>
            </div>
            <div className="flex flex-row items-center text-zinc-50">
              <MdPhone className="w-6 h-6 mr-2 " />
              <p className="text-base">(35) 99852-1588</p>
            </div>
          </div>

          <div className="bg-transparent flex justify-evenly items-center py-12">
            <Image className="w-32" alt="logo" src={LogoImage} />
            <nav className="space-x-16 text-dark-300 text font-bold">
              <Link href="/" className="text-dark-900">
                Home
              </Link>
              <Link href="/">Sobre Nós</Link>
              <Link href="/">Serviços</Link>
              <Link href="/">Soluções</Link>
              <Link href="/">Contas</Link>
            </nav>

            <div className="flex space-x-8 items-center">
              <button className="bg-dark-900 border-none w-16 space-x-2 h-8 rounded-full flex items-center justify-center">
                <FaRegMoon />
                <FaRegSun className="w-3" />
              </button>
              <div className="border-dark-200 border-2 border-solid w-32 h-12 rounded-full flex items-center justify-center">
                <Link href={"/"} className="text-dark-400">
                  Contrate-nos
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full overflow-hidden bg-dark-0  ">
          {/*  */}
          <section className="grid grid-cols-[10vw_40vw_40vw_10vw] h-[calc(80vh)] ">
            <div className="gap-0 col-start-2 flex">
              <div className=" grid grid-rows-[10%_90%]">
                <div className="row-start-2 gap-8 flex flex-col ">
                  <div className="text-dark-900 font-bold text-7xl ">
                    <h1 className="">Soluções Tech </h1>
                    <h1>Sob Medida Para</h1>
                    <h1 className="text-blue-600 ">Você</h1>
                  </div>

                  <p className="text-dark-400">
                    Oferecemos soluções em tecnologia com foco em Internet das
                    Coisas & Cidades Inteligentes. Entre em contato e saiba
                    mais!
                  </p>

                  <button
                    onClick={() => setSendEmail((state) => !state)}
                    className={classNames(
                      "hover:bg-blue-500 hover:border-blue-500 self-start border-2 py-4 duration-500 overflow-hidden  pr-16 relative text-dark-1000 flex items-center gap-4 rounded-full bg-blue-600 border-blue-600",
                      {
                        "pr-[calc(25vw)]": sendEmail,
                      }
                    )}
                  >
                    <span className="pl-4 text-dark-0 font-bold ">
                      Contrate-nos
                    </span>
                    <div className={classNames("", {})}>
                      <input
                        onClick={() => setSendEmail(false)}
                        placeholder="Digite seu E-mail"
                        className={classNames(
                          "flex rounded-full duration-500 absolute self-center top-3 pr-44 outline-none pl-4 py-1 transition-all",
                          {
                            "pr-0 opacity-0": !sendEmail,
                            "pr-44 opacity-100 z-50": sendEmail,
                          }
                        )}
                      />
                    </div>
                    <i
                      className="text-dark-1000 right-2 w-12 h-12 flex items-center justify-center
                absolute rounded-full bg-dark-0"
                    >
                      <FaPaperPlane className="self-center h-8 w-6 mr-1" />
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col   ">
              <div
                className="flex flex-col gap-4 w-full 
              h-full items-center text-dark-900 duration-100 justify-center"
              >
                <div
                  className="  items-start justify-end 
            w-full flex flex-row h-full  relative"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                    className="w-min h-min justify-end flex items-start  
               absolute "
                  >
                    <Image
                      src={SlideImageTwo}
                      alt={"notebook-image"}
                      className={classNames(
                        "object-cover w-[calc(20vw)] h-[calc(30vh)] absolute z-20  right-[calc(15vw)] bottom-0"
                      )}
                    />
                    <div className="-violet-500  w-[calc(40vw)] h-min relative flex justify-end z-10">
                      <Image
                        src={SlideImageOne}
                        alt={"phone-image"}
                        className={classNames("w-[calc(35vw)] h-min")}
                      />
                    </div>
                    <div
                      className="
                   text-center w-full absolute self-center bottom-0 z-10
                text-dark-900 text-lg"
                    >
                      <p>
                        Do desktop ao seu bolso, nossa tecnologia te acompanha.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* <SliderCarousel /> */}
            </div>
          </section>
          {/*  */}

          <section className="grid grid-cols-[10vw_40vw_50vw] h-[calc(100vh)] items-center justify-center">
            <div className="col-start-2  ">
              <div className="col-start-2 grid ">
                <div className=" gap-8 flex flex-col ">
                  <div
                    className="bg-blue-600 w-96 h-[calc(50vh)] relative"
                    // style={{
                    //   backgroundImage: "url(/header/bg-header-1.svg)",
                    //   backgroundSize: "cover",
                    //   backgroundPosition: "center",
                    // }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      className="w-96 h-full absolute flex -right-36 -bottom-36"
                    >
                      <Image
                        src={About}
                        alt={"logo-header"}
                        className={classNames("object-cover  w-full h-full")}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="  flex flex-col text-dark-900  
          h-[calc(50vh)] w-[calc(40vw)] gap-y-10 "
            >
              {/*  */}
              <div className="flex flex-col  gap-y-24">
                <div className="text-4xl font-bold flex gap-x-1 ">
                  <h2 className="">Inovando Juntos -</h2>
                  <h2 className=""> Nossa Identidade</h2>
                </div>
                <div className="w-f text-xl x">
                  <p>
                    Somos uma empresa de tecnologia com foco em Inteligência das
                    Coisas (IoT) e Cidades Conectadas. Oferecemos soluções que
                    elevam a qualidade de vida das pessoas, com inovação e
                    tecnologia de ponta.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-y-10">
                <div className="w-full flex flex-row gap-x-10">
                  <div className="w-28 h-16  ">
                    <Image
                      src={MissionIcon}
                      alt={"mission-icon"}
                      className={classNames("object-cover w-full  ")}
                    />
                  </div>

                  <div className="flex flex-col gap-y-8">
                    <h2 className="text-xl font-semibold">NOSSA MISSÃO</h2>
                    <p>
                      Estamos comprometidos em oferecer soluções inovadoras para
                      toda a população, como foco nas necessidades das pessoas.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-row gap-x-10">
                  <div className="w-28 h-16  ">
                    <Image
                      src={DiamondIcon}
                      alt={"diamond-icon"}
                      className={classNames("object-cover w-full  ")}
                    />
                  </div>

                  <div className="flex flex-col gap-y-8">
                    <h2 className="text-xl font-semibold">NOSSOS VALORES</h2>
                    <p>
                      Com ajuda de pessoas comprometidas, nossos valores
                      expressam tudo aquilo que acreditamos e representam tudo o
                      que fazemos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="flex flex-col gap-y-24">
            <h2 className="text-center text-4xl text-dark-900 font-bold">
              Nossos Serviços
            </h2>
            <section
              className="flex h-full
          items-center justify-start "
              style={{
                backgroundImage: "url(/header/bg-card-4.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className=" flex w-full h-full text-dark-900
             flex-col items-center justify-end  "
              >
                <div className="  p-8 rounded-3xl">
                  <div className="flex flex-row gap-x-28 ">
                    {cards.slice(0, 3).map((card) => {
                      return (
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                          key={card.id}
                          className="w-96 h-64 relative flex "
                        >
                          <Image
                            src={card.src}
                            alt={"logo-header"}
                            className={classNames(
                              "object-cover w-20 h-20 rounded-2xl "
                            )}
                          />
                          <div className="ml-8 flex flex-col gap-y-2 text-dark-900">
                            <h6 className="text-3xl font-semibold ">
                              {card.title}
                            </h6>
                            <p className="text-left">{card.text}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex flex-row gap-x-28 ">
                    {cards.slice(3, 7).map((card) => {
                      return (
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                          key={card.id}
                          className="w-96 h-64 relative flex "
                        >
                          <Image
                            src={card.src}
                            alt={"logo-header"}
                            className={classNames(
                              "object-cover w-20 h-20 rounded-2xl "
                            )}
                          />
                          <div className="ml-8 flex flex-col gap-y-2 text-dark-900">
                            <h6 className="text-3xl font-semibold ">
                              {card.title}
                            </h6>
                            <p className="text-left">{card.text}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </section> */}

          <section
            className="flex flex-col  h-[calc(100vh)]"
            style={{
              backgroundImage: "url(/header/bg-footer-2.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <section
              className="flex flex-col
          items-center justify-start bg-transparent"
            >
              <div
                className=" h-[calc(55vh)] 
                grid grid-cols-[10vw_50vw_30vw_10vw] bg-red-200"
              >
                <div className="bg-dark-100 w-full h-full flex col-start-2  border-black">
                  <MapComponent />
                </div>

                <div className="bg-red-500 w-96 h-full flex p-4 col-start-3 flex-col gap-y-6 border-black">
                  {fields.map((field) => (
                    <InputForm key={field} field={field} />
                  ))}
                </div>
              </div>

              <div
                className="grid grid-cols-[10vw_80vw_10vw] grid-rows-1 w-full flex-col h-[calc(45vh)]
               text-dark-0 items-end justify-end"
              >
                <div
                  className="col-start-2  w-full h-[calc(25vh)]
                flex items-end justify-between"
                >
                  <div
                    className="w-80  h-full flex text-left flex-col
                   items-center  justify-between py-6"
                  >
                    <p className="w-full font-semibold text-4xl">TSI IP</p>
                    <div>
                      <p className="w-full text-lg flex items-end gap-x-2  text-start">
                        <FaMapMarkerAlt className="w-6 h-6  " />
                        Pouso Alegre
                      </p>
                      <p className="w-full text-lg">
                        <span className="ml-8"></span>Minas Gerais, Brasil
                      </p>
                      <p className="w-full text-lg flex items-end gap-x-2  text-start">
                        <MdPhone className="w-6 h-6  " />
                        Telefone: (35) 99852-1588
                      </p>
                      <p className="w-full text-lg flex items-end gap-x-2  text-start">
                        <MdEmail className="w-6 h-6  " />
                        laerciosasso@infoprratica.com.br
                      </p>
                    </div>
                  </div>
                  <div className="w-80 h-16 flex justify-between items-center gap-x-2">
                    {icons.map((icon, i) => {
                      const Icon = icon.src;
                      return (
                        <button
                          className=" bg-blue-400 rounded-2xl flex items-center justify-center h-12 w-12
                          hover:bg-blue-500 hover:scale-110 transition-all"
                          key={i}
                        >
                          <Icon className=" h-8 w-8" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className=" col-start-2 w-full h-12 flex items-center justify-center ">
                  <p>© Copyright TSI IP. Todos os direitos reservados</p>
                </div>
              </div>
            </section>
          </section>
        </main>
      </body>
    </APIProvider>
  );
}
