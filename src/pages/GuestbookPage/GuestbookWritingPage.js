import React, { useState } from "react";
// import WritingNav from "../../components/WritingNav";
import { Link } from "react-router-dom";
import { ReactComponent as GuideCat } from "../../images/GuestbookPage/guidecat.svg";
import { ReactComponent as Backbtn } from "../../images/GuestbookPage/backbutton.svg";
import { ReactComponent as WritingTitle } from "../../images/GuestbookPage/writingtitle.svg";
import classNames from "classnames";
import "../../css/guestbook-writing.scss";
import { ReactComponent as PinkCatIcon } from "../../images/GuestbookPage/pinkcat_icon.svg";
import { ReactComponent as YellowCatIcon } from "../../images/GuestbookPage/yellowcat_icon.svg";
import { ReactComponent as GreenCatIcon } from "../../images/GuestbookPage/greencat_icon.svg";
import { ReactComponent as BlueCatIcon } from "../../images/GuestbookPage/bluecat_icon.svg";
import { ReactComponent as PurpleCatIcon } from "../../images/GuestbookPage/purplecat_icon.svg";
import { ReactComponent as BrownCatIcon } from "../../images/GuestbookPage/browncat_icon.svg";

const GuestbookWritingPage = () => {
  const [memoBg, setMemoBg] = useState(0);
  const [preSelected, setPreSelected] = useState(true);
  const [inputCount, setInputCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const selectBg = (num) => {
    setPreSelected(false);
    setMemoBg(num);
  };

  // const onChangeHandler = (e) => {
  //   setInputCount(e.target.value.length);
  //   setInputText(e.target.value.slice(0,maxLength));
  // };

  return (
    <div className="container">
      <div className="backbtn-container">
        <Link to="/guest">
          <Backbtn />
        </Link>
      </div>

      <div>
        <WritingTitle />
      </div>

      {/* <WritingNav /> */}
      <div className="memo-selector">
        <PinkCatIcon className="memo-select-item" onClick={() => selectBg(1)} />
        <YellowCatIcon
          className="memo-select-item"
          onClick={() => selectBg(2)}
        />
        <GreenCatIcon
          className="memo-select-item"
          onClick={() => selectBg(3)}
        />
        <BlueCatIcon className="memo-select-item" onClick={() => selectBg(4)} />
        <PurpleCatIcon
          className="memo-select-item"
          onClick={() => selectBg(5)}
        />
        <BrownCatIcon
          className="memo-select-item"
          onClick={() => selectBg(6)}
        />
      </div>

      <div className="guide-content">
        <div
          className={classNames(
            preSelected === true ? "preSelect" : "postSelect"
          )}
        >
          <GuideCat />
          <h2 className="writing-guide-text">
            상단에 고양이를 클릭하면 <br /> 편지지를 선택할 수 있어요!
          </h2>
        </div>
        <div className={classNames(`background-${memoBg}`)}>
          <div className="pink-memo-container">
            <textarea
              onChange={onChangeHandler}
              className="textbox"
              maxLength={100}
              id="inputText"
              value={inputText}
            ></textarea>

            <div className="textlength middle-cat">
              <p className="contentlength">
                <span>{inputCount}</span>
                <span>/100</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestbookWritingPage;
