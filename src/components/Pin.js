import React from "react";
import Marker from "../images/MapPage/map_pin.png";

const Pin = ({ locX, locY }) => {
  return (
    <img
      src={Marker}
      alt="부스 위치 마커"
      style={{
        position: "absolute",
        right: locX,
        top: locY,
        width: "20px",
        height: "24px",
        animation: "ani 1s infinite alternate",
      }}
    />
  );
};

export default Pin;
