//글 작성 버튼 누르면 나오는 페이지
import React from 'react'; 
import WritingNav from "../../components/WritingNav";
import { Link } from "react-router-dom";

import { ReactComponent as GuideCat} from '../../images/GuestbookPage/guidecat.svg';
import { ReactComponent as Backbtn } from '../../images/GuestbookPage/backbutton.svg';
import { ReactComponent as WritingTitle } from '../../images/GuestbookPage/writingtitle.svg';

const WritingPage = () => {
  return (
    <div className="container">
      <div className = 'backbtn-container'>
        <Link to = '/guest'>
          <Backbtn />
        </Link>
      </div>

      <div>
        <WritingTitle   />
      </div>

        <WritingNav />
      <div className = 'guide-content'>
       <GuideCat />
    <h2>상단에 고양이를 클릭하면 <br/> 편지지를 선택할 수 있어요! </h2>
    </div>

    </div>
  );
};

export default WritingPage;
