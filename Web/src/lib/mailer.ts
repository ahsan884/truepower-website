import nodemailer from "nodemailer";

export interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  const host = getRequiredEnv("SMTP_HOST");
  const port = Number(getRequiredEnv("SMTP_PORT"));
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a number");
  }

  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const to = process.env.CONTACT_TO_EMAIL || "connect@trupowerpk.com";
  const from = process.env.CONTACT_FROM_EMAIL || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"TruPower Website" <${from}>`,
    to,
    replyTo: `"${submission.name}" <${submission.email}>`,
    subject: `New contact form submission from ${submission.name}`,
    text: [
      `Name: ${submission.name}`,
      `Phone: ${submission.phone}`,
      `Email: ${submission.email}`,
      "",
      "Message:",
      submission.message?.trim() || "(no message provided)",
    ].join("\n"),
  });
}
