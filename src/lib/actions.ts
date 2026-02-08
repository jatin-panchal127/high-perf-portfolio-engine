"use server";

import type { ContactFormState } from "./types";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  const errors: ContactFormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors,
    };
  }

  // Simulate sending (replace with your email service: Resend, SendGrid, etc.)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Contact form submission:", { name, email, message });

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you within 24 hours.",
  };
}
