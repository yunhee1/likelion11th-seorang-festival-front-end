import React, { useCallback, useState } from "react";
import Nav from "../../components/Nav";
import { ReactComponent as BoothMap } from "../../images/MapPage/booth_map.svg";
import "../../css/map-page.scss";
import Booths from "./BoothData";
import BoothList from "./BoothList";

const MapPage = () => {
  const [booths, setBooths] = useState(Booths);

  const onToggle = useCallback(
    (id) => {
      setBooths(
        booths.map((booth) =>
          booth.id === id
            ? { ...booth, show: !booth.show }
            : { ...booth, show: false }
        )
      );
    },
    [booths]
  );

  return (
    <div className="container">
      <Nav location="map" />
      <div className="map-container">
        <BoothMap />
      </div>
      <div className="scroll-container">
        <BoothList booths={booths} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default MapPage;
