"use client";
import HeroDesktop from "../../assets/images/HeroDesktop.jpg";
import HeroMobile from "../../assets/images/MobileHerov1.jpg";
import Image from "next/legacy/image";
import styles from "./Hero.module.scss";
import Header from "../Header/Header";

export function Hero() {
  const ICON_SIZE = "40px";

  return (
    <main className={styles.main} id="Home">
      <Header backgroundColorSwitch={false} scrollValue={200} />
      <div className={styles.imageWrapper}>
        <div className={`${styles.mobileImage} ${styles.image}`}>
          <Image
            src={HeroMobile}
            objectFit="cover"
            alt="Sam Pausha running in the Madison Ironman"
            className={`${styles.heroImage}`}
            objectPosition="50% 50%"
            layout="fill"
          />
        </div>
        <div className={`${styles.desktopImage} ${styles.image}`}>
          <Image
            src={HeroDesktop}
            alt="Sam Pausha riding his bike in the Madison Ironman"
            className={styles.heroImage}
            objectFit="cover"
            layout="fill"
            objectPosition="50% 50%"
          />
        </div>

        <div className={styles.overlay} />
      </div>
      <div className={styles.heroFooter}>
        <div className={`${styles.blue} ${styles.exerciseTypeTitle}`}>SWIM</div>
        <div className={`${styles.yellow} ${styles.exerciseTypeTitle}`}>
          BIKE
        </div>
        <div className={`${styles.orange} ${styles.exerciseTypeTitle}`}>
          RUN
        </div>
      </div>
    </main>
  );
}
