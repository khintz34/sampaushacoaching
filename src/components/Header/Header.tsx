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
  const navbarStatus = useNavbarStore((state) => state.navbarStatus);
  const changeNavbarStatus = useNavbarStore(
    (state) => state.changeNavbarStatus
  );
  const checkRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState<boolean>(backgroundColorSwitch);
  const changeColor = () => {
    setColor(window.scrollY >= scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleToggle = () => {
    if (navbarStatus === true) {
      changeNavbarStatus(false);
      // these help to not allow scrolling. Leaving until we decide if we want that
      // document.body.style.overflow = "unset";
    } else {
      changeNavbarStatus(true);
      // if (typeof window != "undefined" && window.document) {
      // document.body.style.overflow = "hidden";
      // }
    }
  };

  const closeMenu = () => {
    checkRef.current!.checked = false;
    changeNavbarStatus(false);
  };

  return (
    <div
      className={classNames(
        styles.header,
        navbarStatus ? styles.positionFixed : "",
        color ? styles.headerScrolled : styles.none
      )}
    >
      <Link href={"/"} className={styles.textDecorationNone}>
        <Logo />
      </Link>
      <label className={styles.hamburgerMenu} htmlFor="hamburgerMenu">
        <input
          type="checkbox"
          onClick={handleToggle}
          ref={checkRef}
          id="hamburgerMenu"
        />
      </label>
      <div className={styles.sideNav}>
        <ul
          className={classNames(
            styles.menuNav,
            navbarStatus === true ? styles.showMenu : styles.hideNav
          )}
        >
          {menuItemData.map((menuItem, index) => {
            return (
              <MenuItem
                key={`menuItem-${index}`}
                closeMenu={closeMenu}
                name={menuItem.title}
                pathname={menuItem.pathname}
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
