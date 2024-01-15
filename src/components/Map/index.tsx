"use client";

import { Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps";

const MapTypeId = {
  HYBRID: "hybrid",
  ROADMAP: "roadmap",
  SATELLITE: "satellite",
  TERRAIN: "terrain",
};

const MAP_CONFIG = {
  id: "dark",
  label: "Dark",
  mapId: "739af084373f96fe",
  mapTypeId: MapTypeId.ROADMAP,
};

const position = { lat: -22.226214092078873, lng: -45.931093254556444 };

const MapComponent = () => {
  const [markerRef, marker] = useMarkerRef();

  return (
    <Map
      mapId={MAP_CONFIG.mapId}
      mapTypeId={MAP_CONFIG.mapTypeId}
      zoom={14}
      center={position}
      // styles={MAP_CONFIG.styles}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      <Marker
        ref={markerRef}
        // onClick={() => setInfowindowOpen(true)}
        position={position}
      />
    </Map>
  );
};

export default MapComponent;
