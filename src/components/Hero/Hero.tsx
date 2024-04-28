"use client";
import styles from "./Hero.module.scss";
import Header from "../Header/Header";
import { IdListData } from "@/data/IdListData";
import Image from "next/image";
import classNames from "classnames";

export function Hero() {
  const imageProps = {
    objectFit: "cover",
    layout: "fill",
    objectPosition: "50% 50%",
    className: styles.heroImage,
  };

  return (
    <main className={styles.main} id={IdListData.Home}>
      <Header backgroundColorSwitch={false} scrollValue={200} />
      <div>
        <div className={styles.mobileImage}>
          <Image
            src="/images/MobileHerov1.jpg"
            alt="Sam Pausha running in the Madison Ironman"
            {...imageProps}
          />
        </div>
        <div className={classNames(styles.desktopImage, styles.image)}>
          <Image
            src="/images/HeroDesktop.jpg"
            alt="Sam Pausha riding his bike in the Madison Ironman"
            {...imageProps}
          />
        </div>

        <div className={styles.overlay} />
      </div>
      <div className={styles.heroFooter}>
        <div className={classNames(styles.blue, styles.exerciseTypeTitle)}>
          SWIM
        </div>
        <div className={classNames(styles.yellow, styles.exerciseTypeTitle)}>
          BIKE
        </div>
        <div className={classNames(styles.orange, styles.exerciseTypeTitle)}>
          RUN
        </div>
      </div>
    </main>
  );
}
