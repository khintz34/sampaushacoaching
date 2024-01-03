import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <div className={styles.logo}>
      <h2 className={styles.logoLabel}>Triathalon Coaching</h2>
      <h1 className={styles.logoName}>Sam Pausha</h1>
    </div>
  );
}
