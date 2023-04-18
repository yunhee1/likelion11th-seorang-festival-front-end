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
import { ReactComponent as ScheduleDetail } from "../../images/LandingPage/schedule_detail.svg";
import { ReactComponent as SwuLogo } from "../../images/LandingPage/likelion_swu_logo.svg";

const LandingPage = () => {
  return (
    <div className="container">
      <MainTitle className="main-title" />
      <SubTitle className="sub-title" />
      <Date className="date" />

      <div className="board">
        <Link to="/guest">
          <PaperBoard />
        </Link>
        <div className="button-container">
          <Link to="/guest">
            <ViewButton />
          </Link>
          <WriteButton />
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
            올해 서랑제는 ‘like-lion’ 이라는 메세지를 담아, 멋쟁이 사자처럼
            ~~하길 바라는 마음으로 준비했습니다.
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
          <p>5월 23일(수)</p>
          <p>
            20:00 동아리 공연 <br />
            21:00 박채연 공연
          </p>

          <br />
          <p>5월 24일(목)</p>
          <p>
            20:00 동아리 공연 <br />
            21:00 허지윤 공연
          </p>

          <br />
          <p>5월 25일(금)</p>
          <p>
            20:00 동아리 공연 <br />
            21:00 멋쟁이 사자처럼 공연
          </p>
        </div>
      </div>

      <ScheduleDetail className="schedule-detail" />

      <div className="section">
        <FootPrint />
        <Developers />
        <FootPrint />
        <div className="section-content">
          <SwuLogo />
          <p>
            서울여자대학교 웹개발 동아리 <br />
            멋쟁이사자처럼 11기
          </p>
          <p>
            디자인 - 박채연, 허지윤 <br />
            프론트엔드 - 채유빈, 황윤희 <br />
            백엔드 - 장효선, 홍정민
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="item-container">
          <div className="item" />
          <p>
            멋사 <br />
            인스타그램
          </p>
        </div>
        <div className="item-container">
          <div className="item" />
          <p>
            멋사 <br />
            홈페이지
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
