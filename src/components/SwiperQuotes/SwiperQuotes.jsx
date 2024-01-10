"use client";
import styles from "./SwiperQuotes.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Quote } from "../Quote/Quote";
import { QuoteData } from "../../assets/data/QuoteData";

export function SwiperQuotes() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {QuoteData.map((val, index) => {
        return (
          <SwiperSlide className={styles.slide} key={`swiper-${index}`}>
            <Quote quote={val.quote} name={val.name} type={val.type} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
