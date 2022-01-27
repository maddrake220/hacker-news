import Story from "../components/Story";
import TodayTop from "../components/TodayTop";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { TypeTop } from "../utils/constants";
import styled from "styled-components";
const TopContainer = () => {
  const { isLoading, stories } = useDataFetcher(TypeTop);
  return (
    <StyledTopContainer>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {stories.map((story, index) => (
            <>
              {index === 0 ? (
                <TodayTop />
              ) : (
                <Story key={story.id} story={story} />
              )}
            </>
          ))}
        </>
      )}
    </StyledTopContainer>
  );
};

const StyledTopContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default TopContainer;
