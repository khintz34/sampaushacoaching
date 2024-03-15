const { MailtrapClient } = require("mailtrap");
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/api/home", (req, resp) => {
  resp.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("SERVER RUNNING");
});

async function notifyAdmin() {
  const TOKEN = "327c43c9f0031b9b4c23d744ae0e5080";
  const SENDER_EMAIL = "demomailtrap.com";
  const RECIPIENT_EMAIL = "kevinphintz34@gmail.com";
  const client = new MailtrapClient({ token: TOKEN });

  const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

  await client
    .send({
      from: sender,
      to: [{ email: RECIPIENT_EMAIL }],
      subject: "Hello from Mailtrap!",
      text: "Welcome to Mailtrap Sending!",
    })
    .then(console.log)
    .catch(console.error);
}

notifyAdmin();
