"use client";
import Image from "next/image";
import styles from "./About.module.scss";
import ThumbsUp from "../../assets/images/IMG_7866.jpg";
import classNames from "classnames";
import ArmsUp from "../../assets/images/DesMoinesArmsUp.jpg";
import { Qualifications } from "../Qualifications/Qualifications";
import {
  QualificationsData,
  AboutData,
} from "../../assets/data/QualificationsData";

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
      <div className={styles.aboutInfo}>
        <div>
          <h3 className={styles.h3New}>Triathalon Coaching</h3>
          <h2 className={styles.h2}>Sam Pausha</h2>
        </div>
        <p className={styles.aboutParagraph}>{AboutData}</p>
        <div className={styles.qualificationsContainer}>
          {QualificationsData.map((qual, index) => {
            return (
              <Qualifications
                Qualification={qual}
                key={`Qualifiction-${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
