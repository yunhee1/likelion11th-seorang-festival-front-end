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
import { ReactComponent as CloseBtn } from "../../images/LandingPage/closebtn.svg";
import Nav from "../../components/Nav";
import $ from "jquery";

const LandingPage = () => {
  const showModal = () => {
    $(".modal").removeClass("hidden");
    $(".md_overlay").removeClass("hidden");
    $(".md_content").removeClass("hidden");
  };

  const onClickPhoto = () => {
    $(".md_content > h3").html("<포토부스 & 포토존>");
    $(".md_content > p").html(
      "Re:cord;<br/>찰칵!<br/>슈니들의 기억을 기록할 수 있는<br/>슈니네컷 포토부스<br/><br/><장소><br/>서울여자대학교 삼각숲<br/><br/><진행 내용><br/>서울여자대학교 총학생회 X 포토에이스<br/>슈니네컷<br/>서랑제 한정 도안으로 <br/>네컷 사진 촬영 진행 1+1 <br/><br/><도안안내><br/>2X6 사이즈 2종: 2장(1+1) 4,000원<br/>4X6 사이즈 2종: 2장(1+1) 5,000원<br/><br/><이용안내><br/>진행 대상:서울여자대학교 구성원<br/>진행장소: 삼각숲 포토부스<br/>이용기간: 5월 22일(월)~5월 30일(화)<br/><br/><유의사항><br/>결제 시 카드 및 현금, 계좌이체 가능<br/><br/>슈니들의 추억을 기록할 수 있는<br/>드로잉 포토존<br/><br/><장소><br/>서울여자대학교 한샘길<br/><br/><진행 내용><br/><RE:>도안 포토월에 남기고 싶은 기억들을 <br/>기록하기!<br/>비상이&대책이 등신대와 함께 <br/>편안한 휴식 즐기기!"
    );
    showModal();
  };
  const onClickRest = () => {
    $(".md_content > h3").html("<휴식존>");
    $(".md_content > p").html(
      "re:lax;<br/>나른하다<br/><br/>학업에 지친 슈니들을 위해 준비한 <br/>삼각숲 돗자리 피크닉<br/><br /><장소><br/>서울여자대학교 삼각숲<br/><br /><진행내용><br/>돗자리와 미니 테이블이 배치되어 있어<br/> 즐거운 피크닉 비상이,대책이 등신대와 함께<br/> 사진 촬영 가능"
    );
    showModal();
  };

  const onClickMarket = () => {
    $(".md_content > h3").html("<플리마켓>");
    $(".md_content > p").html(
      "pleasu:re;<br/>풍성하다<br/><br/>다양한 물품으로 가득한 플리마켓을 구경하고 소중한 물건을 구매해보세요!<br/><br/><장소><br/>서울여자대학교 제1과학관 앞<br/> 푸드트럭 맞은편 도로<br/><br/><진행 내용><br/>핸드메이드 악세사리, 도자식기, 인형,<br/> 과일팩 등 다양한 슈니네 상점 입점<br/><br/>*가격은 부스 별로 상이합니다."
    );
    showModal();
  };

  const onClickFood = () => {
    $(".md_content > h3").html("<푸드트럭>");
    $(".md_content > p").html(
      "re:cipe;<br/>다양한 푸드트럭에서 <br/>모두 함께 맛있는 음식을 즐겨보세요!<br/><br/><장소><br/>서울여자대학교 제1과학관 앞 도로 <br/><br/><라인업><br/>짱츄닭(닭꼬치)<br/>부부츄(칠리/크림새우)<br/>에이치(타코야끼)<br/>스테이킹 (스테이크)<br/>푸드진열장(홍콩에그와플)<br/>스낵런(터키케밥, 아이스크림)<br/>핫플(츄러스, 회오리감자)<br/><br/>*가격은 푸드트럭 별로 상이합니다."
    );
    showModal();
  };

  const onClickTalk = () => {
    $(".md_content > h3").html("<토크콘서트>");
    $(".md_content > p").html(
      "re:spect;<br/>연사님과 의미 있는 이야기를 함께 나누며 잊지 못할 추억을 되새겨 보세요!<br/><br/><장소><br/>학생누리관 소극장"
    );
    showModal();
  };

  const onClickBooth = () => {
    $(".md_content > h3").html("<오프라인 부스>");
    $(".md_content > p").html(
      "Re:member;<br/>재미가득<br/>모두가 함께하기에 즐거운<br/>단위/전공/동아리/업체 부스<br/><br/><장소><br/>서울여자대학교 잔디광장 및 만주대로<br/><br/><진행 내용><br/>오프라인 부스는 각 단위 및 학과/학부/전공별로 날짜가 상이하므로 각 단위별 공지를 확인해주세요!"
    );
    showModal();
  };

  return (
    <div className="container">
      {/* 모달창 */}
      <div className="modal hidden">
        <div
          className="md_overlay hidden"
          onClick={() => {
            $(".md_overlay").addClass("hidden");
            $(".md_content").addClass("hidden");
            $(".modal").addClass("hidden");
          }}
        ></div>
      </div>
      <div className="md_content hidden">
        <CloseBtn
          className="md_close"
          onClick={() => {
            $(".modal").addClass("hidden");
            $(".md_overlay").addClass("hidden");
            $(".md_content").addClass("hidden");
          }}
        ></CloseBtn>
        <h3>제목입니다</h3>
        <p>컨텐츠입니다.</p>
      </div>

      {/* 랜딩페이지 */}
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
            설렘 가득했던 개강,
            <br /> 험난했던 시험 기간을 지나 어느덧 5월,
            <br />
            축제기간이 찾아왔습니다.💃
          </p>
          <p>
            올해 서랑제는 <br />
            [Re: record a piece of our youth] <br />
            우리의 청춘의 한 편을 녹화하자는 메시지를 전하고 있습니다.
          </p>
          <p>
            슈니들의 청춘에 함께 기록되고 싶어, <br />
            저희 멋쟁이사자처럼에서 본 서비스를 <br />
            준비했습니다.
          </p>
          <p>
            슈냥이와 함께하는 냥BTI부터 <br /> 이번 서랑제에 어떤 마음으로
            참여하는지
            <br />
            남길 수 있는 게시판까지, <br />
            멋사와 함께 축제를 알차게 즐겨보아요!🦁
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
              ㅤ포토존(포토부스, 포토월) &lt;re:cord&gt;{" "}
              <button
                className="detail-view-btn"
                value="포토존"
                onClick={onClickPhoto}
              >
                ㅤ
              </button>
              <br />
              ㅤ휴식존 &lt;re:lax&gt;{" "}
              <button
                className="detail-view-btn"
                value="휴식존"
                onClick={onClickRest}
              >
                ㅤ
              </button>
              <br />
              ㅤ예술전 &lt;[ ], 하겠습니다.&gt;{" "}
            </p>
          </div>
          <div className="section-content-wrapper">
            <span className="date-container">5월 24일(수)</span>
            <p className="timetable-content">
              11:00-17:00 <br />
              ㅤ플리마켓 &lt;pleasu:re&gt;{" "}
              <button
                className="detail-view-btn"
                value="플리마켓"
                onClick={onClickMarket}
              >
                ㅤ
              </button>
              <br />
              오프라인 부스 &lt;re:member&gt;
            </p>
            <p className="timetable-content">
              11:00-21:00 <br />
              ㅤ푸드트럭 &lt;re:cipe&gt;
              <button
                className="detail-view-btn"
                value="푸드트럭"
                onClick={onClickFood}
              >
                ㅤ
              </button>
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
            <span className="date-container">5월 25일(목)</span>
            <p className="timetable-content">
              11:00-17:00 <br />
              ㅤ플리마켓 &lt;pleasu:re&gt;               <button
                className="detail-view-btn"
                value="플리마켓"
                onClick={onClickMarket}
              >
                ㅤ
              </button><br />
              오프라인 부스 &lt;re:member&gt;
            </p>
            <p className="timetable-content">
              11:00-21:00 <br />
              ㅤ푸드트럭 &lt;re:cipe&gt;
              <button
                className="detail-view-btn"
                value="푸드트럭"
                onClick={onClickFood}
              >
                ㅤ
              </button>
            </p>
            <p className="timetable-content">
              18:30-21:30 <br />
              동아리(댄스) 및 아티스트 공연 &lt;re:prise&gt;
            </p>
            <p>*아티스트 라인업: 최예나</p>
          </div>
          <div className="section-content-wrapper">
            <span className="date-container">5월 26일(금)</span>
            <p className="timetable-content">
              11:00-17:00 <br />
              플리마켓 &lt;pleasu:re&gt;{" "}
              <button
                className="detail-view-btn"
                value="플리마켓"
                onClick={onClickMarket}
              >
                ㅤ
              </button>
              <br />
              오프라인 부스 &lt;re:member&gt;
              <button
                className="detail-view-btn"
                value="오프라인부스"
                onClick={onClickBooth}
              >
                ㅤ
              </button>
            </p>
            <p className="timetable-content">
              11:00-18:00 <br />
              ㅤ푸드트럭 &lt;re:cipe&gt;
              <button
                className="detail-view-btn"
                value="푸드트럭"
                onClick={onClickFood}
              >
                ㅤ
              </button>
            </p>
            <p className="timetable-content">
              18:00-20:00 <br />
              ㅤ토크콘서트 &lt;re:spect&gt;
              <button
                className="detail-view-btn"
                value="토크콘서트"
                onClick={onClickTalk}
              >
                ㅤ
              </button>
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
