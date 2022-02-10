import styled from "styled-components";
import UserInfoModal from "./UserInfoModal";
import ArticleScoreBar from "./ArticleScoreBar";
import TimeInfo from "./TimeInfo";
import { substract } from "../utils/DateCalculation";
import CommentInfo from "./CommentInfo";
const AskTrending = ({ item }) => {
  const {
    data: { id, by, time, title, score, descendants },
  } = item;
  const diff = substract(time);
  return (
    <StyledAskTrending>
      <svg
        className="trend-icon"
        width="15"
        height="20"
        viewBox="0 0 15 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3629 9.05106C13.9493 8.07432 13.348 7.19765 12.5966 6.4759L11.9765 5.87905C11.9555 5.85934 11.9302 5.84535 11.9028 5.83831C11.8753 5.83128 11.8467 5.83141 11.8194 5.83869C11.792 5.84597 11.7668 5.86019 11.7459 5.88009C11.725 5.89998 11.7091 5.92496 11.6996 5.95282L11.4226 6.78661C11.25 7.3097 10.9325 7.84395 10.4829 8.36927C10.4531 8.4028 10.419 8.41174 10.3956 8.41398C10.3721 8.41621 10.3359 8.41174 10.304 8.38045C10.2741 8.35362 10.2592 8.31339 10.2614 8.27315C10.3402 6.92744 9.95667 5.40962 9.11718 3.75766C8.42258 2.38513 7.45738 1.31438 6.25141 0.567762L5.37144 0.0245628C5.25639 -0.0469697 5.10937 0.0469166 5.11576 0.187746L5.16264 1.26073C5.1946 1.99394 5.11363 2.6422 4.92187 3.18093C4.6875 3.84037 4.35085 4.45287 3.92045 5.00277C3.62093 5.38494 3.28144 5.73061 2.90838 6.03329C2.00988 6.75793 1.27929 7.68643 0.771306 8.74929C0.264575 9.82141 0.00061824 11.0018 0 12.1985C0 13.2536 0.198153 14.2752 0.590198 15.2386C0.968748 16.1662 1.51504 17.0081 2.19886 17.7177C2.8892 18.433 3.69034 18.9963 4.58309 19.3875C5.50781 19.7943 6.48792 20 7.49999 20C8.51206 20 9.49218 19.7943 10.4169 19.3897C11.3074 19.0008 12.1173 18.4337 12.8011 17.7199C13.4915 17.0046 14.0327 16.1685 14.4098 15.2409C14.8012 14.28 15.0021 13.2456 15 12.2007C15 11.1099 14.7869 10.0503 14.3629 9.05106Z"
          fill="#C4C4C4"
          fill-opacity="0.52"
        />
      </svg>
      <div className="trend-wrap">
        <div className="trend-title">
          <span>{title}</span>
        </div>
        <div className="trend-score">
          <ArticleScoreBar score={score} barType="ask-trend-bar" />
        </div>
        <div className="trend-info">
          <UserInfoModal by={by} />
          <TimeInfo diff={diff} />
          <div className="trend-comment">
            <CommentInfo id={id} descendants={descendants} />
          </div>
        </div>
      </div>
    </StyledAskTrending>
  );
};

const StyledAskTrending = styled.div`
  margin-top: 10px;
  width: 99%;
  background: #232429;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: rgba(196, 196, 196, 0.52);
  position: relative;
  .trend-icon {
    position: absolute;
    left: 20px;
    top: 16px;
  }
  .trend-wrap {
    margin: 0 20px 0 43px;
    padding-top: 16px;
  }
  .trend-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.87);
  }
  .trend-info {
    margin-top: 15px;
    padding-bottom: 18px;
    display: flex;
    align-items: center;
    > * {
      margin-right: 4px;
    }
    .trend-comment {
      position: absolute;
      right: 18px;
    }
  }
  .trend-score {
    margin-top: 16px;
  }
`;
export default AskTrending;
