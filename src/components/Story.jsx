import styled from "styled-components";
import ScoreBar from "./ScoreBar";
import CommentIcon from "../assets/Main1stCommentIcon.png";
const Story = ({ story, ranking }) => {
  const {
    data: { title, score, url, descendants },
  } = story;
  return (
    <StyledStory href={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="story-title">
          <span>{ranking}</span>
          <p>
            {title.slice(0, 68)}
            {title.length > 68 && <>...</>}
          </p>
        </div>
      </a>
      <ScoreBar score={score} barType="story-bar" />
      <div className="story-comment">
        <img src={CommentIcon} alt="comment" />
        <span>{descendants}</span>
      </div>
    </StyledStory>
  );
};
export default Story;

const StyledStory = styled.article`
  color: #fff;
  width: 390px;
  height: 90px;
  margin-top: 5px;
  background-color: #232429;
  position: relative;
  font-family: "Pretendard Variable";
  .story-title {
    margin: 16px 59px 0 35px;
    > span {
      position: absolute;
      top: 16px;
      left: 20px;
      font-weight: 400;
      line-height: 19.2px;
    }
    > p {
      display: block;
      margin-left: 15px;
      padding-top: 15px;
      color: #fff;
      font-weight: 300;
      line-height: 19.2px;
      letter-spacing: 2%;
    }
  }
  .story-comment {
    position: absolute;
    right: 19px;
    bottom: 18px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    font-family: "Pretendard Variable";
    color: #c0c4c7;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      margin-left: 3.6px;
    }
  }
`;
