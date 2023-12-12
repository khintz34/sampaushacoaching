"use client";
import HeroDesktop from "../../assets/images/HeroDesktop.jpg";
import MobileThree from "../../assets/images/mobileThree.jpg";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// todo create comp for Logo
// todo media query for ipad
// todo media query for galazyFold

export function Hero() {
  const ICON_SIZE = "40px";
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.logoName}>Sam Pausha</h1>
          <h2 className={styles.logoLabel}>Fitness Coaching</h2>
        </div>
        <div className={styles.hamburgerIcon}>
          <IconContext.Provider value={{ size: ICON_SIZE }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={`${styles.mobileImage} ${styles.image}`}>
          <Image
            src={MobileThree}
            objectFit={"contain"}
            alt="Sam Pausha running in the Madison Ironman"
            className={styles.heroImage}
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
