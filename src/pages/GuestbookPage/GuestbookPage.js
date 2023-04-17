import React from "react";
import "../../css/guestbook-page.scss";
import { ReactComponent as PinkMemo } from "../../images/GuestbookPage/PinkMemo.svg";
import { ReactComponent as BrownMemo } from "../../images/GuestbookPage/BrownMemo.svg";
import { ReactComponent as GreenMemo } from "../../images/GuestbookPage/GreenMemo.svg";
import { ReactComponent as YellowMemo } from "../../images/GuestbookPage/YellowMemo.svg";

const GuestbookPage = () => {
  let visitnum = 10;

  return (
    <div className="container">
      <p> 지금까지 {visitnum} 발자국이 찍혔어요! </p>
      <div className="content">
        <div className="memo">
          <PinkMemo />
        </div>

        <div className="memo">
          <BrownMemo />
        </div>

        <div className="memo">
          <YellowMemo />
        </div>

        <div className="memo">
          <GreenMemo />
        </div>
      </div>
    </div>
  );
};

export default GuestbookPage;
