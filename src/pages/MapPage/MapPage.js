import React, { useCallback, useState, useEffect } from "react";
import Nav from "../../components/Nav";
import "../../css/map-page.scss";
import Booths from "./BoothData";
import BoothsDate from "./BoothDateData";
import BoothList from "./BoothList";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";
import boothMap from "../../images/MapPage/booth_map.png";
import Pin from "../../components/Pin";

const MapPage = () => {
  const [booths, setBooths] = useState(Booths);
  const [day, setDay] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [marker, setMarker] = useState([235, 165]);
  const [showCorp, setShowCorp] = useState(false);

  useEffect(() => {
    const newBooths = Booths.filter((v) => BoothsDate[0].includes(v.id));
    setBooths(newBooths);
  }, []);

  const onClick = (day) => {
    searchParams.set("day", day);
    setDay(day);
    setSearchParams(searchParams);

    const newBooths = Booths.filter((v) => BoothsDate[day - 1].includes(v.id));
    setBooths(newBooths);
    setMarker([235, 165]);
  };

  const onToggle = useCallback(
    (id) => {
      setBooths(
        booths.map((booth) => {
          return booth.id === id
            ? { ...booth, show: !booth.show }
            : { ...booth, show: false };
        })
      );

      if (id === 2 && (day === 1 || day === 2)) {
        setShowCorp(true);
      } else {
        setShowCorp(false);
      }

      const selectedBooth = booths.find((booth) => booth.id === id);
      setMarker(selectedBooth.locXY[`day${day}`]);
    },
    [booths, day]
  );

  return (
    <div className="container">
      <Nav location="map" />
      <div className="map-container">
        <img src={boothMap} alt="부스 지도" className="booth-map-img" />
        <Pin locX={marker[0]} locY={marker[1]} />
        {showCorp ? (
          <Pin locX="313px" locY="120px" className="booth-map-img" />
        ) : null}
      </div>
      <div className="scroll-container">
        <div className="day-filter-container">
          <div
            className={classNames(
              "day-filter-item-container",
              day === 1 ? "selected-date" : ""
            )}
            onClick={() => onClick(1)}
          >
            <p className="day-filter day">24</p>
            <p className="day-filter dayOfWeek">WED</p>
            <hr className="day-filter underline" />
          </div>
          <div
            className={classNames(
              "day-filter-item-container",
              day === 2 ? "selected-date" : ""
            )}
            onClick={() => onClick(2)}
          >
            <p className="day-filter day">25</p>
            <p className="day-filter dayOfWeek">THU</p>
            <hr className="day-filter underline" />
          </div>
          <div
            className={classNames(
              "day-filter-item-container",
              day === 3 ? "selected-date" : ""
            )}
            onClick={() => onClick(3)}
          >
            <p className="day-filter day">26</p>
            <p className="day-filter dayOfWeek">FRI</p>
            <hr className="day-filter underline" />
          </div>
        </div>
        <BoothList booths={booths} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default MapPage;
