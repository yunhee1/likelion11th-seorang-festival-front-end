import React, { useState, useEffect } from "react";
import "../../css/guestbook-page.scss";
import ContentList from "./ContentList";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Nav";
import plusBtn from "../../images/GuestbookPage/plus_btn.png";

export function handleAddContent() {}
const GuestbookPage = () => {
  const [content, setContent] = useState();
  const [visitNum, setVisitNum] = useState();

  useEffect(() => {
    const client = axios.create({
      baseURL: "http://43.201.176.26:8080",
      proxy: {
        host: "127.0.0.1",
        port: 3000,
      },
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": `http://localhost:3000/`,
      },
    });

    client.get("/api/letter").then((res) => {
      setContent(res.data.letters);
      setVisitNum(res.data.total);
    });
  }, []);

  return (
    <div className="container">
      <Nav location="guestbook" />
      {content ? (
        <div className="guestbook-container">
          <p className="guest-title">지금까지 {visitNum} 발자국이 찍혔어요!</p>
          <div className="content-container">
            <div className="memo">
              <div>
                <ContentList contents={content} />
              </div>
            </div>

            <div>
              <Link to="/writing">
                <img
                  src={plusBtn}
                  className="plus-btn"
                  alt="게시글 작성 버튼"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GuestbookPage;
