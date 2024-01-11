import Link from "next/link";
import styles from "./MenuItem.module.scss";

type Props = {
  closeMenu: Function;
  name: String;
};

export function MenuItem({ closeMenu, name }: Props) {
  return (
    <Link
      href={"/"}
      style={{
        textDecoration: "none",
        fontStyle: "italic",
      }}
      as="/"
    >
      <li
        className={styles.menuItem}
        onClick={() => {
          closeMenu();
        }}
      >
        {name}
      </li>
    </Link>
  );
}
