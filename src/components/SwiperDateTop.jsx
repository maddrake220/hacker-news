import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DateTop from "./DateTop";

const SwiperDateTop = ({ key, story, ranking }) => {
  return (
    <Swiper
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => {
        //
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
