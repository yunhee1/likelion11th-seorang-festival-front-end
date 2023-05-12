import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.scss";
import { ReactComponent as HomeIcon } from "../images/Nav/home_icon.svg";
import { ReactComponent as NbtiIcon } from "../images/Nav/nbti_icon.svg";
import { ReactComponent as DevIcon } from "../images/Nav/developers_icon.svg";
import { ReactComponent as MapIcon } from "../images/Nav/booth_icon.svg";
import { ReactComponent as HomeIconSelected } from "../images/Nav/home_icon_selected.svg";
import { ReactComponent as NbtiIconSelected } from "../images/Nav/nbti_icon_selected.svg";
import { ReactComponent as DevIconSelected } from "../images/Nav/developers_icon_selected.svg";
import { ReactComponent as MapIconSelected } from "../images/Nav/booth_icon_selected.svg";

const Nav = ({ location }) => {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-item">
        {location === "home" ? <HomeIconSelected /> : <HomeIcon />}
      </Link>
      <Link to="/nbti" className="nav-item">
        {location === "nbti" ? <NbtiIconSelected /> : <NbtiIcon />}
      </Link>
      <Link to="/booth-map" className="nav-item">
        {location === "map" ? <MapIconSelected /> : <MapIcon />}
      </Link>
      <Link to="/developers" className="nav-item">
        {location === "developers" ? <DevIconSelected /> : <DevIcon />}
      </Link>
    </div>
  );
};

export default Nav;
