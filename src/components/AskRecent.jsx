import styled from "styled-components";
import Loading from "./Loading";
import AskStory from "./AskStory";

const AskRecent = ({ loading, list }) => {
  return (
    <StyledAskRecent>
      <header>
        <h3>Recent</h3>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {list?.map((story, index) => (
            <AskStory key={index} story={story} />
          ))}
        </div>
      )}
    </StyledAskRecent>
  );
};

const StyledAskRecent = styled.section`
  height: 430px;
  position: relative;
  display: flex;
  align-items: center;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  > header {
    margin-bottom: 23px;
    h3 {
      font-size: 0;
    }
  }
`;

export default AskRecent;