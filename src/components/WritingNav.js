//롤링페이퍼작성 내비게이션

import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.scss";
import { ReactComponent as PinkCatIcon } from "../images/GuestbookPage/pinkcat_icon.svg";
import { ReactComponent as YellowCatIcon } from "../images/GuestbookPage/yellowcat_icon.svg";
import { ReactComponent as GreenCatIcon } from "../images/GuestbookPage/greencat_icon.svg";
import { ReactComponent as BlueCatIcon } from "../images/GuestbookPage/bluecat_icon.svg";
import { ReactComponent as PurpleCatIcon } from "../images/GuestbookPage/purplecat_icon.svg";
import { ReactComponent as BrownCatIcon } from "../images/GuestbookPage/browncat_icon.svg";

import { ReactComponent as PinkCatIconSelected } from "../images/GuestbookPage/pinkcat_icon_selected.svg";
import { ReactComponent as YellowCatIconSelected } from "../images/GuestbookPage/yellowcat_icon_selected.svg";
import { ReactComponent as GreenCatIconSelected } from "../images/GuestbookPage/greencat_icon_selected.svg";
import { ReactComponent as BlueCatIconSelected } from "../images/GuestbookPage/bluecat_icon_selected.svg";
import { ReactComponent as PurpleCatIconSelected } from "../images/GuestbookPage/purplecat_icon_selected.svg";
import { ReactComponent as BrownCatIconSelected } from "../images/GuestbookPage/browncat_icon_selected.svg";

const WritingNav = ({ location }) => {
  return (
    <div className="writing-nav-container">
      <Link to="/pinkmemo" className="nav-item">
        {location === "pinkmemo" ? <PinkCatIconSelected /> : <PinkCatIcon />}
      </Link>
      <Link to="/yellowmemo" className="nav-item">
        {location === "yellowmemo" ? <YellowCatIconSelected /> : <YellowCatIcon />}
      </Link>
      <Link to="/greenmemo" className="nav-item">
        {location === "greenmemo" ? <GreenCatIconSelected /> : <GreenCatIcon />}
      </Link>
      <Link to="/bluememo" className="nav-item">
        {location === "bluememo" ? <BlueCatIconSelected /> : <BlueCatIcon />}
      </Link>
      <Link to="/purplememo" className="nav-item">
        {location === "purplememo" ? <PurpleCatIconSelected /> : <PurpleCatIcon />}
      </Link>
      <Link to="/brownmemo" className="nav-item">
        {location === "brownmemo" ? <BrownCatIconSelected /> : <BrownCatIcon />}
      </Link>
    </div>
  );
};

export default WritingNav;
