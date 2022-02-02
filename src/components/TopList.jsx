import styled from "styled-components";
import Loading from "./Loading";
import Search from "./Search";
import Story from "./Story";
import DateTopDay from "./DateTopDay";
import SwiperDateTop from "./SwiperDateTop";
import { useEffect } from "react";

const TopList = ({ loading, list, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <StyledTopList>
      <Search />
      <DateTopDay />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <ul>
          {list?.map((story, index) => (
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
    </StyledTopList>
  );
};

const StyledTopList = styled.section`
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

export default TopList;
