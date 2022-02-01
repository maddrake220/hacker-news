import Story from "../components/Story";
import { useDataFetcher } from "../hooks/useDataFetcher";
import { TYPETOP } from "../utils/constants";
import styled from "styled-components";
import Search from "../components/Search";
import DateTopDay from "../components/DateTopDay";
import SwiperDateTop from "../components/SwiperDateTop";
import Loading from "../components/Loading";
const TopContainer = () => {
  const { isLoading, stories } = useDataFetcher(TYPETOP);

  return (
    <StyledTopContainer>
      <Search />
      <DateTopDay />
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <ul>
          {stories.map((story, index) => (
            <li>
              {index === 0 ? (
                <SwiperDateTop key={index} story={story} ranking={index + 1} />
              ) : (
                <Story key={index} story={story} ranking={index + 1} />
              )}
            </li>
          ))}
        </ul>
      )}
    </StyledTopContainer>
  );
};

const StyledTopContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > ul {
    height: 694px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default TopContainer;
