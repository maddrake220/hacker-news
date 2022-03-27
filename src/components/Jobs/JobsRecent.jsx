import styled from "styled-components";
import Job from "./Job";
import Loading from "../common/Loading";

const JobsRecent = ({ loading, list }) => {
  return (
    <StyledRecent>
      <header>
        <h3>Recent</h3>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="jobs-list">
          {list?.map((story, index) => (
            <Job key={index} story={story} />
          ))}
        </div>
      )}
    </StyledRecent>
  );
};

const StyledRecent = styled.section`
  position: relative;
  display: flex;
  align-items: center;

  > header {
    h3 {
      font-size: 0;
    }
  }
`;

export default JobsRecent;
