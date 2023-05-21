import React, { useState, useEffect } from "react";
import WritingNav from "../../components/WritingNav";
import ".//../../css/guestbook-page.scss";
import { Link } from "react-router-dom";
import { ReactComponent as PostBtn } from "../../images/GuestbookPage/postbutton.svg";
import { ReactComponent as Backbtn } from "../../images/GuestbookPage/backbutton.svg";
import { ReactComponent as WritingTitle } from '../../images/GuestbookPage/writingtitle.svg';
import initialContent from "./Content";

const PurpleMemoPage = () => {
  const [inputCount, setInputCount] = useState(0);

  const [contents, setContents] = useState(initialContent);
  const [inputText, setInputText] = useState("");

  const handleAddContent = () => {
    const newContent = {
      id: contents.length + 1,
      text: inputText,
      color: 'purple',
    };

    setContents([...contents, newContent]);
    setInputText('');
  };

  const onChangeHandler = e => {
    setInputCount(e.target.value.length);
    setInputText(e.target.value);
  };

  useEffect(() => {
    console.log(contents);
  }, [contents]);

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
      <WritingNav location="purplememo" />
      <div className="purple-memo-container">

        <textarea
          onChange={onChangeHandler}
          className="textbox"
          maxLength={100}
          id="inputText"
          value={inputText}
        ></textarea>

        <div className="textlength">
          <p className="contentlength">
            <span>{inputCount}</span>
            <span>/100</span>
          </p>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={handleAddContent}>
          <Link to="/guest">
            <PostBtn />
          </Link>
        </button>
      </div>

    </div>
  );
};

export default PurpleMemoPage;

