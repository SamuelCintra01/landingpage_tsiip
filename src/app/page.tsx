"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/header/logo.png";
import { motion } from "framer-motion";
import classNames from "classnames";
import "../components/SliderCarousel/Slider.css";

import ScheduleIcon from "../../public/img/schedule-icon.png";
import ChoiceIcon from "../../public/img/choice-icon.png";
import QualityIcon from "../../public/img/quality-icon.png";
import DesignIcon from "../../public/img/design-icon.png";

import {
  FaInstagram,
  FaFacebookF,
  FaSkype,
  FaLinkedinIn,
  FaTwitter,
  FaRegMoon,
  FaRegSun,
  FaPaperPlane,
  FaRegUser,
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

import { MdOutlineMail, MdOutlineChat } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BsBuilding, BsClockHistory } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { LiaWindowCloseSolid } from "react-icons/lia";

import { APIProvider } from "@vis.gl/react-google-maps";
import { InputForm } from "@/components/InputForm";
import { SliderCarousel } from "@/components/SliderCarousel";

import "../app/globals.css";

const aboutItens = [
  {
    title: "Excelente Design",
    src: DesignIcon,
    alt: "design-icon",
    text: " Softwares com design intuitivo e moderno, proporcionando uma experiência visualmente atraente.",
  },
  {
    title: "Melhor Qualidade",
    src: QualityIcon,
    alt: "quality-icon",
    text: "Soluções robustas e confiáveis, garantindo um desempenho de alta qualidade para seu negócio.",
  },
  {
    title: "Escolha Ideal",
    src: ChoiceIcon,
    alt: "choice-icon",
    text: "Variedade de opções para atender precisamente às necessidades do seu negócio, oferecendo a escolha perfeita.",
  },
  {
    title: "Economia de Tempo",
    src: ScheduleIcon,
    alt: "schedule-icon",
    text: "Otimização de processos para poupar seu tempo, com funcionalidades eficientes e intuitivas, simplificando suas operações.",
  },
];

const icons = [
  { src: FaInstagram },
  { src: FaFacebookF },
  { src: FaSkype },
  { src: FaLinkedinIn },
  { src: FaTwitter },
];

