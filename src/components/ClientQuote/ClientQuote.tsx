import styles from "./ClientQuote.module.scss";
import finishLine from "../../assets/images/finishLine.jpg";
import Image from "next/image";

export function ClientQuote() {
  return (
    <main className={styles.main}>
      <div className={styles.clientQuote}>
        <p>
          &quot;Sam Pausha Coaching played a pivotal role in my 5k success.
          Sam&apos;s personalized training and constant encouragement not only
          got me across the finish line but also instilled a newfound love for
          running in my life.&quot; -- Kevin H.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <div className={`${styles.mobileImage} ${styles.image}`}>
          <Image
            src={finishLine}
            objectFit="cover"
            alt="Sam Pausha running in the Madison Ironman"
            className={`${styles.heroImage}`}
            objectPosition="50% 50%"
            layout="fill"
          />
        </div>
        <div className={`${styles.desktopImage} ${styles.image}`}>
          <Image
            objectFit="cover"
            src={finishLine}
            layout="fill"
            objectPosition="30% 50%"
            alt="Sam Pausha riding his bike in the Madison Ironman"
            className={styles.heroImage}
          />
        </div>
      </div>
    </main>
  );
}
