import React, { useState } from "react";
import "../../css/guestbook-page.scss";
// import { ReactComponent as PinkMemo } from "../../images/GuestbookPage/PinkMemo.svg";
import { ReactComponent as BrownMemo } from "../../images/GuestbookPage/BrownMemo.svg";
import { ReactComponent as GreenMemo } from "../../images/GuestbookPage/GreenMemo.svg";
import { ReactComponent as YellowMemo } from "../../images/GuestbookPage/YellowMemo.svg";
import { ReactComponent as PinkMemo } from "../../images/GuestbookPage/pinkmemo.svg";
import { ReactComponent as Plusbtn } from "../../images/GuestbookPage/plus_button.svg";
import initialContent from "./Content";
import ContentList from "./ContentList";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
export function handleAddContent(){};
const GuestbookPage = () => {
  const [content, setContent] = useState(initialContent);
  // const [text, setText] = useState("");
  // const [color, setColor] = useState("");

  let visitnum = 10;
  // const reverse = ContentList.contents.reverse()
  // const handleAddContent = () => {
  //   const newContent = {
  //     id: content.length + 1,
  //     text: text,
  //     color: color,
  //   };

  //   setContent([...content, newContent]);
  //   setText("");
  //   setColor("");
  // };

   return (
    <div className="container">
      <Nav location="guestbook" />
      <p className='guest-title'> 지금까지 {visitnum} 발자국이 찍혔어요! </p>
      <div className="content-container">
        <div className="memo">
          <div>
            <ContentList contents={content} />
          </div>
        </div>

        <div className="plusbtn">
          <Link to="/writing">
            <Plusbtn />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default GuestbookPage;