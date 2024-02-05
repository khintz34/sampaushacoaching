import styles from "./Qualifications.module.scss";

type Props = {
  Qualification: string;
};

export function Qualifications({ Qualification }: Props) {
  return <div className={styles.QualificationsMain}>{Qualification}</div>;
}
