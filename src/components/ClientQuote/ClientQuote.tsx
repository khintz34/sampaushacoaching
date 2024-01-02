import styles from "./ClientQuote.module.scss";
import finishLine from "../../assets/images/finishLine.jpg";
import Image from "next/image";
import classNames from "classnames";

export function ClientQuote() {
  return (
    <div className={styles.main}>
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

      <div className={styles.imageWrapper}>
        <div className={classNames(styles.mobileImage, styles.image)}>
          <Image
            src={finishLine}
            objectFit="cover"
            alt="Sam Pausha crossing the finish line at the Des Moines Ironman"
            className={styles.heroImage}
            objectPosition="50% 50%"
            layout="fill"
          />
        </div>
        <div className={classNames(styles.desktopImage, styles.image)}>
          <Image
            objectFit="cover"
            src={finishLine}
            layout="fill"
            objectPosition="30% 50%"
            alt="Sam Pausha crossing the finish line at the Des Moines Ironman"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
}
