import React from "react";
import "../../css/landing-page.scss";
import { Link } from "react-router-dom";
import { ReactComponent as MainTitle } from "../../images/LandingPage/main_title.svg";
import { ReactComponent as SubTitle } from "../../images/LandingPage/sub_title.svg";
import { ReactComponent as Date } from "../../images/LandingPage/date.svg";
import { ReactComponent as WriteButton } from "../../images/LandingPage/write_button.svg";
import { ReactComponent as ViewButton } from "../../images/LandingPage/view_button.svg";
import { ReactComponent as PaperBoard } from "../../images/LandingPage/paper_board.svg";
import { ReactComponent as Introduction } from "../../images/LandingPage/section01_title.svg";
import { ReactComponent as Schedule } from "../../images/LandingPage/section02_title.svg";
import { ReactComponent as Developers } from "../../images/LandingPage/section03_title.svg";
import { ReactComponent as FootPrint } from "../../images/LandingPage/footprint.svg";
import { ReactComponent as InstagramLogo } from "../../images/LandingPage/instagram_logo.svg";
import { ReactComponent as SwuLogo } from "../../images/LandingPage/swu_likelion_logo.svg";
import { ReactComponent as HomepageLogo } from "../../images/LandingPage/likelion_logo.svg";
import Nav from "../../components/Nav";

const LandingPage = () => {
  return (
    <div className="container">
      <Nav location="home" />
      <div className="title-container">
        <MainTitle className="main-title" />
        <SubTitle className="sub-title" />
        <Date className="date" />
      </div>

      <div className="board">
        <Link to="/guest">
          <PaperBoard />
        </Link>
        <div className="button-container">
          <Link to="/guest">
            <ViewButton />
          </Link>
          <Link to="/writing">
            <WriteButton />
          </Link>
        </div>
      </div>

      <div className="section">
        <FootPrint />
        <Introduction />
        <FootPrint />
        <div className="section-content">
          <p>
            설렘 가득했던 개강, 험난했던 시험 기간을 지나 어느덧 5월, 축제
            기간이 찾아왔습니다
          </p>
          <p>
            올해 서랑제는 ‘Re: record a pice of our youth’ 이라는 메세지를 담아, 우리의 청춘의 한 편을 녹화하
          </p>
          <p>
            서랑제 기간동안 학생회, 동아리가 준비한 다양한 부스와 공연을 알차게
            즐겨주시길 바랍니다
          </p>
        </div>
      </div>

      <div className="section">
        <FootPrint />
        <Schedule />
        <FootPrint />
        <div className="section-content">
          <div className="section-content-wrapper">
            <span className="date-container">상시</span>
            <p className="timetable-content">
              포토존(포토부스, 포토월) &lt;re:cord&gt; <br />
              휴식존 &lt;re:lax&gt;
              <br />
              예술전 &lt;[ ], 하겠습니다.&gt;
            </p>
          </div>
          <div className="section-content-wrapper">
            <span className="date-container">5월 23일(수)</span>
            <p className="timetable-content">
              11:00-17:00 <br />
              플리마켓 &lt;pleasu:re&gt; <br />
              오프라인 부스 &lt;re:member&gt;
            </p>
            <p className="timetable-content">
              11:00-21:00 <br />
              푸드트럭 &lt;re:cipe&gt;
            </p>
            <p className="timetable-content">
              18:30-21:30 <br />
              학우 버스킹
              <br />
              동아리(밴드) 및 아티스트 공연 &lt;re:prise&gt;
            </p>
            <p>*아티스트 라인업: 안예은</p>
          </div>
          <div className="section-content-wrapper">
            <span className="date-container">5월 24일(목)</span>
            <p className="timetable-content">
              11:00-17:00 <br />
              플리마켓 &lt;pleasu:re&gt; <br />
              오프라인 부스 &lt;re:member&gt;
            </p>
            <p className="timetable-content">
              11:00-21:00 <br />
              푸드트럭 &lt;re:cipe&gt;
            </p>
            <p className="timetable-content">
              18:30-21:30 <br />
              동아리(댄스) 및 아티스트 공연 &lt;re:prise&gt;
            </p>
            <p>*아티스트 라인업: 최예나</p>
          </div>
          <div className="section-content-wrapper">
            <span className="date-container">5월 25일(금)</span>
            <p className="timetable-content">
              11:00-17:00 <br />
              플리마켓 &lt;pleasu:re&gt; <br />
              오프라인 부스 &lt;re:member&gt;
            </p>
            <p className="timetable-content">
              11:00-21:00 <br />
              푸드트럭 &lt;re:cipe&gt;
            </p>
            <p className="timetable-content">
              18:00-20:00 <br />
              토크콘서트 &lt;re:spect&gt;
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <FootPrint />
        <Developers />
        <FootPrint />
        <div className="section-content">
          <SwuLogo className="logo-img" />
          <p className="likelion-title-text">
            서울여자대학교 개발 동아리 <br />
            멋쟁이사자처럼
          </p>

          <div className="main-footer">
            <div className="item-container">
              <a href="https://www.instagram.com/likelion_swu/">
                <InstagramLogo className="item-logo" />
              </a>
              <p className="footer-text">
                멋쟁이 사자처럼 <br />
                Instagram
              </p>
            </div>
            <div className="item-container">
              <a
                href="https://swulikelion.oopy.io/"
                target="_blank"
                rel="noreferrer"
              >
                <HomepageLogo className="item-logo" />
              </a>
              <p className="footer-text">
                멋쟁이 사자처럼 <br />
                Homepage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
