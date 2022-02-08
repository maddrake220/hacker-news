import styled from "styled-components";
import { substract } from "../utils/DateCalculation";
import TimeInfo from "./TimeInfo";
const Job = ({ story }) => {
  const {
    data: { title, time, url },
  } = story;

  const diff = substract(time);
  return (
    <StyledStory href={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="story-title">
          <p>{title && title}</p>
        </div>
      </a>

      <div className="story-info">
        <div>
          <span className="url">{url && url.split("/")[2]}</span>
        </div>
        <div className="time">
          <TimeInfo diff={diff} />
        </div>
      </div>
    </StyledStory>
  );
};
export default Job;

const StyledStory = styled.article`
  color: #fff;
  width: 350px;
  margin-bottom: 24px;
  position: relative;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.02em;

  .story-title {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  .story-info {
    margin-top: 12px;
    font-size: 12px;
    line-height: 14px;
    color: rgba(196, 196, 196, 0.52);
    display: flex;
    .time {
      position: absolute;
      right: 22px;
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
