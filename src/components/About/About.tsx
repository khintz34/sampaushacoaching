"use client";
import Image from "next/image";
import styles from "./About.module.scss";
import ThumbsUp from "../../assets/images/ThumbsUpBikeVertical.jpg";
import classNames from "classnames";
import ArmsUp from "../../assets/images/DesMoinesArmsUp.jpg";

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
            fill={true}
            alt={
              "Sam giving the camera man a thumbs up while biking the Madison Iron Man"
            }
          />
        </div>
      </div>
    </div>
  );
}
