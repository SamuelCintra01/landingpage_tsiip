"use client";

import { Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps";
import vitaminCStyles from "./vitamin-style";
import LogoImage from "../../../public/header/logo.png";
import Image from "next/image";
import Card2 from "../../../public/cards/marker.png";

const MapTypeId = {
  HYBRID: "hybrid",
  ROADMAP: "roadmap",
  SATELLITE: "satellite",
  TERRAIN: "terrain",
};

const MAP_CONFIG = {
  id: "styled2",
  label: 'Raster / "Vitamin C" (no mapId)',
  mapTypeId: MapTypeId.ROADMAP,
  styles: vitaminCStyles,
};

// const MAP_CONFIG = {
//   id: "dark",
//   label: "Dark",
//   mapId: "739af084373f96fe",
//   mapTypeId: MapTypeId.ROADMAP,
// };

const position = { lat: -22.226214092078873, lng: -45.931093254556444 };

const MapComponent = ({ openModal, setOpenModal }: any) => {
  const [markerRef, marker] = useMarkerRef();

  return (
    <Map
      // mapId={MAP_CONFIG.mapId}
      mapTypeId={MAP_CONFIG.mapTypeId}
      zoom={14}
      center={position}
      draggable={false}
      styles={MAP_CONFIG.styles}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      <div
        className="bg-dark-1000 absolute w-[calc(25vw)] h-40 opacity-80 rounded-md
      translate-x-[calc(60vw)] translate-y-[calc(15vw)] flex  py-4 px-4 justify-between  "
      >
        <Image
          className="w-16 h-16 -top-10 right-0 absolute"
          alt="logo"
          src={Card2}
        />

        <div className="text-sm font-semibold">
          <h6 className="text-2xl mb-4">Localização</h6>
          <p>Pouso Alegre - Minas Gerais</p>
          <p>Rua Monsenhor Dutra - 700</p>
          <p>Mg - 37550-000</p>
          <p>Contato: (35) 99852-1588</p>
        </div>
        <div className="flex items-end">
          <button
            onClick={() => setOpenModal((state: boolean) => !state)}
            className="bg-blue-700 flex items-center justify-center h-12 py-2  border-2 transition-all
         ease-in-out hover:bg-dark-1000 hover:text-dark-0 border-blue-700 rounded-md opacity-100 z-20 w-36 px-2"
          >
            Contrate-nos
          </button>
        </div>
      </div>
      <Marker ref={markerRef} position={position} />
    </Map>
  );
};

export default MapComponent;
