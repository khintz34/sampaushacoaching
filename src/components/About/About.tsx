"use client";
import Image from "next/image";
import styles from "./About.module.scss";
import ThumbsUpImageSrc from "../../assets/images/ThumbsUpBike.jpg";
import classNames from "classnames";
import ArmsUpImageSrc from "../../assets/images/ArmsUp.jpg";
import { Qualifications } from "../Qualifications/Qualifications";
import {
  QUALIFICATIONS_TEXT,
  ABOUT_BIO,
} from "../../assets/data/QualificationsData";

export function About() {
  return (
    <div className={styles.aboutMain}>
      <div className={styles.imageMain}>
        <div className={styles.imageLayout}>
          <Image
            src={ArmsUpImageSrc}
            height={300}
            width={200}
            alt={"Sam Posing with his arms up after the Des Moines Iron Man"}
          />
        </div>
        <div className={classNames(styles.bottomImage, styles.imageLayout)}>
          <Image
            src={ThumbsUpImageSrc}
            height={300}
            width={200}
            alt={
              "Sam giving the camera man a thumbs up while biking the Madison Iron Man"
            }
          />
        </div>
      </div>
      <div className={styles.aboutInfo}>
        <div>
          <h3 className={styles.h3New}>Triathalon Coaching</h3>
          <h2 className={styles.h2}>Sam Pausha</h2>
        </div>
        <p className={styles.aboutParagraph}>{ABOUT_BIO}</p>
        <div className={styles.qualificationsContainer}>
          {QUALIFICATIONS_TEXT.map((qualification, index) => {
            return <Qualifications Qualification={qualification} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
