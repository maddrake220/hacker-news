import styled from "styled-components";
import Loading from "./Loading";
import SearchInput from "./SearchInput";
import Story from "./Story";
import DateTopDay from "./DateTopDay";
import SwiperDateTop from "./SwiperDateTop";
import { useEffect } from "react";
import LOGO from "../assets/LOGO.png";
import USER_AVATAR from "../assets/UserAccountProfile1.png";
const TopList = ({ loading, list, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <StyledTopList>
      <header>
        <h2>TopStories</h2>
        <img className="hackernews-logo" src={LOGO} alt="hackernewslogo"></img>
        <img className="useravatar" src={USER_AVATAR} alt="useravatar"></img>
      </header>

      <SearchInput />
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

  > header {
    padding-top: 49px;
    padding-bottom: 38px;
    > h2 {
      font-size: 0;
    }
    .hackernews-logo {
      position: absolute;
      top: 49px;
      left: 20px;
    }
    .useravatar {
      position: absolute;
      top: 49px;
      right: 28.56px;
    }
  }
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
