"use client";

import styles from "./ClientForm.module.scss";
import { ClientFormDataDropdowns } from "../../data/ClientFormData";
import { ClientFormDropDownOptionsArray } from "@/data/ClientFormDropDownOptions";
import { Dropdown } from "../Dropdown/Dropdown";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Injuries } from "@/data/ClientFormResponses";

type DropDownOptionsType = {
  trainingFor: string;
  currentDaysAWeek: number;
  futureDaysAWeek: number;
  currentFitness: string | number;
  favoriteExercise: string;
  commonExercise: string;
  injuries: string;
};

export function ClientForm() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [yesInjuries, setYesInjuries] = useState<string>();
  const [goals, setGoals] = useState<string>();
  const [coachGoals, setCoachGoals] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [dropDownOptions, setDropDownOptions] = useState<DropDownOptionsType>(
    ClientFormDropDownOptionsArray
  );

  function handleChange(val: string, id: string) {
    setDropDownOptions((prev: any) => {
      return { ...prev, [id]: val };
    });
  }

  useEffect(() => {
    const reg = new RegExp("[^@s]+@[^@s]+.[^@s]+");
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (
      name === "" ||
      name === undefined ||
      phone === "" ||
      phone === undefined ||
      !phoneRegex.test(phone) ||
      email === "" ||
      email === undefined ||
      !reg.test(email)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, phone, email]);

  return (
    <form
      className={styles.main}
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="372a7f4e-f0c1-4016-92cd-981ade2f95e4"
      />
      <h2 className={styles.formHeader}>New Client Form</h2>
      <div className={styles.sideBySide}>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.inputHeight}
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="tel">Phone</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            className={styles.inputHeight}
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
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
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </div>
      {ClientFormDataDropdowns.map((item, index) => {
        return (
          <Dropdown key={index} item={item} updateSelectOption={handleChange} />
        );
      })}

      <div
        className={classNames({
          [styles.textAreaContainer]: dropDownOptions.injuries === Injuries.Yes,
          [styles.hide]: dropDownOptions.injuries === Injuries.No,
        })}
      >
        <label htmlFor="yesInjuries" className="label">
          Please describe your injury
        </label>
        <textarea
          name="yesInjuries"
          id="yesInjuryes"
          className={styles.textarea}
          defaultValue={yesInjuries}
          onChange={(e) => setYesInjuries(e.target.value)}
          required={dropDownOptions.injuries === Injuries.Yes}
        />
      </div>
      <div className={styles.textAreaContainer}>
        <label htmlFor="personalGoals">
          What are your goals? (Is there a specific race you are training for,
          etc.?)
        </label>
        <textarea
          name="personalGoals"
          id="personalGoals"
          className={styles.textarea}
          defaultValue={goals}
          onChange={(e) => setGoals(e.target.value)}
          required
        />
      </div>
      <div className={styles.textAreaContainer}>
        <label htmlFor="coachGoals">
          What are your goals working with a coach?
        </label>
        <textarea
          name="coachGoals"
          id="coachGoals"
          className={styles.textarea}
          defaultValue={coachGoals}
          onChange={(e) => setCoachGoals(e.target.value)}
          required
        />
      </div>
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />
      <button
        className={classNames(disabled ? styles.disabled : styles.btn)}
        type="submit"
        disabled={disabled}
      >
        Submit
      </button>
    </form>
  );
}
