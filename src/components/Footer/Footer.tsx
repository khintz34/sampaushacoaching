import classNames from "classnames";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

type Props = {
  onClickAbout(event: React.MouseEvent<HTMLParagraphElement>): void;
  onClickHome(event: React.MouseEvent<HTMLParagraphElement>): void;
  onClickTestimonials(event: React.MouseEvent<HTMLParagraphElement>): void;
  onClickPlans(event: React.MouseEvent<HTMLParagraphElement>): void;
};

export function Footer({
  onClickAbout,
  onClickHome,
  onClickPlans,
  onClickTestimonials,
}: Props) {
  return (
    <main className={styles.main}>
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
          <p className={styles.rightParagraph} onClick={onClickHome}>
            Home
          </p>
          <p className={styles.rightParagraph} onClick={onClickAbout}>
            About
          </p>
          <p className={styles.rightParagraph} onClick={onClickTestimonials}>
            Testimonials
          </p>
          <p className={styles.rightParagraph} onClick={onClickPlans}>
            Plans
          </p>
        </div>
      </div>
    </main>
  );
}
