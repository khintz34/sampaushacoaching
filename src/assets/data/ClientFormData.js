export const ClientFormDataDropdowns = [
  {
    question: "What are you training for?",
    options: [
      "General Health and Fitness",
      "Running Event (5k - Marathon)",
      "Triathalon Event (Sprint - IRONMAN)",
      "Other",
    ],
    id: "trainingFor",
  },
  {
    question: "How many days a week do you exercise currently?",
    options: [0, 1, 2, 3, 4, 5, 6, 7],
    id: "currentDaysAWeek",
  },
  {
    question: "How many days a week do you want to exercise during the plan?",
    options: [0, 1, 2, 3, 4, 5, 6, 7],
    id: "futureDaysAWeek",
  },
  {
    question: "How would you describe your fitness level on a scale of 1-5?",
    options: [
      "1: relatively out of shape",
      2,
      3,
      4,
      "5: best shape of your life",
    ],
    id: "currentFitness",
  },
  {
    question: "What is your favorite type of exercise?",
    options: [
      "Cardio",
      "Strength",
      "Flexibility",
      "Balance",
      "Core",
      "Plyrometric",
      "Functional",
      "Interval",
      "Cross Training",
    ],
    id: "favoriteExercise",
  },
  {
    question: "What type of exercise do you do most often?",
    options: [
      "Cardio",
      "Strength",
      "Flexibility",
      "Balance",
      "Core",
      "Plyrometric",
      "Functional",
      "Interval",
      "Cross Training",
    ],
    id: "commonExercise",
  },
  {
    question: "Have you had any injuries, or do you have any injuries?",
    options: ["No", "Yes"],
    id: "injuries",
  },
];

export const ClientFormDataTexts = [
  {
    question:
      "What are your goals? (Is there a specific race you are training for, etc.?)",
    id: "personalGoals",
  },
  { question: "What are your goals working with a coach?", id: "coachGoals" },
];
