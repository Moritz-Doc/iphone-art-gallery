// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { dataInit } from "../assets/data";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default function SwiperModule() {
  console.log(dataInit);
  return (
    <Swiper
      className="swiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dataInit.map((element) => {
        return (
          <SwiperSlide key="element.slug" className="swiper-slide">
            <div className="wrapper">
              <Image
                src={element.imageSource}
                width={500}
                height={500}
                alt={element.slug}
              />
              <figcaption className="">
                <p>{element.title}</p>
                <p>{element.artist}</p>
                <p>{element.year}</p>
              </figcaption>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
