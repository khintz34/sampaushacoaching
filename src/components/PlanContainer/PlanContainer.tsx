import styles from "./PlanContainer.module.scss";
import { PlanData } from "../../data/PlanData";
import { FitnessPlan } from "../FitnessPlan/FitnessPlan";

export function PlanContainer() {
  return (
    <main className={styles.main}>
      {PlanData.map((value, index) => {
        return (
          <FitnessPlan
            planName={value.name}
            planAttributes={value.attributes}
            planColor={value.color}
            key={index}
          />
        );
      })}
    </main>
  );
}
