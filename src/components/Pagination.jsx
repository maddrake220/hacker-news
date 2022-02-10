import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
const Pagination = ({ currentPage, pages, paginate }) => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <StyledPagination>
      <svg
        ref={prevRef}
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
        className={`swiper-button-prev`}
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.571068 15.1421L7.64214 8.07104L0.571068 0.999977"
          stroke="white"
          stroke-opacity="0.52"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
      <svg
        ref={nextRef}
        onClick={() => {
          swiperRef.current.swiper.slideNext();
        }}
        className="swiper-button-next"
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.571068 15.1421L7.64214 8.07104L0.571068 0.999977"
          stroke="white"
          stroke-opacity="0.52"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
