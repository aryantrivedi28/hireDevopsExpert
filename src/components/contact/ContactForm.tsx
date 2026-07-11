"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClasses =
  "rounded-lg border border-gray/40 bg-off px-4 py-3 text-body text-ink focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2";

function validate(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) errors.name = "Enter your name.";
  if (!email) {
    errors.email = "Enter your work email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!message) errors.message = "Tell us what you need help with.";

  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // TODO: wire real form service, read the endpoint from env (e.g. NEXT_PUBLIC_FORM_ENDPOINT)
    // once a service (Formspree / Web3Forms / Getform / Basin / custom API route) is chosen.
    // Verify the chosen service's current request/response format in its own docs before
    // relying on this generic fetch, do not assume this shape is correct for any specific
    // provider without checking.
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-mist bg-mist p-6 text-body text-ink"
      >
        Thanks, your message is in. A real engineer will review it and get back to you.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-small font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses}
        />
        {errors.name && (
          <p id="name-error" className="text-small font-medium text-ink">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-small font-medium text-ink">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses}
        />
        {errors.email && (
          <p id="email-error" className="text-small font-medium text-ink">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-small font-medium text-ink">
          Company <span className="text-slate">(optional)</span>
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-small font-medium text-ink">
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClasses}
        />
        {errors.message && (
          <p id="message-error" className="text-small font-medium text-ink">
            {errors.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cloud" className="text-small font-medium text-ink">
            Current cloud <span className="text-slate">(optional)</span>
          </label>
          <select id="cloud" name="cloud" defaultValue="" className={inputClasses}>
            <option value="">Not sure / not applicable</option>
            <option value="aws">AWS</option>
            <option value="azure">Azure</option>
            <option value="gcp">GCP</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="engagement" className="text-small font-medium text-ink">
            Engagement type <span className="text-slate">(optional)</span>
          </label>
          <select id="engagement" name="engagement" defaultValue="" className={inputClasses}>
            <option value="">Not sure yet</option>
            <option value="fixed-scope">Fixed-scope project</option>
            <option value="managed-retainer">Managed retainer</option>
            <option value="hourly">Hourly / as-needed</option>
            <option value="dedicated-engineer">Dedicated engineer</option>
            <option value="white-label">White-label for agencies</option>
          </select>
        </div>
      </div>

      {status === "not-configured" && (
        <p role="alert" className="text-small font-medium text-ink">
          {/* TODO: wire real form service */}
          This form isn&rsquo;t connected yet, check back soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-small font-medium text-ink">
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
