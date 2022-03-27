import styled from "styled-components";
import ArticleScoreBar from "../common/ScoreBar2";
import { substract } from "../../utils/DateCalculation";
import CommentInfo from "../common/CommentInfo";
import UserInfoModal from "../common/UserInfoModal";
import TimeInfo from "../common/TimeInfo";
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
          <TimeInfo diff={diff} />
        </div>
        <div className="story-comment">
          <CommentInfo
            id={id}
            descendants={descendants}
            style={{ color: "rgba(196, 196, 196, 0.52)" }}
          />
        </div>
      </div>
    </StyledStory>
  );
};
export default AskStory;

const StyledStory = styled.article`
  color: #fff;
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
    margin-top: 5px;
    font-size: 12px;
    line-height: 14px;
    color: rgba(196, 196, 196, 0.52);
    display: flex;
    align-items: center;
    span {
      margin-left: 4px;
    }
    .story-user {
      margin-right: 16px;
    }
    .story-comment {
      position: absolute;
      right: 10px;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      justify-content: center;
      > span {
        margin-left: 4px;
      }
    }
  }
`;
