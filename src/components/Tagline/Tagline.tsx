"use client";
import styles from "./Tagline.module.scss";

export function Tagline() {
  return (
    <div className={styles.tagline}>
      <h2 className={styles.h2}>Your Journey.</h2>
      <h2>Your Goals.</h2>
      <div className={styles.paraContainer}>
        <p className={styles.taglinePara}>
          From Couch to 5K Triumphs to Triathlon Peaks.
        </p>
        <p className={styles.taglinePara}>
          Unleash Your Potential with Personalized Fitness Excellence.
        </p>
      </div>
    </div>
  );
}
