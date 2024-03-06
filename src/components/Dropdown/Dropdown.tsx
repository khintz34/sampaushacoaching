"use client";

import { useState } from "react";
import styles from "./Dropdown.module.scss";

interface Props {
  item: {
    question: string;
    options: Array<string | number>;
  };
}

// todo need to add a feature to show hide based on data passed in...

export function Dropdown({ item }: Props) {
  const [currentOption, setCurrentOption] = useState<string | number>(
    item.options[0]
  );
  return (
    <div className={styles.dropdown}>
      <label>{item.question}</label>
      <select
        onChange={(e) => {
          setCurrentOption(e.target.value);
        }}
        value={currentOption}
        className={styles.select}
      >
        {item.options.map((option, index) => (
          <option key={index} value={option} className={styles.option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
