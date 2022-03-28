import styled from "styled-components";
import HackerNewsLogo from "./HackerNewsLogo";
import Loading from "../common/Loading";
import SearchInput from "../common/SearchInput";
import Story from "../common/Story";
import DateTopDay from "./DateTopDay";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DateTop from "./DateTop";
import UserInfoModal from "../common/UserInfoModal";
import ErrorMessage from "../common/ErrorMessage";
const TopList = ({ error, loading, list, getData }) => {
  const [slideState, setSlideState] = useState(0);
  useEffect(() => {
    getData();
  }, [getData]);
  if (error !== null) return <ErrorMessage message={error} />;
  return (
    <StyledTopList>
      <header>
        <h2>TopStories</h2>
        <HackerNewsLogo />
        <div className="useravatar">
          <UserInfoModal by={1234} isOwnUser={true} from="home" />
        </div>
      </header>

      <SearchInput />
      <DateTopDay slideState={slideState} />
      {loading ? (
        <Loading style={{ top: "300px" }} />
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
  .top-list {
    min-width: 410px;
    width: 60%;
  }
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
      right: 18.56px;
    }
  }
`;

export default TopList;
