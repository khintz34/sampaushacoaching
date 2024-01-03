"use client";
import styles from "./SwiperQuotes.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Quote } from "../Quote/Quote";

export function SwiperQuotes() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.slide}>
        <Quote
          quote="Sam Pausha Coaching played a pivotal role in my 5k success.
        Sam's personalized training and constant encouragement not only
        got me across the finish line but also instilled a newfound love for
        running in my life."
          name="Kevin H"
          type=" Personalized 5k Training Program"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Quote
          quote="Sam Pausha Coaching took my sprint triathlon performance to
          new heights, guiding me with a personalized plan that surpassed all
          expectations. His expertise and support not only accelerated my
          progress but also made the entire journey an immensely rewarding
          experience."
          name="David D."
          type="Triathalon Training Program"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Quote
          quote="Thanks to Sam Pausha's coaching, I conquered my
          first-ever 5K with a sense of accomplishment and a time beyond my
          expectations. His personalized training plan and motivational
          support were key factors in transforming a novice runner like me
          into a successful 5K finisher."
          name="Hunter R"
          type="Couch to 5k Training Program"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Quote
          quote="Sam was the motivational catalyst I needed to kickstart my
          fitness journey after a period of inactivity. His encouragement and
          tailored approach not only got me back on track but also propelled
          me to achieve my fitness goals with newfound enthusiasm."
          name="Ben R"
          type="Fitness Training Program"
        />
      </SwiperSlide>
    </Swiper>
  );
}
