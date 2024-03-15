"use client";

import { useState } from "react";
import styles from "./Dropdown.module.scss";

interface Props {
  item: {
    question: string;
    options: Array<string | number>;
    id: string;
  };
  changeEvent: Function;
}

// todo need to add a feature to show hide based on data passed in...

export function Dropdown({ item, changeEvent }: Props) {
  return (
    <div className={styles.dropdown} id={item.id}>
      <label>{item.question}</label>
      <select
        onChange={(e) => {
          changeEvent(e.target.value, item.id);
        }}
        defaultValue={item.options[0]}
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
