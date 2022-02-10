import styled from "styled-components";
import Trending from "./Trending";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const TrendingNow = ({ trendingList }) => {
  return (
    <StyledTrendingNow>
      <h3>Trending Now</h3>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        style={{ height: "273px" }}
      >
        {trendingList &&
          trendingList.map((item) => (
            <SwiperSlide>
              <Trending item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledTrendingNow>
  );
};

export default TrendingNow;

const StyledTrendingNow = styled.section`
  width: 390px;
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
