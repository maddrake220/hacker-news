import styled from "styled-components";
import ScoreBar from "./ScoreBar";
import CommentInfo from "./CommentInfo";
const Story = ({ story, ranking }) => {
  const { id, title, score, url, descendants } = story;
  return (
    <StyledStory href={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="story-title">
          <span>{ranking && ranking}</span>
          <p>{title}</p>
        </div>
      </a>
      <div className="score-bar">
        <ScoreBar score={score} barType="story-bar" />
      </div>
      <div className="story-comment">
        <CommentInfo id={id} descendants={descendants} />
      </div>
    </StyledStory>
  );
};
export default Story;

const StyledStory = styled.article`
  color: #fff;
  margin: 5px 10px 0 10px;
  background-color: #232429;
  position: relative;
  font-family: "Pretendard Variable";
  .story-title {
    margin-left: 35px;
    padding-bottom: 36px;
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
  .score-bar {
    padding-top: 6px;
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
