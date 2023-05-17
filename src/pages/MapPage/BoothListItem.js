import React from "react";
import classNames from "classnames";
import "../../css/booth-list-item.scss";
import { ReactComponent as FootIcon } from "../../images/MapPage/foot_icon.svg";

const BoothListItem = ({ booth, onToggle }) => {
  const { id, name, location, desc, show } = booth;

  return (
    <div className="booth-container">
      <div className="booth-name-container" onClick={() => onToggle(id)}>
        <FootIcon className={classNames("selected-booth", { show })} />
        <p className="booth-name">{name}</p>
      </div>
      <div className={classNames("booth-desc-container", { show })}>
        <div className="booth-location-container">
          <img
            src={require("../../images/MapPage/map_pin.png")}
            className="booth-desc-pin"
            alt="pin"
          />
          <p className="location-text">{location}</p>
        </div>
        <p className="booth-description">{desc}</p>
      </div>
    </div>
  );
};

export default BoothListItem;
