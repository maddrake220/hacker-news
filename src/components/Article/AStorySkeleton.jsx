import styled from "styled-components";
const AStorySkeleton = () => {
  return (
    <StyledStory>
      <div className="url">github.com</div>
      <div className="story-title">
        <p>
          Helix – a kakoune / Neovim inspired editor, written in Rust , written
          in Rust
        </p>
      </div>

      <div className="score-bar"></div>
      <div className="story-info">
        <div className="story-user">yankcrime</div>
        <div className="story-time">5m</div>
        <div className="story-comment">3</div>
      </div>
    </StyledStory>
  );
};
export default AStorySkeleton;

const StyledStory = styled.article`
  color: #fff;
  margin-bottom: 49px;
  position: relative;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.02em;
  width: 95%;
  color: transparent;
  .url {
    font-size: 14px;
    line-height: 17px;
    background-color: gray;
  }
  .story-title {
    margin-top: 8px;
    width: 50%;
    height: 16px;
    background-color: gray;
  }
  .score-bar {
    height: 16px;
    width: 50%;
    margin-top: 9px;
    background-color: gray;
  }
  .story-info {
    margin-top: 16px;
    font-size: 12px;
    line-height: 14px;
    color: rgba(196, 196, 196, 0.52);
    display: flex;

    .story-time {
      color: transparent;
      width: 5%;
      background-color: gray;
    }
    .story-user {
      color: transparent;
      margin-right: 16px;
      background-color: gray;
    }
    .story-comment {
      color: transparent;
      width: 5%;
      background-color: gray;
      position: absolute;
      right: 20px;
      bottom: 0;
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
