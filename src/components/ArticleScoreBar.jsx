import styled from "styled-components";
import { SCORE_MAX_VALUE } from "../utils/constants";

const ScoreBar = ({ score }) => {
  return (
    <StyledScoreBar score={score}>
      <div className={`progress-icon`}>
        <span className="cannot-dragging">P</span>
      </div>
      <div className="score">{score}</div>
      <div className={`progress-bar`}>
        <div className={`progress`} />
      </div>
    </StyledScoreBar>
  );
};

export default ScoreBar;

const StyledScoreBar = styled.div`
  position: absolute;
  font-style: "Pretendard Variable";
  display: flex;
  align-items: center;

  > .progress-icon {
    border: 2px solid rgba(255, 255, 255, 0.87);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: black;
    > span {
      color: rgba(255, 255, 255, 0.87);
      font-weight: 700;
      font-size: 14px;
    }
  }
  > .score {
    margin-left: 4px;
    margin-right: 8px;
    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: rgba(255, 255, 255, 0.87);
  }
  > .progress-bar {
    height: 2px;
    width: 303px;
    background-color: #c4c4c4;
    margin-left: 6.67px;
    border-radius: 20px;
    > .progress {
      height: 2px;
      width: calc(
        (${(props) => (props.score > 500 ? "100" : (props.score / 500) * 100)}%)
      );
      border-radius: 20px;
      background: linear-gradient(
        90deg,
        rgba(150, 217, 255, 0) 0%,
        #03c1ff 63.57%,
        #4951ff 129.85%
      );
      > span {
        display: flex;
        justify-content: center;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
  .progress-bar.story-bar {
    height: 2px;
  }
`;
