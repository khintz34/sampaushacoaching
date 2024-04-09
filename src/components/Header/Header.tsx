"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../Header/Header.module.scss";
import Link from "next/link";
import { useNavbarStore } from "@/stores/navbarStore";
import { Logo } from "../Logo/Logo";
import { MenuItem } from "../MenuItem/MenuItem";
import { menuItemData } from "../../assets/data/MenuItemData";
import classNames from "classnames";

type Props = {
  backgroundColorSwitch: boolean;
  scrollValue: number;
};

const BACKGROUND_COLOR_SCROLL_HEIGHT = 200;

const Header = ({
  backgroundColorSwitch = false,
  scrollValue = BACKGROUND_COLOR_SCROLL_HEIGHT,
}: Props) => {
  const isNavbarOpen = useNavbarStore((state) => state.isNavbarOpen);
  const setIsNavbarOpen = useNavbarStore((state) => state.setIsNavbarOpen);
  const checkRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<boolean>(backgroundColorSwitch);
  const changeColor = () => {
    setColor(window.scrollY >= scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const closeMenu = () => {
    checkRef.current!.checked = false;
    setIsNavbarOpen(false);
  };

  return (
    <div
      className={classNames(
        styles.header,
        isNavbarOpen ? styles.positionFixed : "",
        color ? styles.headerScrolled : styles.none
      )}
    >
      <Link href={"/"} className={styles.textDecorationNone}>
        <Logo />
      </Link>
      <label className={styles.hamburgerMenu} htmlFor="hamburgerMenu">
        <input
          type="checkbox"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          ref={checkRef}
          id="hamburgerMenu"
        />
      </label>
      <div className={styles.sideNav}>
        <ul
          className={classNames(
            styles.menuNav,
            isNavbarOpen === true ? styles.showMenu : styles.hideNav
          )}
        >
          {menuItemData.map((menuItem, index) => {
            return (
              <MenuItem
                key={index}
                closeMenu={closeMenu}
                title={menuItem.title}
                path={menuItem.path}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
