"use client";
import styles from "./Quote.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";

export function Quote() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.slide}>
        <div className={styles.clientQuoteContainer}>
          <p className={styles.clientQuotePara}>
            &quot;Sam Pausha Coaching played a pivotal role in my 5k success.
            Sam&apos;s personalized training and constant encouragement not only
            got me across the finish line but also instilled a newfound love for
            running in my life.&quot;
          </p>
          <div>
            <p className={styles.medium}>Kevin H.</p>
            <p className={styles.fontFourteen}>
              Personalized 5k Training Program
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.clientQuoteContainer}>
          <p className={styles.clientQuotePara}>
            &quot;Sam Pausha Coaching took my sprint triathlon performance to
            new heights, guiding me with a personalized plan that surpassed all
            expectations. His expertise and support not only accelerated my
            progress but also made the entire journey an immensely rewarding
            experience.&quot;
          </p>
          <div>
            <p className={styles.medium}>David D.</p>
            <p className={styles.fontFourteen}>Triathalon Training Program</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.clientQuoteContainer}>
          <p className={styles.clientQuotePara}>
            &quot; Thanks to Sam Pausha&apos;s coaching, I conquered my
            first-ever 5K with a sense of accomplishment and a time beyond my
            expectations. His personalized training plan and motivational
            support were key factors in transforming a novice runner like me
            into a successful 5K finisher.&quot;
          </p>
          <div>
            <p className={styles.medium}>Hunter R</p>
            <p className={styles.fontFourteen}>Couch to 5k Training Program</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.clientQuoteContainer}>
          <p className={styles.clientQuotePara}>
            &quot; Sam was the motivational catalyst I needed to kickstart my
            fitness journey after a period of inactivity. His encouragement and
            tailored approach not only got me back on track but also propelled
            me to achieve my fitness goals with newfound enthusiasm.&quot;
          </p>
          <div>
            <p className={styles.medium}>Ben R</p>
            <p className={styles.fontFourteen}>Fitness Training Program</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

{
  /* <div className={styles.clientQuoteContainer}>
  <p className={styles.clientQuotePara}>
    &quot;Sam Pausha Coaching played a pivotal role in my 5k success.
    Sam&apos;s personalized training and constant encouragement not only got
    me across the finish line but also instilled a newfound love for running
    in my life.&quot;
  </p>
  <div>
    <p className={styles.medium}>Kevin H.</p>
    <p className={styles.fontFourteen}>Personalized 5k Training Program</p>
  </div>
</div> */
}
