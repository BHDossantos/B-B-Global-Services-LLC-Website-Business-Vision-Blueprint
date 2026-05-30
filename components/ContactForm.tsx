"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { cn } from "./ui";

const services = [
  "Strategy & Advisory",
  "Application & Product Development",
  "Cloud, DevOps & Platform Engineering",
  "DevSecOps & Cybersecurity",
  "Reliability, Operations & BCDR",
  "IMAC & Managed Technology Services",
  "Not sure yet",
];

const budgets = [
  "Under $10,000",
  "$10,000–$25,000",
  "$25,000–$100,000",
  "$100,000–$250,000",
  "$250,000+",
  "Monthly managed services",
];

const companySizes = [
  "1–25",
  "25–100",
  "100–500",
  "500–1,000",
  "1,000–5,000",
  "5,000+",
];

const timelines = [
  "Immediately",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm transition placeholder:text-navy-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100";

const labelClass = "block text-sm font-medium text-navy-800";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot check — bots fill hidden fields.
    if (data.company_website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-navy-900">
          Thank you — we&apos;ll be in touch shortly.
        </h3>
        <p className="mt-2 text-sm text-navy-600">
          A member of our team will follow up within one business day to
          schedule your discovery call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      {/* Honeypot field (hidden from users, visible to bots). */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent-600">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" type="text" className={inputClass} placeholder="Acme Inc." />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent-600">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@acme.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="(555) 555-5555" />
        </div>
        <div>
          <label htmlFor="companySize" className={labelClass}>
            Company size
          </label>
          <select id="companySize" name="companySize" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            {companySizes.map((s) => (
              <option key={s} value={s}>{s} employees</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service needed
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <select id="timeline" name="timeline" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Tell us about your goals, systems, and the problem you'd like to solve."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        )}
      >
        {status === "submitting" ? "Sending…" : "Schedule a Discovery Call"}
        {status !== "submitting" && <Icon name="arrow" className="h-4 w-4" />}
      </button>

      <p className="mt-3 text-xs text-navy-500">
        By submitting, you agree to be contacted about your inquiry. We respect
        your privacy and never share your information.
      </p>
    </form>
  );
}
