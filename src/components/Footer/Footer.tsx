import classNames from "classnames";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Logo />
        <div className={styles.contactTypeContainer}>
          <div className={styles.contactType}>
            <p>
              <FaInstagram />
            </p>
            <p className={styles.primaryFontSize}>@sampaushacoaching</p>
          </div>
          <div className={styles.contactType}>
            <p>
              <FaFacebook />
            </p>
            <p className={styles.primaryFontSize}>Sam Pausha Coaching</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={classNames(styles.contactSection, styles.rightSection)}>
          <h5>CONTACT</h5>
          <p className={styles.rightParagraph}>Minneapolis, MN</p>
          <p className={styles.rightParagraph}>Sampaushacoaching@gmail.com</p>
          <p className={styles.rightParagraph}>(414) 704 - 6230 </p>
        </div>
        <div className={classNames(styles.pagesSection, styles.rightSection)}>
          <h5>PAGES</h5>
          <p className={styles.rightParagraph}>Home</p>
          <p className={styles.rightParagraph}>About</p>
          <p className={styles.rightParagraph}>Testimonials</p>
          <p className={styles.rightParagraph}>Plans</p>
        </div>
      </div>
    </main>
  );
}
