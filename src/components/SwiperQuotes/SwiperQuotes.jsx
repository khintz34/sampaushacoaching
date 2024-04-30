"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Quote } from "../Quote/Quote";
import { QuoteData } from "../../data/QuoteData";
import styles from "./SwiperQuotes.module.scss";

export function SwiperQuotes() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {QuoteData.map((val, index) => {
        return (
          <SwiperSlide key={index}>
            <Quote quote={val.quote} name={val.name} type={val.type} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
