import styled from "styled-components";
import Loading from "./Loading";
import SearchInput from "./SearchInput";
import Story from "./Story";
import DateTopDay from "./DateTopDay";
import { useEffect, useState } from "react";
import LOGO from "../assets/LOGO.png";
import USER_AVATAR from "../assets/UserAccountProfile1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import DateTop from "./DateTop";
const TopList = ({ loading, list, getData }) => {
  const [slideState, setSlideState] = useState(0);
  useEffect(() => {
    getData();
  }, [getData]);
  //list.forEach((v) => v[1].sort((a, b) => b.score - a.score));
  return (
    <StyledTopList>
      <header>
        <h2>TopStories</h2>
        <img className="hackernews-logo" src={LOGO} alt="hackernewslogo"></img>
        <img className="useravatar" src={USER_AVATAR} alt="useravatar"></img>
      </header>

      <SearchInput />
      <DateTopDay slideState={slideState} />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="date-top">
            <Swiper
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setSlideState(swiper.activeIndex);
              }}
              style={{
                width: "390px",
                marginBottom: "6px",
              }}
              dir="rtl"
            >
              {list?.map((story, i) => (
                <div>
                  {story[1].map((v, index) => (
                    <>
                      {index === 0 && i < 3 && (
                        <SwiperSlide>
                          <DateTop story={v} ranking={index + 1} />
                        </SwiperSlide>
                      )}
                    </>
                  ))}
                </div>
              ))}
            </Swiper>
          </div>
          <div className="top-list">
            {list?.map((story, i) => (
              <ul>
                {story[1].slice(0, 5).map((v, index) => (
                  <li>
                    {index !== 0 && i < 3 && i === slideState && (
                      <Story story={v} ranking={index + 1} />
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </>
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
`;

export default TopList;
