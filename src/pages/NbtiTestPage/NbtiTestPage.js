import React, { useState, useEffect } from "react";
import { ReactComponent as BackButton } from "../../images/NbtiTestPage/back_button.svg";
import questions from "./NbtiQuestionData";
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
    const len = searchParams.get("result")?.length ?? 0;
    setResult(searchParams.get("result")?.split("") ?? []);

    if (len < 11) {
      setQuestionId(searchParams.get("result")?.length ?? 0);
    } else {
      navigate("/nbti/test/result?" + searchParams.toString());
    }
  }, [searchParams, navigate]);

  const onClick = (type) => {
    const res = [...result, type];
    setResult(res);
    searchParams.set("result", res.join(""));
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
            {questions[questionId].question.split("\n").map((line) => (
              <p className="question-text">
                {line}
                <br />
              </p>
            ))}
          </div>
        </div>
        <div className={classNames("question-illust", `q${questionId + 1}`)} />
        <div className="answer-container">
          <p className="answer" onClick={() => onClick(0)}>
            {questions[questionId].answers[0].answer.split("\n").map((line) => (
              <p className="answer-text">
                {line}
                <br />
              </p>
            ))}
          </p>
          <p className="answer" onClick={() => onClick(1)}>
            {questions[questionId].answers[1].answer.split("\n").map((line) => (
              <p className="answer-text">
                {line}
                <br />
              </p>
            ))}
          </p>
        </div>
        <p className="question-count">{questionId + 1}/11</p>
      </div>
    </>
  );
};

export default NbtiTestPage;
