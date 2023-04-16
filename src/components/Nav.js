import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-item">
        홈
      </Link>
      <Link to="/nbti" className="nav-item">
        냥BTI
      </Link>
      <Link to="/booth-map" className="nav-item">
        부스위치
      </Link>
      <Link to="/developers" className="nav-item">
        만든이들
      </Link>
    </div>
  );
};

export default Nav;
