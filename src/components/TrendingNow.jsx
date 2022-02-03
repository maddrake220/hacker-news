import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Trending from "./Trending";

const TrendingNow = ({ trendingList }) => {
  return (
    <StyledTrendingNow>
      <h3>Trending Now</h3>
      <Swiper>
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
  height: 250px;
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
`;
