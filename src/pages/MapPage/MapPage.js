import React, { useCallback, useState, useEffect } from "react";
import Nav from "../../components/Nav";
import "../../css/map-page.scss";
import Booths from "./BoothData";
import BoothsDate from "./BoothDateData";
import BoothList from "./BoothList";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";
import boothMap from "../../images/MapPage/booth_map.png";

const MapPage = () => {
  const [booths, setBooths] = useState(Booths);
  const [day, setDay] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

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
  };

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
        <img src={boothMap} alt="부스 지도" className="booth-map-img" />
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
