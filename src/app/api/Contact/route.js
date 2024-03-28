import { NextResponse } from "next/server";

import { mailOptions, transporter } from "@/assets/apiLib/nodemailer";

export async function POST(req, res) {
  const body = await req.json();
  const reqArray = body.split(",");
  const [
    name,
    number,
    email,
    trainingFor,
    currentDaysAWeek,
    futureDaysAWeek,
    currentFitness,
    favoriteExercise,
    commonExercise,
    injuries,
    yesInjuries,
    goals,
    coachGoals,
  ] = reqArray;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Client Questionnaire: ${name}`,
      html: `<p>Name: ${name} </p>
      <p>Number: ${number} </p>
      <p>Email: ${email} </p>
      <p>Training For: ${trainingFor} </p>
      <p>Current Days of Excercise: ${currentDaysAWeek} </p>
      <p>Days of Exercise During Training: ${futureDaysAWeek} </p>
      <p>Current Fitness Level: ${currentFitness} </p>
      <p>Favorite Exercise: ${favoriteExercise} </p>
      <p>Most Common Exercise: ${commonExercise} </p>
      <p>Have you had injuries: ${injuries} </p>
      <p>Injury Details: ${yesInjuries} </p>
      <p>What are your goals: ${goals} </p>
      <p>What are your goals with a coach: ${coachGoals} </p> 
      `,
    });
    return NextResponse.json({ message: "Yay" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
