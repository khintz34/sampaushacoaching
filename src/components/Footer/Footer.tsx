import classNames from "classnames";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FooterData } from "../../assets/data/FooterData";

export function Footer() {
  return (
    <main className={styles.main} id="Footer">
      <div className={styles.left}>
        <Logo />
        <div className={styles.contactTypeContainer}>
          <a
            className={styles.contactType}
            href="https://www.instagram.com/sampaushacoaching/"
            target="_blank"
          >
            <p>
              <FaInstagram />
            </p>
            <p className={styles.primaryFontSize}>@sampaushacoaching</p>
          </a>
          <a
            className={styles.contactType}
            href="https://www.facebook.com/profile.php?id=61555614621988"
            target="_blank"
          >
            <p>
              <FaFacebook />
            </p>
            <p className={styles.primaryFontSize}>Sam Pausha Coaching</p>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={classNames(styles.contactSection, styles.rightSection)}>
          <h5>CONTACT</h5>
          <p className={styles.rightParagraph}>Minneapolis, MN</p>
          <a
            href="mailto:sampaushacoaching@gmail.com"
            className={styles.rightParagraph}
          >
            Sampaushacoaching@gmail.com
          </a>
          <p className={styles.rightParagraph}>(414) 704 - 6230 </p>
        </div>
        <div className={classNames(styles.pagesSection, styles.rightSection)}>
          <h5>PAGES</h5>
          {FooterData.map((value, index) => {
            return (
              <a href={value.ref} key={index}>
                <p className={styles.rightParagraph}>{value.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
