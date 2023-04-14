import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/nbti">냥BTI</Link>
      <Link to="/booth-map">부스위치</Link>
      <Link to="/developers">만든이들</Link>
    </div>
  );
};

export default Nav;
