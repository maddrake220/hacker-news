import styled from "styled-components";
import Loading from "./Loading";
import NewStory from "./NewStory";

const Recent = ({ loading, list }) => {
  return (
    <StyledRecent>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {list?.map((story, index) => (
            <NewStory key={index} story={story} />
          ))}
        </div>
      )}
    </StyledRecent>
  );
};

const StyledRecent = styled.section`
  height: 494px;
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
`;

export default Recent;
