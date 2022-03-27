import styled from "styled-components";

const ScoreBar = ({ score, barType }) => {
  return (
    <StyledScoreBar score={score}>
      <div className={`progress-icon ${barType}`}>
        <span className="cannot-dragging">P</span>
      </div>
      <div className={`score ${barType}`}>{score}</div>
      <div className={`progress-bar ${barType}`}>
        <div className={`progress ${barType}`} />
      </div>
    </StyledScoreBar>
  );
};

export default ScoreBar;

const StyledScoreBar = styled.div`
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
    color: rgba(255, 255, 255, 0.87);
    &.ask-trend-bar {
      border: none;
      background-color: #ff6666;
      width: 14px;
      height: 14px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
    }
    > span {
      font-weight: 700;
      font-size: 14px;
    }
    &.trending {
      display: none;
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
    &.trending {
      display: none;
    }
    &.ask-bar {
      display: none;
    }
  }
  > .progress-bar {
    height: 2px;
    width: 80%;
    background-color: #c4c4c4;
    margin-left: 6.67px;
    border-radius: 20px;
    &.trending {
      width: 84%;
    }
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
      &.ask-trend-bar {
        background: linear-gradient(
          90deg,
          #ff9696 0%,
          #ff0303 66.28%,
          #ff4949 129.85%
        );
      }
    }
  }
  .progress-bar.story-bar {
    height: 2px;
  }
`;
