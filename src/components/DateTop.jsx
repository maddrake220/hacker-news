import styled from "styled-components";
import USER_ICON from "../assets/Main1stUserIcon.png";
import TIME_ICON from "../assets/Main1stTimeIcon.png";
import COMMENT_ICON from "../assets/Main1stCommentIcon.png";
import { substract } from "../utils/DateCalculation";
import { SCORE_MAX_VALUE } from "../utils/constants";

const TodayTop = ({ story, ranking }) => {
  const {
    data: { title, score, url, by, time, descendants },
  } = story;
  const diffTime = substract(time);

  return (
    <StyledDateTop>
      <div className="date-top-url">
        <span>{url.slice(0, 35)}...</span>
      </div>
      <div className="ranking">
        <span className="cannot-dragging">{ranking}</span>
      </div>
      <div className="date-top-title">
        <p>
          {title.slice(0, 75)}
          {title.length > 75 && <span>...</span>}
        </p>
      </div>
      <div className="date-top-info">
        <div>
          <img src={USER_ICON} alt="user"></img>
          <span>{by}</span>
        </div>
        <div>
          <img src={TIME_ICON} alt="time"></img>
          <span>{diffTime}</span>
        </div>
        <div>
          <img src={COMMENT_ICON} alt="comment"></img>
          <span>{descendants}</span>
        </div>
      </div>
      <div className="date-top-progress">
        <div className="progress-icon">
          <span className="cannot-dragging">P</span>
        </div>
        <div className="progress">
          <span>
            {score > Number(SCORE_MAX_VALUE) ? `${SCORE_MAX_VALUE}+` : score}
          </span>
        </div>
      </div>
    </StyledDateTop>
  );
};
export default TodayTop;

const StyledDateTop = styled.article`
  color: #fff;
  width: 350px;
  height: 345px;
  background: #282828;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  position: relative;
  > .date-top-url {
    margin: 8px 20px 0 24px;
    padding: 8px 0;
    display: flex;
    flex-direction: row-reverse;
    > span {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 12px;
      color: #c0c4c7;
    }
  }
  > .ranking {
    position: absolute;
    top: 48px;
    left: 24px;
    background-color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    > span {
      font-size: 24px;
      font-weight: 500;
      line-height: 28.8px;
      color: #232429;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  > .date-top-title {
    position: absolute;
    top: 90px;
    left: 24px;
    width: 255.23px;
    height: 116px;
    overflow: hidden;
    > p {
      margin-top: 0;
      font-family: "Pretendard Variable";
      font-weight: 800;
      font-size: 24px;
      color: #ff9696;
      line-height: 28.8px;
      letter-spacing: -1%;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  > .date-top-info {
    position: absolute;
    height: 26px;
    top: 216px;
    left: 24px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    font-size: "Roboto";
    line-height: 14.06px;
    > div {
      display: flex;
      align-items: center;
      > * {
        margin-right: 6px;
      }
    }
  }
  > .date-top-progress {
    position: absolute;
    width: 310px;
    height: 27px;
    bottom: 22px;
    margin-left: 24px;
    font-style: "Pretendard Variable";
    display: flex;
    align-items: center;
    > .progress-icon {
      background-color: #ff6666;
      width: 16.67px;
      height: 15px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      > span {
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
      }
    }
    > .progress {
      position: relative;
      height: 12px;
      width: 100%;
      margin-left: 6.67px;
      background: linear-gradient(
        90deg,
        #ff9696 0%,
        #ff0303 66.28%,
        #ff4949 129.85%
      );
      border-radius: 20px;
      > span {
        display: flex;
        justify-content: center;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
`;
