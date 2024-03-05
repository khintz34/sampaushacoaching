import styles from "./ClientForm.module.scss";

export function ClientForm() {
  return (
    <form className={styles.main}>
      <h2 className={styles.formHeader}>New Client Form</h2>
      <div className={styles.sideBySide}>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.inputHeight}
          />
        </div>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="tel">Phone</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            className={styles.inputHeight}
          />
        </div>
      </div>
      <div className={styles.inputFieldContainer}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.inputHeight}
        />
      </div>
      <button className={styles.btn}>Submit</button>
    </form>
  );
}
