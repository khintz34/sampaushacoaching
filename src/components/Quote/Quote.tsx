"use client";
import styles from "./Quote.module.scss";

type Props = {
  quote: string;
  name: string;
  type: string;
};

export function Quote({ quote, name, type }: Props) {
  return (
    <div className={styles.clientQuoteContainer}>
      <p className={styles.clientQuotePara}>&quot;{quote}&quot;</p>
      <div>
        <p className={styles.medium}>{name}</p>
        <p className={styles.fontFourteen}>{type}</p>
      </div>
    </div>
  );
}
