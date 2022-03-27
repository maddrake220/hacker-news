import styled from "styled-components";
import { substract } from "../../utils/DateCalculation";
import ArticleScoreBar from "./ScoreBar2";
import CommentInfo from "./CommentInfo";
import TimeInfo from "./TimeInfo";
import UserInfoModal from "./UserInfoModal";
const Trending = ({ item }) => {
  const {
    data: { id, url, title, score, by, time, descendants },
  } = item;
  const diff = substract(time);
  return (
    <StyledTrending>
      <div className="trending-wrap">
        <a href={url} target="_blank" rel="noreferrer">
          <div className="url">
            <span>{url && url.split("/")[2]}</span>
          </div>
          <div className="title">
            <span>{title}</span>
          </div>
        </a>
        <div className="score-bar">
          <ArticleScoreBar score={score} barType="trending" />
        </div>
        <div className="story-info">
          <div>
            <UserInfoModal by={by} />
          </div>
          <div>
            <TimeInfo diff={diff} />
          </div>
          <div className="comments">
            <CommentInfo
              id={id}
              descendants={descendants}
              style={{ color: "rgba(196, 196, 196, 0.52)" }}
            />
          </div>
        </div>
      </div>
    </StyledTrending>
  );
};

export default Trending;

const StyledTrending = styled.div`
  margin-top: 55px;
  background: #232429;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  min-height: 360px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.87);
  .trending-wrap {
    margin-left: 16px;
  }
  .url {
    margin-top: 16px;
  }
  .title {
    margin-top: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-right: 20px;
  }
  .score-bar {
    margin-top: 20px;
  }
  .story-info {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 10px;
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
    .comments {
      position: absolute;
      right: 0;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      > span {
        margin-left: 4px;
      }
    }
  }
`;
