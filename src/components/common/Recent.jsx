import styled from "styled-components";
import NewStory from "../Article/NewStory";

const Recent = ({ ids }) => {
  return (
    <StyledRecent>
      <header>
        <h3>Recent</h3>
      </header>
      <div className="recent-list">
        {ids?.map((id, index) => (
          <NewStory key={index} id={id} />
        ))}
      </div>
    </StyledRecent>
  );
};

const StyledRecent = styled.section`
  margin: 20px 20px 0 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  > header {
    h3 {
      position: absolute;
      top: 0;
      left: 20px;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.02em;
      color: rgba(255, 255, 255, 0.87);
    }
  }
  .recent-list {
    margin-top: 68px;
  }
`;

export default Recent;
