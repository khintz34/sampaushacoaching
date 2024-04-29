"use client";
import styles from "./Tagline.module.scss";

export function Tagline() {
  return (
    <div className={styles.tagline}>
      <h2 className={styles.h2}>Your Goals.</h2>
      <h2>Your Plan.</h2>
      <p className={styles.taglineParagrapgh}>
        Personalized coaching for dedicated, hands-on guidance and success.
        <br /> Or hit the ground running with a mostly self-guided standardized
        plan.
      </p>
    </div>
  );
}
