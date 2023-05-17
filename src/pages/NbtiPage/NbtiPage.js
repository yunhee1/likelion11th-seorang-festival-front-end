import React from "react";
import Nav from "../../components/Nav";
import "../../css/nbti-page.scss";
import { Link } from "react-router-dom";
import { ReactComponent as NbtiLogo } from "../../images/NbtiPage/nbti_logo.svg";
import { ReactComponent as TestButton } from "../../images/NbtiPage/test_button.svg";

const NbtiPage = () => {
  return (
    <div className="container">
      <Nav location="nbti" />
      <div className="nbti-title-container">
        <NbtiLogo />
      </div>
      <div className="nbti-description-container">
        <p>축제 즐기는 방법으로 알아보는 나의 냥BTI</p>
      </div>

      <Link to="test">
        <TestButton />
      </Link>
    </div>
  );
};

export default NbtiPage;
