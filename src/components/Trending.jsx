import styled from "styled-components";
import { substract } from "../utils/DateCalculation";
import UserIcon from "../assets/icon-user.png";
import ClockIcon from "../assets/icon-time.png";
import CommentIcon from "../assets/Main1stCommentIcon.png";
import ArticleScoreBar from "./ArticleScoreBar";
import CommentInfo from "./CommentInfo";
const Trending = ({ item }) => {
  const {
    data: { id, url, title, score, by, time, descendants },
  } = item;
  const diff = substract(time);
  return (
    <StyledTrending>
      <div className="url">
        <span>{url && url.split("/")[2]}</span>
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="score-bar">
        <ArticleScoreBar score={score} barType="trending" />
      </div>
      <div className="story-info">
        <div>
          <img src={UserIcon} alt="" />
          <span>{by}</span>
        </div>
        <div>
          <img src={ClockIcon} alt="" />
          <span>{diff}</span>
        </div>
      </div>
      <div className="comments">
        <CommentInfo id={id} descendants={descendants} />
      </div>
    </StyledTrending>
  );
};

export default Trending;

const StyledTrending = styled.div`
  margin-top: 55px;
  width: 305px;
  height: 180px;
  background: #232429;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  position: relative;
  color: #fff;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.87);
  > div {
    margin-left: 16px;
  }
  .url {
    margin-top: 16px;
  }
  .title {
    width: 273px;
    height: 72px;
    margin-top: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
  .score-bar {
    position: absolute;
    bottom: 49px;
  }
  .story-info {
    position: absolute;
    bottom: 16px;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: rgba(196, 196, 196, 0.52);
    display: flex;
    > div {
      display: flex;
      align-items: center;
      margin-right: 16px;
      > span {
        margin-left: 4px;
      }
    }
  }
  .comments {
    position: absolute;
    right: 18px;
    bottom: 18px;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    > span {
      margin-left: 4px;
    }
  }
`;
