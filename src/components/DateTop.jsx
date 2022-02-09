import styled from "styled-components";
import TIME_ICON from "../assets/Main1stTimeIcon.png";
import { substract } from "../utils/DateCalculation";
import ScoreBar from "./ScoreBar";
import CommentInfo from "./CommentInfo";
import UserInfoModal from "./UserInfoModal";

const DateTop = ({ story, ranking }) => {
  const { id, title, score, url, by, time, descendants } = story;
  const diffTime = substract(time);

  return (
    <StyledDateTop dir="ltr">
      <div className="date-top-url">
        <span>{url && url.split("/")[2]}</span>
      </div>
      <div className="ranking">
        <span className="cannot-dragging">{ranking}</span>
      </div>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="date-top-title">
          <p>
            {title.slice(0, 75)}
            {title.length > 75 && <span>...</span>}
          </p>
        </div>
      </a>
      <div className="date-top-info">
        <UserInfoModal by={by} />
        <div>
          <img src={TIME_ICON} alt="time"></img>
          <span>{diffTime}</span>
        </div>
        <div className="story-comment">
          <CommentInfo id={id} descendants={descendants} />
        </div>
      </div>
      <ScoreBar score={score} />
    </StyledDateTop>
  );
};
export default DateTop;

const StyledDateTop = styled.article`
  color: #fff;
  width: 350px;
  height: 345px;
  background: #282828;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
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
  .date-top-title {
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
`;
