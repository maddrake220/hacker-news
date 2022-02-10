import styled from "styled-components";
import ArticleScoreBar from "./ArticleScoreBar";
import { substract } from "../utils/DateCalculation";
import TimeIcon from "../assets/icon-time.png";
import CommentInfo from "./CommentInfo";
import UserInfoModal from "./UserInfoModal";
const AskStory = ({ story }) => {
  const {
    data: { id, title, score, by, time, url, descendants },
  } = story;

  const diff = substract(time);
  return (
    <StyledStory href={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <span className="url">{url && url.split("/")[2]}</span>
        <div className="story-title">
          <p>{title && title}</p>
        </div>
      </a>
      <div className="score-bar">
        <ArticleScoreBar score={score} barType="ask-bar" />
      </div>
      <div className="story-info">
        <div className="story-user">
          <UserInfoModal by={by} />
        </div>
        <div className="story-time">
          <img src={TimeIcon} alt="" />
          <span>{diff}</span>
        </div>
      </div>
      <div className="story-comment">
        <CommentInfo
          id={id}
          descendants={descendants}
          style={{ color: "rgba(196, 196, 196, 0.52)" }}
        />
      </div>
    </StyledStory>
  );
};
export default AskStory;

const StyledStory = styled.article`
  color: #fff;
  width: 350px;
  height: 99px;
  margin-bottom: 24px;
  position: relative;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.02em;
  .url {
    font-size: 14px;
    line-height: 17px;
  }
  .story-title {
    margin-top: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
  .score-bar {
    margin-top: 8px;
  }
  .story-info {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 12px;
    line-height: 14px;
    color: rgba(196, 196, 196, 0.52);
    display: flex;
    span {
      margin-left: 4px;
    }
    .story-user {
      margin-right: 16px;
    }
  }
  .story-comment {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    > span {
      margin-left: 4px;
    }
  }
`;
