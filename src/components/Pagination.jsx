import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Arrow_Icon from "../assets/VectorArrow.png";
import { useRef } from "react";
const Pagination = ({ currentPage, pages, paginate }) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <StyledPagination>
      <img
        ref={prevRef}
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
        className={`swiper-button-prev`}
        src={Arrow_Icon}
        alt=""
      />
      <Swiper
        onSwiper={() => prevRef.current.classList.add("swiper-button-disabled")}
        onSlideChange={(swiper) => {
          swiper.isBeginning
            ? prevRef.current.classList.add("swiper-button-disabled")
            : prevRef.current.classList.remove("swiper-button-disabled");
          swiper.isEnd
            ? nextRef.current.classList.add("swiper-button-disabled")
            : nextRef.current.classList.remove("swiper-button-disabled");
        }}
        ref={swiperRef}
        slidesPerGroup={5}
        slidesPerView={5}
        style={{ width: "150px" }}
      >
        {pages &&
          pages.map((number) => (
            <SwiperSlide>
              <span
                className={`page-link ${
                  currentPage === number ? `active` : ``
                }`}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </span>
            </SwiperSlide>
          ))}
      </Swiper>
      <img
        ref={nextRef}
        onClick={() => {
          swiperRef.current.swiper.slideNext();
        }}
        className="swiper-button-next"
        src={Arrow_Icon}
        alt=""
      />
    </StyledPagination>
  );
};

const StyledPagination = styled.nav`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-top: 10px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  .page-link {
    cursor: pointer;
    &.active {
      color: #96d9ff;
    }
  }
  .swiper-button-prev {
    cursor: pointer;
    position: absolute;
    left: 100px;
    transform: rotate(180deg);
    &.swiper-button-disabled {
      display: none;
    }
  }
  .swiper-button-next {
    cursor: pointer;
    position: absolute;
    right: 100px;
    &.swiper-button-disabled {
      display: none;
    }
  }
`;
export default Pagination;
