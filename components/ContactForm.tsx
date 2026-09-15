"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { cn } from "./ui";
import type { Messages } from "@/lib/i18n/messages/en";

// Submitted option VALUES stay in English so lead scoring, CRM fields, and
// notification emails remain stable across locales; only labels translate.
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

export function ContactForm({ t }: { t: Messages["form"] }) {
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
        throw new Error(body.error || t.errorGeneric);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.errorGeneric);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-navy-900">{t.successTitle}</h3>
        <p className="mt-2 text-sm text-navy-600">{t.successBody}</p>
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
            {t.name} <span className="text-accent-600">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {t.company}
          </label>
          <input id="company" name="company" type="text" className={inputClass} placeholder="Acme Inc." />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.email} <span className="text-accent-600">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@acme.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="(555) 555-5555" />
        </div>
        <div>
          <label htmlFor="companySize" className={labelClass}>
            {t.companySize}
          </label>
          <select id="companySize" name="companySize" className={inputClass} defaultValue="">
            <option value="" disabled>{t.select}</option>
            {companySizes.map((s) => (
              <option key={s} value={s}>{s} {t.employees}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            {t.serviceNeeded}
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>{t.select}</option>
            {services.map((s, i) => (
              <option key={s} value={s}>{t.services[i] ?? s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            {t.budgetRange}
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>{t.select}</option>
            {budgets.map((b, i) => (
              <option key={b} value={b}>{t.budgets[i] ?? b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            {t.timeline}
          </label>
          <select id="timeline" name="timeline" className={inputClass} defaultValue="">
            <option value="" disabled>{t.select}</option>
            {timelines.map((tl, i) => (
              <option key={tl} value={tl}>{t.timelines[i] ?? tl}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {t.message} <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder={t.messagePlaceholder}
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
        {status === "submitting" ? t.sending : t.submit}
        {status !== "submitting" && <Icon name="arrow" className="h-4 w-4" />}
      </button>

      <p className="mt-3 text-xs text-navy-500">{t.consent}</p>
    </form>
  );
}
