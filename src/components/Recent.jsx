import styled from "styled-components";
import Loading from "./Loading";
import NewStory from "./NewStory";

const Recent = ({ loading, list }) => {
  return (
    <StyledRecent>
      <header>
        <h3>Recent</h3>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="recent-list">
          {list?.map((story, index) => (
            <NewStory key={index} story={story} />
          ))}
        </div>
      )}
    </StyledRecent>
  );
};

const StyledRecent = styled.section`
  margin-top: 20px;
  position: relative;
  display: flex;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Recent;
