import styled from "styled-components";
import { SCORE_MAX_VALUE } from "../utils/constants";

const ScoreBar = ({ score, barType }) => {
  return (
    <StyledScoreBar className={`${barType}`} score={score}>
      <div className={`progress-icon ${barType}`}>
        <span className="cannot-dragging">P</span>
      </div>
      <div className={`progress-bar ${barType}`}>
        <div className={`progress ${barType}`}>
          {score && (
            <span>
              {score > Number(SCORE_MAX_VALUE) ? `${SCORE_MAX_VALUE}+` : score}
            </span>
          )}
        </div>
      </div>
    </StyledScoreBar>
  );
};

export default ScoreBar;

const StyledScoreBar = styled.div`
  position: absolute;
  width: 310px;
  height: 27px;
  bottom: 22px;
  margin-left: 24px;
  font-style: "Pretendard Variable";
  display: flex;
  align-items: center;
  &.story-bar {
    bottom: 15px;
    left: 12px;
    width: 350px;
    height: 16px;
  }
  > .progress-icon {
    background-color: #ff6666;
    width: 16.67px;
    height: 15px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    &.story-bar {
      width: 14.47px;
      height: 14.47px;
    }
    > span {
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
    }
  }
  > .progress-bar {
    height: 12px;
    width: 280px;
    background-color: #c4c4c4;
    margin-left: 6.67px;
    border-radius: 20px;
    > .progress {
      height: 12px;
      width: calc(
        (${(props) => (props.score > 500 ? "100" : (props.score / 500) * 100)}%)
      );
      border-radius: 20px;
      background: linear-gradient(
        90deg,
        #ff9696 0%,
        #ff0303 66.28%,
        #ff4949 129.85%
      );
      > span {
        display: flex;
        justify-content: center;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
      }
    }
    > .progress.story-bar {
      width: calc(
        (${(props) => (props.score > 500 ? "100" : (props.score / 500) * 100)}%)
      );
      height: 2px;
      > span {
        display: none;
      }
    }
  }
  .progress-bar.story-bar {
    height: 2px;
  }
`;
