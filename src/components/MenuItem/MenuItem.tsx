import Link from "next/link";
import styles from "./MenuItem.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

type Props = {
  closeMenu: Function;
  name: string;
  pathname: string;
  path: string;
};

export function MenuItem({ closeMenu, name, pathname, path }: Props) {
  const pathName = usePathname();
  return (
    <Link
      href={{
        pathname: pathname,
      }}
      className={styles.link}
      // scroll={false}
    >
      <li
        className={classNames(
          styles.menuItem,
          pathname === pathName ? styles.currentPath : ""
        )}
        onClick={() => {
          console.log(path);
          closeMenu();
        }}
      >
        {name}
      </li>
    </Link>
  );
}
