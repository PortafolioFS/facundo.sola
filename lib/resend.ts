import { Resend } from "resend";

const DEFAULT_CONTACT_TO_EMAIL = "solafacu@gmail.com";
const DEFAULT_CONTACT_FROM_EMAIL = "onboarding@resend.dev";

let resendClient: Resend | null = null;

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export function getContactEmailConfig() {
  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_CONTACT_FROM_EMAIL;

  const fromHeader = fromEmail.includes("<")
    ? fromEmail
    : `Facundo Sola <${fromEmail}>`;

  return {
    toEmail,
    fromEmail,
    fromHeader,
  };
}
