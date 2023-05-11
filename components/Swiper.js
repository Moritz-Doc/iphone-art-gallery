// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { dataInit } from "../assets/data";
import Image from "next/image";
import SwipeNav from "./SwipeNav";
import { useState, useRef } from "react";
// Import Swiper styles
import "swiper/css";

export default function SwiperModule() {
  const [currentArtwork, setCurrentArtwork] = useState(dataInit[0]);
  const swiperRef = useRef()

  return (
    <>
      <Swiper
      ref={swiperRef}
        className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentArtwork(dataInit[swiper.activeIndex])}
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
      <SwipeNav currentArtwork={currentArtwork} swiper={swiperRef} />
    </>
  );
}
