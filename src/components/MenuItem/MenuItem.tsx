import Link from "next/link";
import styles from "./MenuItem.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

type Props = {
  closeMenu: Function;
  title: string;
  path: string;
};

export function MenuItem({ closeMenu, title, path }: Props) {
  const RouterPathName = usePathname();
  return (
    <Link
      href={{
        pathname: path,
      }}
      className={styles.link}
      as={path}
    >
      <li
        className={classNames(
          styles.menuItem,
          path === RouterPathName ? styles.currentPath : ""
        )}
        onClick={() => {
          closeMenu();
        }}
      >
        {title}
      </li>
    </Link>
  );
}
