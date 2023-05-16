import React, { useState, useEffect } from "react";
import { ReactComponent as BackButton } from "../../images/NbtiTestPage/back_button.svg";
import questions from "./NbtiQuestion";
import "../../css/nbti-test-page.scss";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { ReactComponent as TopLogo } from "../../images/NbtiTestPage/nbti_top_logo.svg";
import classNames from "classnames";

const NbtiTestPage = () => {
  const [questionId, setQuestionId] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const len = searchParams.get("res")?.length ?? 0;
    setResult(searchParams.get("res")?.split("") ?? []);

    if (len < 11) {
      setQuestionId(searchParams.get("res")?.length ?? 0);
    } else {
      navigate("/nbti/test/result?" + searchParams.toString());
    }
  }, [searchParams]);

  const onClick = (type) => {
    const res = [...result, type];
    setResult(res);
    searchParams.set("res", res.join(""));
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="top-nav">
        <Link to="../nbti">
          <BackButton className="back-button" />
        </Link>
        <TopLogo className="top-logo" />
        <div className="empty" />
        <div />
      </div>
      <div className="container">
        <div className="test-question-container">
          <div className="question-text-container">
            <p className="question-text">{questions[questionId].question}</p>
          </div>
        </div>
        <div className={classNames("question-illust", `q${questionId + 1}`)} />
        <div className="answer-container">
          <p className="answer" onClick={() => onClick(0)}>
            {questions[questionId].answers[0].answer}
          </p>
          <p className="answer" onClick={() => onClick(1)}>
            {questions[questionId].answers[1].answer}
          </p>
        </div>
        <p className="question-count">{questionId + 1}/11</p>
      </div>
    </>
  );
};

export default NbtiTestPage;
