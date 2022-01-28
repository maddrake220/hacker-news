import styled from "styled-components";
const Story = ({ story }) => {
  const {
    data: { title, score },
  } = story;
  return (
    <StyledStory>
      <div>{title}</div>
      <div>{score}</div>
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
