import React, { useState, useEffect } from "react";
import { ReactComponent as Cat } from "../../images/NbtiResultPage/cat_icon.svg";
import { ReactComponent as MiniCat } from "../../images/NbtiResultPage/cat_loading.svg";
import "../../css/nbti-result-loading.scss";
import "../../css/nbti-result.scss";
import classNames from "classnames";
import Nav from "../../components/Nav";
import { ReactComponent as Restart } from "../../images/NbtiResultPage/test_restart.svg";
import { ReactComponent as Sharing } from "../../images/NbtiResultPage/result_sharing.svg";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import Result from "../NbtiTestPage/NbtiResultData";

const NbtiResult = () => {
  const [loading, setLoading] = useState(true);

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("result");

  const [result, setResult] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading1(true);

      setTimeout(() => {
        setLoading2(true);

        setTimeout(() => {
          setLoading3(true);

          setTimeout(() => {
            // 정답 계산
            const num = params.split("").filter((v) => v === "0").length;

            switch (num) {
              case 10:
              case 11:
                setResult(0);
                break;
              case 6:
              case 7:
                setResult(1);
                break;
              case 8:
              case 9:
                setResult(2);
                break;
              case 5:
              case 4:
                setResult(3);
                break;
              case 3:
              case 2:
                setResult(4);
                break;
              case 1:
              case 0:
                setResult(5);
                break;
              default:
                console.log("오류");
            }

            setLoading(false);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, [params]);

  const location = useLocation();

  const baseUrl = "https://re-seorang.swygbro.com";

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("공유 링크가 복사되었습니다!");
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <div className="container">
      <div className="loading-container">
        <div className="loading-transition">
          <Cat />
          <div className="loading-text">
            <p>곧 결과가 나온다냥</p>
            <p>잠시만 기다려주세옹</p>
          </div>
          <MiniCat className={classNames("indicator", { loading1 })} />
          <MiniCat className={classNames("indicator", { loading2 })} />
          <MiniCat className={classNames("indicator", { loading3 })} />
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <Nav location="nbti" />
      <div className="result-container">
        <p className="result-text">당신의 냥BTI는</p>
        <p className="result-text-title">{Result[result].name}</p>
        <div className={classNames("result-image", `id${result}`)} />
        <div
          className={classNames("feature-container", "feature1", `id${result}`)}
        >
          <p>{Result[result].feature.feat_1}</p>
        </div>
        <div
          className={classNames("feature-container", "feature2", `id${result}`)}
        >
          <p>{Result[result].feature.feat_2}</p>
        </div>
        <div
          className={classNames("feature-container", "feature3", `id${result}`)}
        >
          <p>{Result[result].feature.feat_3}</p>
        </div>
        <div
          className={classNames("feature-container", "feature4", `id${result}`)}
        >
          <p>{Result[result].feature.feat_4}</p>
        </div>
        <div
          className={classNames("feature-container", "feature5", `id${result}`)}
        >
          <p>{Result[result].feature.feat_5}</p>
        </div>
      </div>
      <div className="buttons-container">
        <Link to="/nbti/test">
          <Restart className="result-button" />
        </Link>
        <Sharing
          className="result-button"
          onClick={() =>
            handleCopyClipBoard(
              `${baseUrl}${location.pathname}${location.search}`
            )
          }
        />
      </div>
    </div>
  );
};

export default NbtiResult;
