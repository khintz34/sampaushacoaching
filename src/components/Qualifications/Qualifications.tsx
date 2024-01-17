import styles from "./Qualifications.module.scss";

type Props = {
  Qualification: String;
};

export function Qualifications({ Qualification }: Props) {
  return <div className={styles.QualificationsMain}>{Qualification}</div>;
}
