"use client";
import HeroDesktop from "../../assets/images/HeroDesktop.jpg";
import MobileThree from "../../assets/images/mobileThree.jpg";
import HeroMobile from "../../assets/images/MobileHerov1.jpg";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../Logo/Logo";

export function Hero() {
  const ICON_SIZE = "40px";

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Logo />
        <div className={styles.hamburgerIcon}>
          <IconContext.Provider value={{ size: ICON_SIZE }}>
            <FiMenu />
          </IconContext.Provider>
        </div>
      </div>
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
            // width={1440}
            src={HeroDesktop}
            // height={700}
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
        <div className={`${styles.red} ${styles.exerciseTypeTitle}`}>SWIM</div>
        <div className={`${styles.white} ${styles.exerciseTypeTitle}`}>
          BIKE
        </div>
        <div className={`${styles.blue} ${styles.exerciseTypeTitle}`}>RUN</div>
      </div>
    </main>
  );
}
