import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DateTop from "./DateTop";
import { useDispatch } from "react-redux";

const SwiperDateTop = ({ key, story, ranking }) => {
  return (
    <Swiper
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => {
        //dispatch(nextSlide(swiper.activeIndex));
      }}
      style={{ width: "390px" }}
      dir="rtl"
    >
      <SwiperSlide>
        <DateTop key={key} story={story} ranking={ranking} />
      </SwiperSlide>
      <SwiperSlide>
        <DateTop key={key} story={story} ranking={ranking} />
      </SwiperSlide>
      <SwiperSlide>
        <DateTop key={key} story={story} ranking={ranking} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperDateTop;
