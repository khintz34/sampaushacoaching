"use client";
import React, { useRef } from "react";
import styles from "../Header/Header.module.scss";
import Link from "next/link";
import { useNavbarStore } from "@/stores/navbarStore";
import { Logo } from "../Logo/Logo";
import { MenuItem } from "../MenuItem/MenuItem";

const Header = () => {
  const navbarStatus = useNavbarStore((state) => state.navbarStatus);
  const changeStatus = useNavbarStore((state) => state.changeStatus);
  const checkRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    if (navbarStatus === true) {
      changeStatus(false);
      document.body.style.overflow = "unset";
    } else {
      changeStatus(true);
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const closeMenu = () => {
    checkRef.current!.checked = false;
    changeStatus(false);
  };

  return (
    <div className={`${styles.header}`}>
      <Link href={"/"} className={styles.textDecorationNone}>
        <Logo />
      </Link>
      <label className={`${styles.hamburgerMenu}`} htmlFor="hamburgerMenu">
        <input
          type="checkbox"
          onClick={handleToggle}
          ref={checkRef}
          id="hamburgerMenu"
        />
      </label>
      <div className={styles.sideNav}>
        <ul
          className={`${styles.menuNav}  ${
            navbarStatus === true ? `${styles.showMenu}` : `${styles.hideNav}`
          }`}
        >
          <MenuItem closeMenu={closeMenu} name="Home" />
          <MenuItem closeMenu={closeMenu} name="Client Quotes" />
          <MenuItem closeMenu={closeMenu} name="Pricing and Plans" />
          <MenuItem closeMenu={closeMenu} name="About" />
          <MenuItem closeMenu={closeMenu} name="Contact" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
