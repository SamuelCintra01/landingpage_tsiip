import "tailwindcss/tailwind.css";
import { PiShieldCheckFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import Image from "next/image";
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
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
const imgSegurança = [
  {
    id: 1,
    src: "/cards/smart-lighting.jpg",
    title: "Iluminação Pública Inteligente",
    alt: "slide-image-1",
  },
  {
    id: 2,
    src: "/cards/vehicle-plate.jpg",
    title: "Reconhecimento de Placas",
    alt: "slide-image-2",
    icon: "/img/facial.png",
  },
  {
    id: 3,
    src: "/cards/facial.jpg",
    title: "Reconhecimento Facial",
    alt: "slide-image-3",
  },
  {
    id: 4,
    src: "/cards/crown.jpg",
    title: "Detecção de Aglomerações",
    alt: "slide-image-4",
  },
  {
    id: 5,
    src: "/cards/count-people.jpg",
    title: "Contagem de Pessoas",
    alt: "slide-image-5",
  },
  {
    id: 6,
    src: "/cards/violence.jpg",
    title: "Detecção de Violência",
    alt: "slide-image-6",
  },
  {
    id: 7,
    src: "/cards/forense.jpg",
    title: "Busca forense",
    alt: "slide-image-6",
  },
  {
    id: 8,
    src: "/cards/fall.jpg",
    title: "Detecção de Queda",
    alt: "slide-image-6",
  },
];
export default function DashBoard() {
  return (
    <section className="w-screen h-screen grid grid-rows-[8vh_auto] overflow-hidden">
      <header className="row-start-1 bg-gray-100 w-full h-full shadow-md z-20 flex items-center pl-6">
        <div
          className="flex flex-row items-center gap-x-2 text-blue-700 font-semibold
        "
        >
          <PiShieldCheckFill className="w-8 h-8" />
          <h3>INFORPRATICA</h3>
        </div>
      </header>
      <section className="row-start-2  grid grid-cols-[15vw_5vw_auto_20vw] w-full h-full z-10">
        <nav className="bg-gray-100 col-start-1 w-full h-full shadow-xl ">
          <div className=" h-96 flex flex-col px-6 py-12 gap-y-6 text-gray-600">
            <span className="flex items-center gap-2">
              <FiEdit className="w-6 h-6" />
              <p>Cabeçalho</p>
            </span>
            <span className="flex items-center gap-2">
              <FiEdit className="w-6 h-6" />
              <p>Rodapé</p>
            </span>
            <span className="flex items-center gap-2">
              <FiEdit className="w-6 h-6" />
              <p>Segurança</p>
            </span>
            <span className="flex items-center gap-2">
              <FiEdit className="w-6 h-6" />
              <p>Sustentabilidade</p>
            </span>
          </div>
        </nav>
        <section className=" w-full h-full col-start-3 grid grid-rows-[5vh_10vh_auto_5vh]">
          <div className="row-start-2">
            <h1 className="font-semibold text-2xl border-b-2 border-blue-700 w-min pb-1">
              Segurança
            </h1>
          </div>
          <article className="h-[calc(60vh)] w-[calc(60vw)] row-start-3 grid grid-rows-[10vh_auto]">
            <div
              className="w-full h-full font-semibold bg-gray-200 rounded-xl
            grid grid-cols-[5vw_5vw_10vw_auto_5vw_5vw] items-center row-start-1"
            >
              <span className="col-start-2 bg-red-100">Imagem</span>
              <span className="col-start-3 bg-red-200">Tamanho</span>
              <span className="col-start-4 bg-red-300">Título</span>
              <span className="col-start-5 bg-red-400">Editar</span>
              <span className="col-start-6 bg-red-500">Excluir</span>
            </div>
            <div className="row-start-2 w-full h-full overflow-x-hidden ">
              {imgSegurança.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-[calc(10vh)] bg-yellow-300 font-semibold rounded-xl
                grid grid-cols-[5vw_5vw_10vw_auto_5vw_5vw] items-center mb-2"
                >
                  <div className=" w-full h-full flex items-center justify-center col-start-1 ">
                    <input type="checkbox" className="w-6 h-6 " />
                  </div>
                  <Image
                    alt={item.alt}
                    src={item.src}
                    className=" w-20 h-20 col-start-2 rounded-xl "
                    width={500}
                    quality={100}
                    height={500}
                  />
                  <span className="col-start-3">142.65 Kbs</span>
                  <span className="col-start-4">{item.title}</span>
                  <span className="col-start-5">
                    <FaPencil className="w-6 h-6" />
                  </span>
                  <span className="col-start-6">
                    <FaRegTrashCan className="w-6 h-6" />
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}
