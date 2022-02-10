import styled from "styled-components";
import Job from "./Job";
import Loading from "./Loading";

const JobsRecent = ({ loading, list }) => {
  return (
    <StyledRecent>
      <header>
        <h3>Recent</h3>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {list?.map((story, index) => (
            <Job key={index} story={story} />
          ))}
        </div>
      )}
    </StyledRecent>
  );
};

const StyledRecent = styled.section`
  height: 77vh;
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
    h3 {
      font-size: 0;
    }
  }
`;

export default JobsRecent;
