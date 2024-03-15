import { NextResponse } from "next/server";

import { mailOptions, transporter } from "@/assets/apiLib/nodemailer";

export async function POST(req, res) {
  const body = await req.json();
  console.log(body);
  const reqArray = body.split(",");
  const name = reqArray[0].toString();
  console.log(name);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Client Questionnaire: ${reqArray[0]}`,
      html: `<p>Name: ${reqArray[0]} </p>
      <p>Number: ${reqArray[1]} </p>
      <p>Email: ${reqArray[2]} </p>
      <p>Training For: ${reqArray[3]} </p>
      <p>Current Days of Excercise: ${reqArray[4]} </p>
      <p>Days of Exercise During Training: ${reqArray[5]} </p>
      <p>Current Fitness Level: ${reqArray[6]} </p>
      <p>Favorite Exercise: ${reqArray[7]} </p>
      <p>Most Common Exercise: ${reqArray[8]} </p>
      <p>Have you had injuries: ${reqArray[9]} </p>
      <p>Injury Details: ${reqArray[10]} </p>
      <p>What are your goals: ${reqArray[11]} </p>
      <p>What are your goals with a coach: ${reqArray[12]} </p> 
      `,
    });
    return NextResponse.json({ message: "Yay" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
