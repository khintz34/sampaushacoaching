"use client";
import styles from "./Quote.module.scss";

type Props = {
  quote: string;
  name: string;
  type: string;
};

export function Quote(props: Props) {
  return (
    <div className={styles.clientQuoteContainer}>
      <p className={styles.clientQuotePara}>&quot;{props.quote}&quot;</p>
      <div>
        <p className={styles.medium}>{props.name}</p>
        <p className={styles.fontFourteen}>{props.type}</p>
      </div>
    </div>
  );
}
