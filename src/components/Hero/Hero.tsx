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

//todo why is there a gap again with mobileHero
// todo create comp for Logo
// todo media query for ipad
// todo media query for galazyFold

export function Hero() {
  const ICON_SIZE = "40px";
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
            width={1440}
            src={HeroDesktop}
            height={700}
            alt="Sam Pausha riding his bike in the Madison Ironman"
            className={styles.heroImage}
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
