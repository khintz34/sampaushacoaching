"use client";
import Link from "next/link";
import styles from "./MenuItem.module.scss";
import classNames from "classnames";

type Props = {
  closeMenu: Function;
  title: string;
  path: string;
};

export function MenuItem({ closeMenu, title, path }: Props) {
  return (
    <Link
      href={{
        pathname: path,
      }}
      as={path}
    >
      <li
        className={classNames(styles.menuItem)}
        onClick={() => {
          closeMenu();
        }}
      >
        {title}
      </li>
    </Link>
  );
}
