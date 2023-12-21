import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <div className={styles.logo}>
      <h1 className={styles.logoName}>Sam Pausha</h1>
      <h2 className={styles.logoLabel}>Coaching</h2>
    </div>
  );
}
