"use client";

import styles from "./Dropdown.module.scss";

interface Props {
  item: {
    question: string;
    options: Array<string | number>;
    id: string;
  };
  updateSelectOption: Function;
}

export function Dropdown({ item, updateSelectOption }: Props) {
  return (
    <div className={styles.dropdown} id={item.id}>
      <label>{item.question}</label>
      <select
        onChange={(e) => {
          updateSelectOption(e.target.value, item.id);
        }}
        defaultValue={item.options[0]}
        className={styles.select}
        required
        name={item.question}
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
