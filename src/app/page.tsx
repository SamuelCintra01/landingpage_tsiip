"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/header/logo.png";
import { motion } from "framer-motion";
import { FaRegMoon, FaRegSun, FaPaperPlane } from "react-icons/fa";
import classNames from "classnames";
import "../components/SliderCarousel/Slider.css";

import SlideImageOne from "../../public/header/phone-1.png";
import SlideImageTwo from "../../public/header/notebook-1.png";

import { IoMdCloseCircle as CloseIcon } from "react-icons/io";
import {
  FaInstagram,
  FaFacebookF,
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

import Slide1 from "../../public/cards/image-6.png";
import Slide2 from "../../public/cards/image-3.png";
import Slide3 from "../../public/cards/image-2.png";
import Slide4 from "../../public/cards/image-7.png";
import Slide5 from "../../public/cards/image-8.png";
import Slide6 from "../../public/cards/image-1.png";
import Slide7 from "../../public/cards/image-5.png";
import Slide8 from "../../public/cards/image-0.png";

import Slide9 from "../../public/cards/image-9.png";
import Slide10 from "../../public/cards/image-10.png";
import Slide11 from "../../public/cards/image-11.png";
import Slide12 from "../../public/cards/image-12.jpg";

import SecurityImage from "../../public/cards/security.png";
import AboutImage from "../../public/cards/about.jpg";
import SustentabilityImage from "../../public/cards/sustentability.png";

import DiamondIcon from "../../public/cards/diamond.png";
import MissionIcon from "../../public/cards/mission.png";
import { MdEmail, MdPhone } from "react-icons/md";

import { APIProvider } from "@vis.gl/react-google-maps";
import { InputForm } from "@/components/InputForm";
import MapComponent from "@/components/Map";
import { SliderCarousel } from "@/components/SliderCarousel";
import { ServicesCarousel } from "@/components/ServicesCarousel";

const icons = [
  { src: FaInstagram },
  { src: FaFacebookF },
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

const imgSegurança = [
  {
    id: 1,
    src: Slide1,
    title: "Iluminação Pública Inteligente",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 2,
    src: Slide2,
    title: "Reconhecimento de Placas",
    alt: "slide-image-2",
    text: "A Iluminação Pública Inteligente utiliza sensores conectados que melhoram a eficiência energética e diminuem o consumo, reduzindo assim os gastos.",
    icon: "/cards/facial.png",
  },
  {
    id: 3,
    src: Slide3,
    title: "Reconhecimento Facial",
    alt: "slide-image-3",
    text: "A automação, aliada a Internet das Coisas permite conectar dispositivos e automatizar processos de forma rápida e segura",
  },
  {
    id: 4,
    src: Slide4,
    title: "Detecção de Aglomerações",
    alt: "slide-image-4",
    text: "Utilizamos sensores em conjunto com a Internet das Coisas para tornar mais eficaz a forma como lidamos com os dados captados.",
  },
  {
    id: 5,
    src: Slide5,
    title: "Contagem de Pessoas",
    alt: "slide-image-5",
    text: "A Internet das Coisas (IoT) revolucionou a maneira como lidamos com o cotidiano. Dispositivos conectados reunem e transmitem dados de itens usados no dia a dia.",
  },
  {
    id: 6,
    src: Slide6,
    title: "Detecção de Violência",
    alt: "slide-image-6",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
  {
    id: 7,
    src: Slide7,
    title: "Busca forense",
    alt: "slide-image-6",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
  {
    id: 8,
    src: Slide8,
    title: "Detecção de Queda",
    alt: "slide-image-6",
    text: "A Telegestão permite um controle inteligente dos recursos, resultanto numa enorme economia.",
  },
];

const imgSustentabilidade = [
  {
    id: 1,
    src: Slide9,
    title: "Lixeiras Inteligentes",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 2,
    src: Slide10,
    title: "Gestão Inteligente de Frotas",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 3,
    src: Slide11,
    title: "Semáforos Inteligentes",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
  {
    id: 4,
    src: Slide12,
    title: "Software de Gestão Ecológico",
    alt: "slide-image-1",
    text: "Cidades Inteligentes otimizam a utilização de recursos em prol da sociedade e qualidade de vida dos individuos.",
  },
];

export default function Home() {
  const [sendEmail, setSendEmail] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleStopScroll = () => {
      document.body.style.overflow = openModal ? "hidden" : "auto";
    };

    handleStopScroll();
    return () => {
      handleStopScroll();
    };
  }, [openModal]);

  return (
    <APIProvider apiKey="AIzaSyCFkh_qWb43L2hFec0g-DcxvEUwDL0tSDE">
      {/* <section className="bg-dark-1000 h-screen w-screen absolute z-50 overflow-hidden"></section> */}

      <body className="w-full h-screen   bg-dark-0 overflow-hidden relative">
        {openModal && (
          <div className="w-screen h-screen flex justify-center">
            <div
              className={classNames(
                " items-center justify-center  bg-dark-0 w-[calc(40vw)] h-[calc(65vh)]  rounded-3xl shadow-2xl opacity-100 fixed flex z-50 self-center transition-all delay-300 duration-300"
              )}
            >
              <header
                className="flex w-full self-center h-20 bg-dark-1000
               absolute -top-1.5 right-0 rounded-t-3xl"
              >
                <div className="max-w-max flex flex-col justify-center pl-12 gap-y-2">
                  <h6 className="text-2xl">Entre em contato</h6>
                  <p className="">Preencha o formulário abaixo</p>
                </div>
                <button onClick={() => setOpenModal(false)}>
                  <CloseIcon className="absolute right-4 top-4 w-10 h-10 hover:scale-110 transition-all duration-100" />
                </button>
              </header>

              <div
                className=" w-[calc(35vw)] max-h-max
                 flex flex-col gap-y-6 bg--500 pt-12"
              >
                <div className="flex gap-x-6">
                  <InputForm key={"nome"} name={"nome"} />
                  <InputForm key={"email"} name={"email"} />
                </div>
                <div className="flex gap-x-6">
                  <InputForm key={"cidade"} name={"cidade"} />
                  <InputForm key={"estado"} name={"estado"} />
                </div>
                <div className="flex gap-x-6">
                  <InputForm key={"telefone"} name={"telefone"} />
                  <InputForm key={"titulo"} name={"titulo"} />
                </div>
                <div className="flex">
                  <InputForm key={"mensagem"} name={"mensagem"} />
                </div>
                <div className="flex justify-center gap-x-6  w-full">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="py-2 px-6 rounded-md bg-dark-100 text-dark-600 hover:bg-dark-200 hover:text-dark-700 transition-all duration-100"
                  >
                    Fechar
                  </button>
                  <button className="py-2 px-6 rounded-md bg-dark-900 hover:bg-dark-1000 hover:text-dark-100">
                    Enviar
                  </button>
                </div>
              </div>
            </div>

            <div
              className="fixed w-screen h-screen  z-40 bg-dark-1000 opacity-80"
              onClick={() => setOpenModal(false)}
            ></div>
          </div>
        )}
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
          <section className="grid grid-cols-[10vw_40vw_40vw_10vw] h-[calc(90vh)]">
            <div className="gap-0 col-start-2 flex">
              <div className=" grid grid-rows-[10%_90%]">
                <div className="row-start-2 gap-8 flex flex-col ">
                  <div className="text-dark-900 font-bold text-7xl ">
                    <h1 className="">Soluções Tech </h1>
                    <h1>Sob Medida Para</h1>
                    <h1 className="text-blue-600 ">Você</h1>
                  </div>

                  <p className="text-dark-400 text-lg italic">
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
                text-dark-400 text-lg"
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

          <section className="grid grid-cols-[10vw_30vw_60vw] h-[calc(100vh)]">
            <article className="w-full h-96 col-start-2 ">
              <div className="flex flex-col gap-y-4 text-dark-1000 w-[calc(26vw)]">
                <h6 className="text-2xl font-semibold w-max ">
                  Nossas Soluções
                </h6>
                <h4 className="text-5xl font-bold text-blue-600  ">
                  Oferecemos Soluções Inovadores
                </h4>
                <p className="text-xl text-dark-400 italic">
                  {" "}
                  Desenvolvimento de Softwares à Medida da sua Empresa.
                </p>
              </div>
            </article>
            <article
              className=" bg-blue-600  w-[calc(60vw)] h-[calc(10vw)] col-start-3
             pt-8 pl-36 rounded-lg flex gap-x-12  relative"
            >
              <SliderCarousel data={imgSegurança} />
            </article>
            <article
              className=" bg-blue-600  w-[calc(60vw)] h-[calc(10vw)] col-start-1
             pt-8 rounded-lg  flex gap-x-12  relative"
            >
              <div className=" absolute -left-36">
                <SliderCarousel data={imgSustentabilidade} />
              </div>
            </article>
          </section>
          <section className="grid grid-cols-[10vw_30vw_60vw] h-[calc(100vh)]"></section>

          {/* <section className="grid grid-cols-[10vw_80vw_10vw] h-[calc(100vh)] ">
            <div className=" col-start-2 flex justify-center items-center">
              <div className=" w-96 h-[calc(100vh)] ">
                {cards.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{
                      transition: { duration: 0.5 },
                    }}
                    className={classNames(
                      "w-[calc(20vw)] h-[calc(30vh)] px-10 py-12 bg-dark-0 z-50 mb-12 flex flex-col gap-y-6 rounded-lg text-dark-1000 ",
                      {
                        "ml-36": item.id === 1 || item.id === 3,
                      }
                    )}
                  >
                    <div className="w-full h-max rounded-xl  flex justify-end gap-x-4">
                      <div className="max-w-max text-xl  font-semibold flex items-end border-b-2 border-blue-600">
                        <h6 className="">{item.title}</h6>
                      </div>

                      <Image
                        alt="img"
                        className="w-16 h-16 object-contain"
                        src={item.src}
                      />
                    </div>

                    <div className="w-full h-44">
                      <p className="text-lg italic ">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div
                className=" relative w-[calc(80vw)] h-[calc(90vh)]
               flex justify-center"
              >
                <div
                  className="w-[calc(30vw)] h-[calc(60vh)] absolute z-10 self-center rounded-full"
                  style={{
                    backgroundImage: "url(/cards/bg-about1.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full h-full bg-yellow-600 rounded-full opacity-60"></div>
                </div>
                <Image
                  alt="phone"
                  src={SlideImageOne}
                  className=" w-[calc(100vw)] h-[calc(90vh)] z-20 absolute"
                />
              </div>
              <div className=" w-96 h-[calc(100vh)] ">
                {cards.slice(3, 6).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{
                      transition: { duration: 0.5 },
                    }}
                    className={classNames(
                      "w-[calc(20vw)] h-[calc(30vh)] px-10 py-12  bg-dark-0 z-50 mb-12 flex flex-col gap-y-6 rounded-lg text-dark-1000 ",
                      {
                        "mr-36": item.id === 4 || item.id === 6,
                      }
                    )}
                  >
                    <div className="w-full h-max rounded-xl  flex justify-start gap-x-4">
                      <Image
                        alt="img"
                        className="w-16 h-16 object-contain"
                        src={item.src}
                      />
                      <div className="max-w-max text-xl  font-semibold flex items-end border-b-2 border-blue-600">
                        <h6 className="">{item.title}</h6>
                      </div>
                    </div>

                    <div className="w-full h-44">
                      <p className="text-lg italic ">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}

          <section className="flex flex-col  h-[calc(100vh)] items-center justify-start bg-transparent">
            <article
              className=" w-full h-[calc(70vh)]
                flex border-t-2 border-dark-1000 relative"
            >
              <div className=" w-full h-full flex col-start-2 border-black">
                <MapComponent
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </div>
            </article>

            <footer
              className="grid grid-cols-[10vw_80vw_10vw] grid-rows-1 w-full flex-col h-[calc(30vh)]
               text-dark-0 items-end justify-end bg-dark-1000"
            >
              <div
                className="col-start-2 w-full h-[calc(25vh)]
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
                        className=" text-dark-0 bg-dark-1000 rounded-2xl flex items-center justify-center h-12 w-12
                          hover:bg-blue-600 hover:scale-110 transition-all"
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
            </footer>
          </section>
        </main>
      </body>
    </APIProvider>
  );
}

{
  /* <section className="flex flex-col w-full h-[calc(100vh)] ">
<div
  className="w-[calc(80vw)] h-[calc(80vh)] absolute right-0"
  style={{
    backgroundImage: "url(/cards/bg-about.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="bg-dark-1000 w-full h-full opacity-90  pt-10">
    <div className="ml-[calc(28vw)] flex flex-col gap-y-10">
      <div className=" max-w-max max-h-max flex flex-col font-semibold gap-y-4 ">
        <h4 className="text-6xl text-dark-0 max-w-max border-dark-0">
          Sobre Nós
        </h4>
        <h4 className="text-4xl text-dark-0">
          Do Conceito ao Software:
          <span className="text-blue-600">
            {" "}
            Transformando Ideias em Aplicações Práticas
          </span>
        </h4>
      </div>
      <div className="w-full h-full flex ">
        <div className=" w-[calc(25vw)] text-lg flex ">
          <p className="italic">
            <span className="text-2xl">S</span>omos uma empresa de
            tecnologia focada em Inteligência das Coisas (IoT) e
            Cidades Conectadas. Oferecemos soluções inovadoras para
            melhorar a qualidade de vida das pessoas, usando
            tecnologia avançada. Estamos aqui para tornar o futuro
            mais inteligente e conectado.
          </p>
        </div>

        <div className=" w-[calc(25vw)] h-full flex flex-col gap-y-8 ">
          <div className="flex gap-x-4">
            <i className="bg-dark-900 hover:bg-blue-400 w-96 h-min rounded-xl py-2 flex justify-center">
              <Image
                alt="diamond-icon"
                src={DiamondIcon}
                className="w-14 h-14 invert "
              />
            </i>
            <div className="flex flex-col w-[calc(80vw)]   gap-y-6">
              <h6 className="text-2xl">Nossos Valores</h6>
              <p className="text-lg italic">
                Com o auxílio de indivíduos comprometidos, nossos
                valores não apenas refletem nossas crenças, mas
                também representam a essência do que somos e
                orientam todas as nossas ações.
              </p>
            </div>
          </div>
          <div className="flex  gap-x-4">
            <i className="bg-dark-900 hover:bg-blue-400 w-[calc(20vw)] h-min rounded-xl py-2 flex justify-center">
              <Image
                alt="diamond-icon"
                src={MissionIcon}
                className="w-14 h-14 invert"
              />
            </i>
            <div className="flex flex-col w-[calc(80vw)]  gap-y-6">
              <h6 className="text-2xl">Nossa Missão</h6>
              <p className="text-lg italic">
                Nosso compromisso é fornecer soluções inovadoras que
                atendam às necessidades de todos. Colocamos as
                pessoas no centro do nosso trabalho, buscando
                constantemente maneiras de melhorar a vida da
                população por meio de tecnologias inovadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Image
    alt="logo"
    className=" w-[calc(30vw)] h-[calc(40vh)] object-cover absolute -left-24 bottom-24"
    src={AboutImage}
  />
</div>
</section> */
}

{
  /* <section className="flex flex-col  h-[calc(150vh)]">
<div
  className=" w-full flex justify-center items-start ml-[calc(10vw)]
    text-dark-900 flex-col gap-y-4"
>
  <h2 className=" text-5xl font-semibold ">Nossas Soluções</h2>
  <p className="text-xl">
    Confira algumas das soluções que oferecemos para as pessoas,
    cidades e empresas...
  </p>
</div>
<section
  className="flex h-full text-dark-900 gap-y-16 
 flex-col relative  items-center justify-center bg-blue"
>
  <div className="w-full ml-[calc(10vw)] bg-orange h-[calc(60vh)] flex relative">
    <div
      className="w-[calc(30vw)]  flex
        items-center justify-center "
      style={{
        backgroundImage: "url(/cards/bgbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        alt="logo"
        className="object-contain w-80 h-80 b"
        src={SecurityImage}
      />
    </div>

    <div
      className="top-0 w-auto h-full
      -right-0 flex items-center flex-col justify-around"
    >
      <div
        className="text-4xl font-semibold  w-full h-12 
        flex justify-center items-center "
      >
        <h3 className="text-dark-900 border-b-4 border-blue-600 px-4 py-2">
          Segurança
        </h3>
      </div>
      <SliderCarousel dataImages={imgSegurança} title="Segurança" />
    </div>
  </div>

  <div className="w-full bg-red h-[calc(60vh)] mr-[calc(10vw)] flex justify-end relative">
    <div
      className=" bottom-12 h-full bg-violet flex 
      items-center justify-around  flex-col -left-0"
    >
      <div
        className="text-4xl font-semibold  w-full h-12 
        flex justify-center items-center "
      >
        <h3 className="text-dark-900 border-b-4 border-blue-600 px-4 py-2">
          Sustentabilidade
        </h3>
      </div>
      <SliderCarousel
        dataImages={imgSustentabilidade}
        title="Sustentabilidade"
      />
    </div>

    <div
      className="w-[calc(30vw)]  flex
        items-center justify-center "
      style={{
        backgroundImage: "url(/cards/bg-sustentability.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        alt="logo"
        className="object-contain w-80 h-80 b"
        src={SustentabilityImage}
      />
    </div>
  </div>
</section>
</section> */
}
