import "./mostSearch.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MostSearch = () => {
  return (
    <div className="most-search container mt-5">
      <h3>TÌM KIẾM NHIỀU NHẤT</h3>
      <ul className="mt-3">
        <Swiper className="mySwiper" slidesPerView={5} spaceBetween={10}>
          <SwiperSlide>
            <li>
              <button>Halio</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Máy uốn tóc</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Bàn chải điện</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Mặt nạ</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Kem chống nắng</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>The auragins</button>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <button>Máy rửa mặt</button>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
};

export default MostSearch;
