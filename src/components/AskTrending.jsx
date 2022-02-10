import styled from "styled-components";
import UserInfoModal from "./UserInfoModal";
import ArticleScoreBar from "./ArticleScoreBar";
import TimeInfo from "./TimeInfo";
import { substract } from "../utils/DateCalculation";
import FireIcon from "../assets/fire-icon.png";
import CommentInfo from "./CommentInfo";
const AskTrending = ({ item }) => {
  const {
    data: { id, by, time, title, score, descendants },
  } = item;
  const diff = substract(time);
  return (
    <StyledAskTrending>
      <img src={FireIcon} alt="" className="trend-icon" />
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
  width: 100%;
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
