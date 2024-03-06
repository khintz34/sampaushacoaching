"use client";

import styles from "./ClientForm.module.scss";
import { ClientFormDataDropdowns } from "../../assets/data/ClientFormData";
import { Dropdown } from "../Dropdown/Dropdown";
import { useEffect, useState } from "react";

export function ClientForm() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [trainingFor, setTrainingFor] = useState<string>();
  const [currentDaysWeek, setCurrentDaysWeek] = useState<string>();
  const [futureDaysWeek, setFutureDaysWeek] = useState<string>();
  const [currentFitness, setCurrentFitness] = useState<string>();
  const [injuries, setInjuries] = useState<string>();
  const [yesInjuries, setYesInjuries] = useState<string>();
  const [favorite, setFavorite] = useState<string>();
  const [mostOften, setMostOften] = useState<string>();
  const [goals, setGoals] = useState<string>();
  const [coachGoals, setCoachGoals] = useState<string>();

  // todo finish setting up state
  //todo think about how to set up yesInjuries

  return (
    <form className={styles.main}>
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
        />
      </div>
      {ClientFormDataDropdowns.map((item, index) => {
        return <Dropdown item={item} key={index} />;
      })}
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
        />
      </div>

      <button className={styles.btn}>Submit</button>
    </form>
  );
}
