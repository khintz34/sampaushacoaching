import styles from "./ClientQuote.module.scss";
import classNames from "classnames";
import { SwiperQuotes } from "../SwiperQuotes/SwiperQuotes";
import { IdListData } from "@/data/IdListData";
import Image from "next/image";

export function ClientQuote() {
  return (
    <div className={styles.main} id={IdListData.Testimonials}>
      <SwiperQuotes />

      <div className={styles.imageWrapper}>
        <Image
          src="/images/finishLine.jpg"
          objectFit="cover"
          alt="Sam Pausha crossing the finish line at the Des Moines Ironman"
          className={classNames(styles.heroImage, styles.mobileImage)}
          objectPosition="50% 50%"
          layout="fill"
        />
        <Image
          objectFit="cover"
          src="/images/finishLine.jpg"
          layout="fill"
          objectPosition="30% 50%"
          alt="Sam Pausha crossing the finish line at the Des Moines Ironman"
          className={classNames(styles.heroImage, styles.desktopImage)}
        />
      </div>
    </div>
  );
}
