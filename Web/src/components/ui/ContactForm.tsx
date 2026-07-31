"use client";

import { useState, type FormEvent } from "react";
import { IconSend } from "@/components/icons";
import { cn } from "@/lib/cn";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-lg border border-border-subtle bg-background px-4 py-3 text-sm text-white placeholder:text-text-secondary/70 transition-colors focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Full Name *"
            autoComplete="name"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="Phone Number *"
            autoComplete="tel"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="Email Address *"
          autoComplete="email"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Message"
          rows={5}
          className={cn(inputClassName, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <IconSend className="h-4 w-4" aria-hidden="true" />
      </button>

      <div aria-live="polite" className="min-h-5 text-sm">
        {status === "success" ? (
          <p className="text-brand">Thanks — your message has been received. We&apos;ll be in touch soon.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-red-400">Something went wrong. Please try again in a moment.</p>
        ) : null}
      </div>
    </form>
  );
}
