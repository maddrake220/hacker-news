import styled from "styled-components";
import Trending from "./Trending";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Loading from "./Loading";
const TrendingNow = ({ loading, trendingList }) => {
  return (
    <StyledTrendingNow>
      <h3>Trending Now</h3>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="trending-swiper"
        style={{ height: "273px", width: "70%" }}
      >
        {trendingList &&
          trendingList.map((item) => (
            <SwiperSlide className="trending-slide">
              <Trending item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledTrendingNow>
  );
};

export default TrendingNow;

const StyledTrendingNow = styled.section`
  position: relative;
  > h3 {
    position: absolute;
    top: 11px;
    left: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
  .trending-swiper {
    .swiper-wrapper {
      .trending-slide {
        margin-right: 20px;
      }
    }
  }
  .trending-slide {
  }
  .swiper-pagination {
    position: absolute;
    .swiper-pagination-bullet {
      background: rgba(196, 196, 196, 0.52);
      &.swiper-pagination-bullet-active {
        background-color: #96d9ff;
      }
    }
  }
`;
