import React from "react";
import PinkEar from "../../images/GuestbookPage/pink_ear.svg";
import GreenEar from "../../images/GuestbookPage/green_ear.svg";
import PurpleEar from "../../images/GuestbookPage/purple_ear.svg";
import BrownHead from "../../images/GuestbookPage/browncat_head.svg";
import BlueHead from "../../images/GuestbookPage/bluecat_head.svg";
import YellowHead from "../../images/GuestbookPage/yellowcat_head.svg";

function ContentList({ contents }) {
  return (
    <div>
      {contents.map((content) => {
        
        if (content.background === 1){
          return (
            <div className='list-wrapper'>
              <div className="ear">
              <img src={PinkEar}/>
              </div>
              <li 
            key={content.id}
            style={{backgroundColor:"#FFD9EB"}}
            >
              {content.content}</li>
            </div>
          );
          
        } else if(content.background === 2){
          return (
            <div className='list-wrapper'>
              <div className="head">
              <img src={YellowHead}/>
              </div>
              <li 
            key={content.id}
            style={{backgroundColor:"#FFE8AA"}}
            >
              {content.content}</li>
            </div>
          );
         
        } else if(content.background === 3){
          return (
            <div className='list-wrapper'>
              <div className="ear">
              <img src={GreenEar}/>
              </div>
              <li 
            key={content.id}
            style={{backgroundColor:"#E2F9D8"}}
            >
              {content.content}</li>
            </div>
          );
        } 
        else if(content.background === 4){
          return (
            <div className='list-wrapper'>
            <div className="head">
            <img src={BlueHead}/>
            </div>
            <li 
          key={content.id}
          style={{backgroundColor:"#D3F5FA"}}
          >
            {content.content}</li>
          </div>
          );
        } else if(content.background === 5){
            return (
              <div className='list-wrapper'>
                <div className="ear">
                <img src={PurpleEar}/>
                </div>
                <li 
              key={content.id}
              style={{backgroundColor:"#E5DCFF"}}
              >
                {content.content}</li>
              </div>
            );
        } else{
          return (
            <div className='list-wrapper'>
            <div className="head">
            <img src={BrownHead}/>
            </div>
            <li 
          key={content.id}
          style={{backgroundColor:"#E4D6C1"}}
          >
            {content.content}</li>
          </div>
          );
          }}
      )}
    </div>
  );
}

export default ContentList;
