import { Autoplay } from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { styled } from "styled-components";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.min.css";

export default function SwiperComponent() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
      }}
      spaceBetween={37}
      slidesPerView={1}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Event />
        <H1>26th Tbilisi Jazz Festival</H1>
        <P>Sheraton Grand Tbilisi Metechi Palace</P>
      </SwiperSlide>

      <SwiperSlide>
        <Event />
        <H1>26th Tbilisi Jazz Festival</H1>
        <P>Sheraton Grand Tbilisi Metechi Palace</P>
      </SwiperSlide>

      <SwiperSlide>
        <Event />
        <H1>26th Tbilisi Jazz Festival</H1>
        <P>Sheraton Grand Tbilisi Metechi Palace</P>
      </SwiperSlide>

      <SwiperSlide>
        <Event />
        <H1>26th Tbilisi Jazz Festival</H1>
        <P>Sheraton Grand Tbilisi Metechi Palace</P>
      </SwiperSlide>
    </Swiper>
  );
}

const Event = styled.div`
  width: 100%;
  background: #d9d9d9;
  border-radius: 8px;
  height: 178px;
`;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-top: 16px;
  color: #555454;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 8px;
  color: #555454;
`;
