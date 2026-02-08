"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions";
import type { ContactFormState } from "@/lib/types";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-glass-border to-transparent" />
      </div>

      <div className="glass mx-auto max-w-2xl rounded-2xl p-6 sm:p-8">
        {state.success ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.45_0.15_145_/_0.2)]">
              <svg
                className="h-8 w-8 text-[oklch(0.7_0.18_145)]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-white">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-[oklch(0.8_0.02_260)]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                placeholder="Your name"
                className="w-full rounded-xl border border-glass-border bg-[oklch(0.1_0.01_260_/_0.5)] px-4 py-3 text-white placeholder:text-[oklch(0.45_0.02_260)] focus:border-accent focus:outline-none"
              />
              {state.errors?.name && (
                <p className="mt-1 text-sm text-[oklch(0.7_0.2_25)]">
                  {state.errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[oklch(0.8_0.02_260)]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-glass-border bg-[oklch(0.1_0.01_260_/_0.5)] px-4 py-3 text-white placeholder:text-[oklch(0.45_0.02_260)] focus:border-accent focus:outline-none"
              />
              {state.errors?.email && (
                <p className="mt-1 text-sm text-[oklch(0.7_0.2_25)]">
                  {state.errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-[oklch(0.8_0.02_260)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-glass-border bg-[oklch(0.1_0.01_260_/_0.5)] px-4 py-3 text-white placeholder:text-[oklch(0.45_0.02_260)] focus:border-accent focus:outline-none"
              />
              {state.errors?.message && (
                <p className="mt-1 text-sm text-[oklch(0.7_0.2_25)]">
                  {state.errors.message}
                </p>
              )}
            </div>

            {state.message && !state.success && (
              <p className="text-sm text-[oklch(0.7_0.2_25)]">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="group relative mt-2 w-full overflow-hidden rounded-xl bg-accent py-3.5 text-sm font-semibold text-[oklch(0.15_0.01_250)] transition-colors hover:bg-accent-hover disabled:opacity-60"
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
