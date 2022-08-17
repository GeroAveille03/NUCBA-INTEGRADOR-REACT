// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselImg } from "./HomeSty";

const CarouselHome = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      autoplay={true}
      loop={true}
    >
      <SwiperSlide>
        <CarouselImg src="https://i.imgur.com/SCv52yR.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselImg src="https://i.imgur.com/engd8Ai.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselImg src="https://i.imgur.com/r6FUzPe.png" alt="" />
      </SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
};

export default CarouselHome;
