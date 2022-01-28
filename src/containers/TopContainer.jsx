import Story from "../components/Story";
import DateTop from "../components/DateTop";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { TYPETOP } from "../utils/constants";
import styled from "styled-components";
import Search from "../components/Search";
import DateTopDay from "../components/DateTopDay";
const TopContainer = () => {
  const { isLoading, stories } = useDataFetcher(TYPETOP);
  return (
    <StyledTopContainer>
      <Search />
      <DateTopDay />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {stories.map((story, index) => (
            <>
              {index === 0 ? (
                <DateTop key={index} story={story} ranking={index + 1} />
              ) : (
                <Story key={index} story={story} ranking={index + 1} />
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
