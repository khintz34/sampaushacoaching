"use client";
import Image from "next/image";
import styles from "./About.module.scss";
import ThumbsUp from "../../assets/images/ThumbsUpBikeVertical.jpg";
import classNames from "classnames";
import ArmsUp from "../../assets/images/DesMoinesArmsUp.jpg";
import { Qualifications } from "../Qualifications/Qualifications";

export function About() {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.imageMain}>
        <div className={styles.imageLayout}>
          <Image
            src={ArmsUp}
            height={300}
            width={200}
            alt={"Sam Posing with his arms up after the Des Moines Iron Man"}
          />
        </div>
        <div className={classNames(styles.bottomImage, styles.imageLayout)}>
          <Image
            src={ThumbsUp}
            height={300}
            width={200}
            alt={
              "Sam giving the camera man a thumbs up while biking the Madison Iron Man"
            }
          />
        </div>
      </div>
      <div>
        <div>
          {/* Pass in props to Logo for Size and Color?? */}
          <h3 className={styles.h3New}>Triathalon Coaching</h3>
          <h2 className={styles.h2}>Sam Pausha</h2>
        </div>
        <p className={styles.aboutParagraph}>
          Hi! I am Coach Sam I am a fitness coach that helps beginner to
          advanced athletes reach their fitness goals. Whether it be getting
          into shape, being able to run a 5K, or getting a PR in an IRONMAN, I
          want to help you hit your goals! I fell in love with running at the
          age of 15, and I have been a runner ever since. I used (and still use)
          running to get a mental break from the real world, stay in shape, and
          ultimately have a goal to work towards. In 2018, I had the means to
          buy a new bike and started learning about and competing in triathlons.
          Over the many years I have of running and triathlons, I have built a
          vast knowledge base of how the body responds to training. In 2023, I
          decided to use this knowledge to help others reach their physical
          fitness goals, and I completed the USAT L1 Coaching Certificate to
          become a certified coach. I utilize heart rate, rate of perceived
          exertion (RPE), and/or zone training during training plans to allow my
          athletes to get the best results no matter what experience level they
          have. I can&apos;t wait to hear what your goals are and help you
          achieve them!
        </p>
        <div>
          <Qualifications Qualification="USA Triathlon Level 1 Coaching Certified" />
          <Qualifications Qualification="2x Boston Marathon Qualifier" />
          <Qualifications Qualification="2024 IRONMAN World Championships Qualifier" />
          <Qualifications Qualification="3rd Place Age Group 2023 Madison IRONMAN" />
          <Qualifications Qualification="2023 IRONMAN All World Athlete" />
        </div>
      </div>
    </div>
  );
}
