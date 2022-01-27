import styled from "styled-components";
const Story = ({ story }) => {
  return (
    <StyledStory>
      <div>{story.data.title}</div>
      <div>{story.data.score}</div>
    </StyledStory>
  );
};
export default Story;

const StyledStory = styled.article`
  color: #fff;
  width: 390px;
  height: 90px;
  margin-bottom: 5px;
  background-color: #232429;
`;
