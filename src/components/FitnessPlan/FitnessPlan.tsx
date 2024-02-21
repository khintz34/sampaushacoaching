import styles from "./FitnessPlan.module.scss";
import { PiStarFourFill } from "react-icons/pi";

type Props = {
  planName: string;
  planAttributes: string[];
  planColor: string;
};

export function FitnessPlan({ planName, planAttributes, planColor }: Props) {
  const GRADIENT = `linear-gradient(150deg, ${planColor}, var(--primary-font))`;
  return (
    <main className={styles.main} style={{ backgroundImage: GRADIENT }}>
      <h4>{planName}</h4>
      <div className={styles.attributeContainer}>
        {planAttributes.map((value, index) => {
          return (
            <div key={index} className={styles.planAttribute}>
              <p>
                <PiStarFourFill className={styles.icon} />
              </p>
              <p className={styles.font14}>{value}</p>
            </div>
          );
        })}
      </div>
      <button className={styles.btn}>Learn More</button>
    </main>
  );
}
