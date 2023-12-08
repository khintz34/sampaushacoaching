"use client";
import HeroDesktop from "../../assets/images/HeroDesktop.jpg";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useState } from "react";

export function Hero() {
  const ICON_SIZE = "40px";
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.logoH1}>Sam Pausha</h1>
          <h2 className={styles.logoH2}>Fitness Coaching</h2>
        </div>
        <div className={styles.hamburgerIcon}>
          <IconContext.Provider value={{ size: ICON_SIZE }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          width={1440}
          src={HeroDesktop}
          height={700}
          alt="Sam Pausha riding his bike in the Madison Ironman"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.heroFooter}>
        <div className={`${styles.red} ${styles.heroType}`}>SWIM</div>
        <div className={`${styles.heroType}`}>BIKE</div>
        <div className={`${styles.blue} ${styles.heroType}`}>RUN</div>
      </div>
    </main>
  );
}
