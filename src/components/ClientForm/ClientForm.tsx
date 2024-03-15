"use client";

import styles from "./ClientForm.module.scss";
import { ClientFormDataDropdowns } from "../../assets/data/ClientFormData";
import { Dropdown } from "../Dropdown/Dropdown";
import { useState } from "react";
import { sendContactForm } from "@/assets/apiLib/api";

export function ClientForm() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [trainingFor, setTrainingFor] = useState<string>(
    "General Health and Fitness"
  );
  const [currentDaysWeek, setCurrentDaysWeek] = useState<string>("0");
  const [futureDaysWeek, setFutureDaysWeek] = useState<string>("0");
  const [currentFitness, setCurrentFitness] = useState<string>(
    "1: relatively out of shape"
  );
  const [injuries, setInjuries] = useState<string>("No");
  const [yesInjuries, setYesInjuries] = useState<string>();
  const [favorite, setFavorite] = useState<string>("Cardio");
  const [mostOften, setMostOften] = useState<string>("Cardio");
  const [goals, setGoals] = useState<string>();
  const [coachGoals, setCoachGoals] = useState<string>();

  function handleChange(val: string, id: string) {
    switch (id) {
      case "trainingFor":
        setTrainingFor(val);
        break;
      case "futureDaysAWeek":
        setFutureDaysWeek(val);
        break;
      case "currentDaysAWeek":
        setCurrentDaysWeek(val);
        break;
      case "currentFitness":
        setCurrentFitness(val);
        break;
      case "injuries":
        setInjuries(val);
        break;
      case "favoriteExercise":
        setFavorite(val);
        break;
      case "commonExercise":
        setMostOften(val);
        break;
    }
  }

  const onSubmit = async (e: any) => {
    const passingArray = [
      name,
      phone,
      email,
      trainingFor,
      currentDaysWeek,
      futureDaysWeek,
      currentFitness,
      injuries,
      yesInjuries,
      favorite,
      mostOften,
      goals,
      coachGoals,
    ];
    await sendContactForm(passingArray.toString());
  };

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
        return <Dropdown item={item} key={index} changeEvent={handleChange} />;
      })}

      <div
        className={injuries === "Yes" ? styles.textAreaContainer : styles.hide}
      >
        <label htmlFor="yesInjuries">Please describe your injury</label>
        <textarea
          name="yesInjuries"
          id="yesInjuryes"
          className={styles.textarea}
          defaultValue={yesInjuries}
          onChange={(e) => setYesInjuries(e.target.value)}
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

      <button className={styles.btn} onClick={(e) => onSubmit(e)}>
        Submit
      </button>
    </form>
  );
}
