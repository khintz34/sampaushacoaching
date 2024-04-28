import styles from "./ClientQuote.module.scss";
import Image from "next/legacy/image";
import classNames from "classnames";
import { SwiperQuotes } from "../SwiperQuotes/SwiperQuotes";
import { IdListData } from "@/data/IdListData";

export function ClientQuote() {
  return (
    <div className={styles.main} id={IdListData.Testimonials}>
      <SwiperQuotes />

      <div className={styles.imageWrapper}>
        <div className={classNames(styles.mobileImage, styles.image)}>
          <Image
            src="/images/finishLine.jpg"
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
            src="/images/finishLine.jpg"
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