const cards = [
  {
    id: 1,
    src: "/img/img-1.png",
    title: "Telegestão",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
  {
    id: 2,
    src: "/img/img-2.png",
    title: "Automação",
    text: "A automação, aliada a Internet das Coisas permite conectar dispositivos e automatizar processos de forma rápida e segura.",
  },
  {
    id: 3,
    src: "/img/img-3.png",
    title: "Cidades Inteligentes",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 4,
    src: "/img/img-4.png",
    title: "Iluminação Pública",
    text: "A Iluminação Pública Inteligente utiliza sensores conectados que melhoram a eficiência energética e diminuem o consumo, reduzindo assim os gastos.",
  },
  {
    id: 5,
    src: "/img/img-5.png",
    title: "Internet das Coisas",
    text: "A Internet das Coisas (IoT) revolucionou a maneira como lidamos com o cotidiano. Dispositivos conectados reunem e transmitem dados de itens usados no dia a dia.",
  },
  {
    id: 6,
    src: "/img/img-6.png",
    title: "Sensores Inteligentes",
    text: "Utilizamos sensores em conjunto com a Internet das Coisas para tornar mais eficaz a forma como lidamos com os dados captados.",
  },
];

const imgSegurança = [
  {
    id: 1,
    src: "/cards/smart-lighting.jpg",
    title: "Iluminação Pública Inteligente",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 2,
    src: "/cards/vehicle-plate.jpg",
    title: "Reconhecimento de Placas",
    alt: "slide-image-2",
    text: "A Iluminação Pública Inteligente utiliza sensores conectados que melhoram a eficiência energética e diminuem o consumo, reduzindo assim os gastos.",
    icon: "/img/facial.png",
  },
  {
    id: 3,
    src: "/cards/facial.jpg",
    title: "Reconhecimento Facial",
    alt: "slide-image-3",
    text: "A automação, aliada a Internet das Coisas permite conectar dispositivos e automatizar processos de forma rápida e segura",
  },
  {
    id: 4,
    src: "/cards/crown.jpg",
    title: "Detecção de Aglomerações",
    alt: "slide-image-4",
    text: "Utilizamos sensores em conjunto com a Internet das Coisas para tornar mais eficaz a forma como lidamos com os dados captados.",
  },
  {
    id: 5,
    src: "/cards/count-people.jpg",
    title: "Contagem de Pessoas",
    alt: "slide-image-5",
    text: "A Internet das Coisas (IoT) revolucionou a maneira como lidamos com o cotidiano. Dispositivos conectados reunem e transmitem dados de itens usados no dia a dia.",
  },
  {
    id: 6,
    src: "/cards/facial.jpg",
    title: "Detecção de Violência",
    alt: "slide-image-6",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
  {
    id: 7,
    src: "/cards/forense.jpg",
    title: "Busca forense",
    alt: "slide-image-6",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
  {
    id: 8,
    src: "/cards/fall.jpg",
    title: "Detecção de Queda",
    alt: "slide-image-6",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
];

const imgSustentabilidade = [
  {
    id: 1,
    src: "/cards/smart-bin.jpg",
    title: "Lixeiras Inteligentes",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 2,
    src: "/cards/fleet.jpg",
    title: "Gestão Inteligente de Frotas",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 3,
    src: "/cards/semaphore.jpg",
    title: "Semáforos Inteligentes",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 4,
    src: "/cards/chart.jpg",
    title: "Software de Gestão Ecológico",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
];

export default function Home() {
  const [sendEmail, setSendEmail] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [section, setSection] = useState("header-section");
  const [showMenu, setShowMenu] = useState(false);

  function handleSubmit() {
    console.log("MENSAGEM =>");
    console.log(name);
    console.log(email);
    console.log(message);
  }

  function scrollToSection(section: string, height: number) {
    const toSection = document.getElementById(section);
    const yOffset = height;
    const y = toSection?.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    return setSection(section);
  }

  return (
    <body
      id="header-section"
      className="w-full h-screen bg-dark-0 overflow-hidden relative"
    >
      <header className="bg-dark-0 fixed w-full z-40 shadow-md">
        <div className=" w-full py-2 flex-row justify-center gap-16 bg-blue-600 hidden md:flex">
          <div className="flex flex-row items-center text-zinc-50 text-base">
            <MdOutlineMail className="w-6 h-6 mr-2" />
            <p>inforpratica@inforpratica.com.br</p>
          </div>
          <div className="flex flex-row items-center text-zinc-50">
            <p>(35) 99852-1588</p>
          </div>
        </div>

        <nav className="bg-transparent w-full flex justify-between px-8 lg:px-0 lg:justify-evenly items-center py-4">
          <Image className="w-32" alt="logo" src={LogoImage} />
          <div className="space-x-16 text-dark-400 hidden lg:flex xl:flex">
            <button
              onClick={() => scrollToSection("header-section", 0)}
              className={classNames("", {
                "text-blue-600 font-bold": section === "header-section",
                "hover:text-dark-800": section !== "header-section",
              })}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about-section", -150)}
              className={classNames("", {
                "text-blue-600 font-bold": section === "about-section",
                "hover:text-dark-800": section !== "about-section",
              })}
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("services-section", -100)}
              className={classNames("", {
                "text-blue-600 font-bold": section === "services-section",
                "hover:text-dark-800": section !== "services-section",
              })}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("solutions-section", -150)}
              className={classNames("", {
                "text-blue-600 font-bold": section === "solutions-section",
                "hover:text-dark-800": section !== "solutions-section",
              })}
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("contact-section", -50)}
              className={classNames("", {
                "text-blue-600 font-bold": section === "contact-section",
                "hover:text-dark-800": section !== "contact-section",
              })}
            >
              Contato
            </button>
          </div>

          <div className="space-x-8 items-center hidden lg:flex xl:flex">
            <button className="hidden bg-dark-900 border-none w-16 space-x-2 h-8 rounded-full  items-center justify-center">
              <FaRegMoon />
              <FaRegSun className="w-3" />
            </button>
            <div className="border-dark-200 border-2 border-solid w-32 h-12 rounded-full flex items-center justify-center">
              <Link href={"/"} className="text-dark-400">
                Contrate-nos
              </Link>
            </div>
          </div>
          <button onClick={() => setShowMenu(true)}>
            <IoMenu className="text-dark-1000 w-8 h-8 flex lg:hidden xl:hidden" />
          </button>
        </nav>
      </header>
      {showMenu && (
        <div
          className={classNames(
            "bg-dark-1000 w-screen h-screen fixed z-50 opacity-50 lg:hidden",
            {
              flex: showMenu,
            }
          )}
          onClick={() => setShowMenu(false)}
        />
      )}

      <section
        className={`bg-dark-0 w-[calc(45vw)] sm:w-[calc(40vw)] md:w-[calc(30vw)] 
            h-screen fixed z-50 right-0 flex lg:hidden flex-col transition-transform duration-500  ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
      >
        <div className=" w-full flex items-center justify-center border-b-[calc(1px)]">
          <Image className="w-32" alt="logo" src={LogoImage} />
        </div>
        <div className=" w-full text-dark-1000 flex flex-col text-xl mt-6 ml-6 gap-y-4">
          <button
            onClick={() => {
              scrollToSection("header-section", 0);
              setShowMenu(false);
            }}
            className={classNames("text-left font-semibold", {
              "text-blue-600 font-bold ": section === "header-section",
              "hover:text-dark-800": section !== "header-section",
            })}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("about-section", -150);
              setShowMenu(false);
            }}
            className={classNames("text-left font-semibold", {
              "text-blue-600 font-bold": section === "about-section",
              "hover:text-dark-800": section !== "about-section",
            })}
          >
            Sobre Nós
          </button>
          <button
            onClick={() => {
              scrollToSection("services-section", -100);
              setShowMenu(false);
            }}
            className={classNames("text-left font-semibold", {
              "text-blue-600 font-bold": section === "services-section",
              "hover:text-dark-800": section !== "services-section",
            })}
          >
            Serviços
          </button>
          <button
            onClick={() => {
              scrollToSection("solutions-section", -150);
              setShowMenu(false);
            }}
            className={classNames("text-left font-semibold", {
              "text-blue-600 font-bold ": section === "solutions-section",
              "hover:text-dark-800": section !== "solutions-section",
            })}
          >
            Soluções
          </button>
          <button
            onClick={() => {
              scrollToSection("contact-section", -50);
              setShowMenu(false);
            }}
            className={classNames("text-left font-semibold", {
              "text-blue-600 font-bold": section === "contact-section",
              "hover:text-dark-800": section !== "contact-section",
            })}
          >
            Contato
          </button>
        </div>
      </section>

      <main className="w-full overflow-hidden bg-dark-0 ">
        {/*  HOME */}
        <section
          className="relative grid h-[calc(100vh)] md:h-[calc(80vh)] mt-32 md:mt-56 grid-cols-[10vw_80vw_10vw]
            grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-[10vw_20vw_60vw_10vw] lg:grid-cols-[10vw_40vw_40vw_10vw]"
        >
          <article
            className="h-auto w-[calc(80vw)] md:w-auto md:h-full gap-0 
            col-start-2 row-start-1 flex absolute z-20 items-start md:items-stretch"
          >
            <div className="grid md:grid-rows-[10%_90%] w-[calc(40vw)] md:w-[calc(55vw)]">
              <div className="row-start-2 gap-8 flex flex-col 400 w-[calc(80vw)] md:w-auto">
                <div className="text-dark-900 font-bold text-6xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  <h1>Soluções Tech </h1>
                  <h1>Sob Medida Para</h1>
                  <h1 className="text-blue-600">Você</h1>
                </div>
                <div className="hidden md:flex gap-8 flex-col">
                  <p className="text-dark-400 italic md:text-sm text-md lg:text-lg md:w-[calc(38vw)] lg:w-[calc(45vw)] ">
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
                    <div>
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
                    <i className="text-dark-1000 right-2 w-12 h-12 flex items-center justify-center absolute rounded-full bg-dark-0">
                      <FaPaperPlane className="self-center h-8 w-6 mr-1" />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article
            className="flex flex-col gap-4  h-full items-center
               text-dark-900 duration-100 justify-start md:absolute z-10 col-start-2
               w-[calc(80vw)] md:w-full row-start-2 md:row-start-1 md:col-start-3 right-[calc(10vw)]"
          >
            <div className="banner-size w-full h-full justify-end flex flex-col items-start md:pt-8 lg:mt-0 lg:items-start">
              <div className="w-full h-min relative flex justify-end">
                <Image
                  src={"/img/bg-home.png"}
                  width={1000}
                  height={1000}
                  alt={"notebook e celular"}
                  className="w-[calc(80vw)] md:w-[calc(50vw)] lg:w-[calc(45vw)] xl:w-[calc(40vw)] 2xl:w-[calc(35vw)] h-full"
                />
              </div>
              <div className="flex md:hidden gap-8 flex-col">
                <p className="text-dark-400 italic md:text-sm text-md lg:text-lg md:w-[calc(38vw)] lg:w-auto ">
                  Oferecemos soluções em tecnologia com foco em Internet das
                  Coisas & Cidades Inteligentes. Entre em contato e saiba mais!
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
                  <span className="pl-4 text-dark-0 font-bold">
                    Contrate-nos
                  </span>
                  <div>
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
                  <i className="text-dark-1000 right-2 w-12 h-12 flex items-center justify-center absolute rounded-full bg-dark-0">
                    <FaPaperPlane className="self-center h-8 w-6 mr-1" />
                  </i>
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* ABOUT US */}
        <section
          id="about-section"
          className="grid grid-cols-[10vw_80vw_10vw]
            grid-rows-[20vh_110vh] lg:grid-rows-[60vh_60vh] xl:grid-rows-[50vh_50vh] 
            h-[calc(130vh)] xl:h-[calc(100vh)] mb-64 sm:mb-36 lg:mb-56 gap-y-20 sm:gap-y-12 lg:gap-y-0"
        >
          <article className="col-start-2 w-full justify-start items-center h-full flex row-start-1">
            <div
              style={{
                backgroundImage: "url(/img/about-1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scaleX(-1)",
              }}
              className="justify-center items-center
                rounded-3xl rounded-br-[calc(10vw)] rounded-tl-[calc(10vw)]
                hidden lg:flex w-[calc(40vw)] h-full"
            />
            <div className="row-start-1 h-full flex justify-center items-center w-[calc(80vw)] lg:w-[calc(40vw)]">
              <div className="flex flex-col gap-y-8 text-dark-1000 w-full lg:w-[calc(30vw)]">
                <h6 className="text-center lg:text-left text-5xl font-bold">
                  Sobre Nós
                </h6>
                <p className="italic text-lg w-full lg:w-[calc(30vw)]">
                  <span className="text-2xl">S</span>omos uma empresa de
                  tecnologia focada em Inteligência das Coisas (IoT) e Cidades
                  Conectadas. Oferecemos soluções inovadoras para melhorar a
                  qualidade de vida das pessoas, usando tecnologia avançada.
                  Estamos aqui para tornar o futuro mais inteligente e
                  conectado.
                </p>
              </div>
            </div>
          </article>
          <article
            className="col-start-2 w-full row-start-2 h-full
              grid grid-rows-[45vh_75vh] sm:grid-rows-[60vh_60vh] lg:flex"
          >
            <div className="row-start-2 h-max lg:h-full flex sm:justify-center lg:items-center w-full lg:w-[calc(40vw)]">
              <div
                className="flex h-max lg:h-full flex-col gap-y-4 relative text-dark-1000
                w-full sm:w-[calc(70vw)] lg:w-[calc(35vw)] pt-8 lg:pt:0"
              >
                {aboutItens.map((item, index) => (
                  <div className=" flex gap-x-4" key={item.alt}>
                    <div className="bg-dark-0 z-20 h-max w-12">
                      <BsPatchCheckFill className="w-12 h-12 text-blue-600  bg-dark-0" />
                      <div
                        className={classNames("", {
                          "line-height bg-blue-600 w-[calc(2px)] h-[calc(9vh)] lg:h-[calc(10vh)] left-6 absolute z-10":
                            index !== 3,
                        })}
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="w-full flex">
                        <h6 className="text-xl font-bold w-max h-max">
                          {item.title}
                        </h6>
                      </div>
                      <p className="italic text-md md:text-md 900 w-full lg:w-[calc(30vw)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url(/img/about.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="row-start-1 h-[calc(45vh)] sm:h-full relative flex 
              rounded-3xl rounded-bl-[calc(25vw)] rounded-tr-[calc(25vw)]
              lg:rounded-3xl  lg:rounded-bl-[calc(10vw)] lg:rounded-tr-[calc(10vw)]
              w-full lg:w-[calc(40vw)]"
            ></div>
          </article>
        </section>

        {/* OUR SERVICES */}
        <section
          id="services-section"
          className="grid grid-cols-[10vw_80vw_10vw] h-[calc(250vh)] md:h-[calc(120vh)]"
        >
          <article className="flex flex-col gap-y-4 col-start-2 text-center items-center justify-center text-dark-1000 w-full h-[calc(10vh)]]">
            <h6 className="text-xl md:text-2xl font-semibold w-max text-blue-600">
              Nossos Serviços
            </h6>
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Nossos Serviços Incluem:
            </h4>
          </article>
          <article
            className="w-full h-[calc(250vh)] md:h-[calc(90vh)] col-start-2 
            flex gap-x-12 relative flex-wrap items-center justify-center gap-y-6"
          >
            {cards.map((item: any, index: any) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.5 },
                }}
                className="h-96 md:h-[calc(35vh)] lg:h-[calc(40vh)] md:w-[calc(30vw)] lg:w-[calc(22vw)] xl:w-[calc(22vw)] px-6 py-6  bg-dark-0 z-30 
                flex flex-col gap-y-6 rounded-lg text-dark-1000 shadow-xl
                transition-colors duration-300 hover:text-dark-0 hover:bg-blue-600"
              >
                <div className="w-max h-max rounded-xl">
                  <Image
                    alt="img"
                    width={500}
                    height={500}
                    className="w-16 h-16 object-contain"
                    src={item.src}
                  />
                </div>
                <div className="max-w-max py-1 font-semibold border-b-2 border-blue-600">
                  <h6 className="text-xl md:text-base lg:text-lg xl:text-xl">
                    {item.title}
                  </h6>
                </div>
                <div className="w-full h-44">
                  <p className="text-lg md:text-sm xl:text-lg 2xl:text-lg italic">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </article>
        </section>

        {/* OUR SOLUTIONS */}
        <section
          id="solutions-section"
          className="mt-72 lg:mt-36 grid grid-cols-[10vw_80vw_10vw] h-[calc(150vh)] grid-rows-[50vh_50vh]"
        >
          <article className="row-start-1 h-[calc(25vh)] 2xl:h-auto 600 w-full col-start-2">
            <div className="flex flex-col gap-y-4 text-dark-1000 md:w-full lg:w-[calc(42vw)]">
              <h6 className="text-2xl font-semibold w-max text-blue-600">
                Nossas Soluções
              </h6>
              <h4 className="text-5xl font-bold">
                Confira Algumas de Nossas Soluções
              </h4>
            </div>
          </article>
          <article className="mt-16 sm:mt-0 row-start-2 200 w-full h-full col-start-2 text-dark-1000 flex flex-col items-center justify-center gap-y-20">
            <div
              className="w-full h-[calc(45vh)] rounded-lg 500
              flex items-center flex-col justify-center gap-x-12 gap-y-8 relative"
            >
              <h4 className="text-2xl font-bold">Segurança</h4>
              <SliderCarousel data={imgSegurança} security />
            </div>
            <div
              className="w-full h-[calc(45vh)] rounded-lg
              flex items-center flex-col justify-center gap-x-12 gap-y-8 relative"
            >
              <h4 className="text-2xl font-bold">Sustentabilidade</h4>
              <SliderCarousel data={imgSustentabilidade} />
            </div>
          </article>
        </section>

        {/* CONTACT US */}
        <section
          id="contact-section"
          className="relative grid gap-y-10 lg:gap-y-0
          h-[calc(120vh)] lg:h-[calc(100vh)]
          grid-cols-[10vw_80vw_10vw] md:grid-cols-[20vw_60vw_20vw] lg:grid-cols-[10vw_50vw_40vw]
          grid-rows-[60vh_50vh] lg:grid-rows-[20vh_60vh_auto] 2xl:grid-cols-[10vw_50vw_40vw]"
        >
          <article className="w-full h-full col-start-2 row-start-1 lg:row-start-2">
            <div className="w-full lg:w-[calc(40vw)] 2xl:w-[calc(30vw)] h-full flex flex-col items-center">
              <div className="flex flex-col gap-y-8 text-dark-1000 w-full">
                <h6 className="text-5xl font-bold w-full">Fale Conosco</h6>
                <h6 className="text-md font-semibold w-full text-dark-900">
                  Sinta-se livre para contactar-nos a qualquer hora. Entraremos
                  em contato com você assim que pudermos.
                </h6>
              </div>

              <div className="w-full h-full flex flex-col justify-between gap-y-6 pt-12">
                <div className="flex flex-col gap-y-10">
                  <InputForm
                    name={"nome"}
                    icon={FaRegUser}
                    state={name}
                    setState={setName}
                    maxLength={50}
                  />
                  <InputForm
                    name={"email"}
                    icon={MdOutlineMail}
                    state={email}
                    setState={setEmail}
                    maxLength={100}
                  />
                  <InputForm
                    name={"mensagem"}
                    icon={MdOutlineChat}
                    state={message}
                    setState={setMessage}
                    maxLength={1000}
                  />
                </div>
                <div className="flex justify-start w-full">
                  <button
                    onClick={handleSubmit}
                    className="w-full h-12 rounded-md bg-dark-1000 font-semibold transition-all duration-300
                    hover:bg-blue-600 border-2 border-dark-1000 hover:border-dark-1000 hover:text-dark-0 bottom-0"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article
            className="w-full lg:w-[calc(50vw)] h-full bg-dark-1000 z-20 relative flex 
            col-start-2 lg:col-start-3 
            row-start-2 lg:row-start-2 "
          >
            <div className="w-12 h-12 bg-blue-600 absolute -left-4 -top-4 z-10" />
            <div className="visible lg:hidden w-12 h-12 bg-blue-600 absolute -right-4 -bottom-4 z-10" />
            <div className="w-full lg:pl-12 flex justify-center lg:justify-start items-center">
              <div className="flex-col gap-y-8 w-[calc(60vw)] md:w-[calc(45vw)] lg:w-max flex">
                <p className="w-full text-3xl font-semibold text-dark-100">
                  Informações
                </p>
                <p className="text-dark-200 hover:text-blue-600 w-full text-md flex items-center gap-x-4  text-start">
                  <BsBuilding className="w-10 h-10" />
                  Pouso Alegre - Minas Gerais, Brasil
                </p>
                <p className="text-dark-200 hover:text-blue-600 w-full text-md flex items-center gap-x-4  text-start">
                  <LiaPhoneVolumeSolid className="w-10 h-10" />
                  Telefone: (35) 99852-1588
                </p>
                <p className="text-dark-200 hover:text-blue-600 w-full text-md flex items-center gap-x-4  text-start">
                  <MdOutlineMail className="w-10 h-10" />
                  laerciosasso@infopratica.com.br
                </p>
                <p className="text-dark-200 hover:text-blue-600 w-full text-md flex items-center gap-x-4  text-start">
                  <BsClockHistory className="w-10 h-10" />
                  08:00 - 18:00
                </p>
              </div>
            </div>
          </article>

          <div className="hidden lg:flex col-start-3 bg-blue-600 w-[calc(15vw)] z-10 right-0 h-full absolute" />
        </section>

        {/* FOOTER */}
        <footer
          className="bg-dark-1000 grid grid-cols-[5vw_90vw_5vw] lg:grid-cols-[10vw_80vw_10vw] 
          grid-rows-1 w-full flex-col  text-dark-0 items-end justify-end h-[calc(50vh)] md:h-[calc(30vh)]"
        >
          <div
            className="col-start-2 w-full h-[calc(40vh)] md:h-[calc(25vh)] flex-col md:flex-row
            flex items-center md:items-end justify-between"
          >
            <div className="h-full w-[calc(80vw)] md:w-80 row-start-1 items-center justify-between py-6">
              <div className="flex flex-col gap-y-2">
                <p className="w-full font-semibold text-4xl pb-6">TSI IP</p>
                <p className="w-full text-lg flex items-end gap-x-2 text-start">
                  <BsBuilding className="w-6 h-6" />
                  Pouso Alegre
                </p>
                <p className="w-full text-lg">
                  <span className="ml-8"></span>Minas Gerais, Brasil
                </p>
                <p className="w-full text-lg flex items-end gap-x-2 text-start">
                  <LiaPhoneVolumeSolid className="w-6 h-6" />
                  Telefone: (35) 99852-1588
                </p>
                <p className="w-full text-lg flex items-end gap-x-2 text-start">
                  <MdOutlineMail className="w-6 h-6" />
                  laerciosasso@infoprratica.com.br
                </p>
              </div>
            </div>
            <div
              className="h-full md:h-16 flex items-center gap-x-8 md:gap-x-2 
              w-full md:w-80 justify-center md:justify-between row-start-2"
            >
              {icons.map((icon, i) => {
                const Icon = icon.src;
                return (
                  <button
                    className=" text-dark-0 bg-dark-1000 rounded-2xl flex items-center justify-center 
                    h-12 w-12 hover:bg-blue-600 hover:scale-110 transition-all"
                    key={i}
                  >
                    <Icon className="h-8 w-8" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="col-start-2 w-full h-12 flex items-center justify-center ">
            <p>© Copyright TSI IP. Todos os direitos reservados</p>
          </div>
        </footer>
      </main>
    </body>
  );
}
