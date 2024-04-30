"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "../Header/Header.module.scss";
import Link from "next/link";
import { useNavbarStore } from "@/stores/navbarStore";
import { Logo } from "../Logo/Logo";
import { MenuItem } from "../MenuItem/MenuItem";
import { menuItemData } from "../../data/MenuItemData";
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

  const changeColor = useCallback(() => {
    setColor(window.scrollY >= scrollValue);
  }, [setColor, scrollValue]);

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [changeColor]);

  const closeMenu = () => {
    checkRef.current!.checked = false;
    setIsNavbarOpen(false);
  };

  return (
    <nav className={styles.navWrapper}>
      <div
        className={classNames(styles.header, {
          [styles.headerScrolled]: color,
        })}
      >
        <Link href="/" className={styles.textDecorationNone}>
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
      </div>
      <ul
        className={classNames(styles.menuNav, {
          [styles.showMenu]: isNavbarOpen,
        })}
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
    </nav>
  );
};

export default Header;
