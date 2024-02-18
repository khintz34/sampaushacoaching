"use client";
import styles from "./SwiperPlans.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { PlanData } from "../../assets/data/PlanData";
import { FitnessPlan } from "../FitnessPlan/FitnessPlan";

export function SwiperPlans() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {PlanData.map((value, index) => {
        return (
          <SwiperSlide className={styles.slide} key={`swiper-${index}`}>
            <FitnessPlan
              planName={value.name}
              planAttributes={value.attributes}
              planColor={value.color}
              key={index}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
