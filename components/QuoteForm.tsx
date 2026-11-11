"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "./ui";
import type { Messages } from "@/lib/i18n/messages/en";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm transition placeholder:text-navy-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100";

const labelClass = "block text-sm font-medium text-navy-800";

/**
 * Insurance quote request form. The SMS consent disclosure sits directly above
 * the submit button and is submitted with the lead (`smsConsent` +
 * `consentText`) so the exact wording the person agreed to is recorded with a
 * timestamp — the proof of express written consent TCPA and carriers require.
 */
export function QuoteForm({ t }: { t: Messages["quote"] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill hidden fields.
    if (data.company_website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType: "insurance-quote",
          smsConsent: true,
          consentText: t.smsConsent,
        }),
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
        <p className="mt-2 text-sm leading-relaxed text-navy-600">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <h2 className="text-xl font-semibold text-navy-900">{t.formTitle}</h2>
      <p className="mt-1.5 text-sm text-navy-600">{t.formIntro}</p>

      {/* Honeypot field (hidden from users, visible to bots). */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.nameLabel} <span className="text-accent-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.emailLabel} <span className="text-accent-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder={t.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.phoneLabel} <span className="text-accent-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder={t.phonePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="quoteType" className={labelClass}>
            {t.typeLabel}
          </label>
          <select id="quoteType" name="quoteType" className={inputClass} defaultValue="">
            <option value="" disabled>
              {t.typeSelect}
            </option>
            {t.types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder={t.messagePlaceholder}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      {/* SMS consent disclosure — carrier-verified wording, kept directly
          adjacent to the submit button. Do not reword or relocate. */}
      <p className="mt-6 rounded-lg border border-navy-100 bg-navy-50 p-4 text-xs leading-relaxed text-navy-700">
        {t.smsConsent}
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        )}
      >
        {status === "submitting" ? t.sending : t.submit}
        {status !== "submitting" && <Icon name="arrow" className="h-4 w-4" />}
      </button>

      <p className="mt-4 text-xs text-navy-500">
        {t.legalIntro}{" "}
        <Link href="/privacy" className="font-semibold text-accent-600 underline hover:text-accent-700">
          {t.privacyPolicy}
        </Link>
        {" · "}
        <Link href="/terms" className="font-semibold text-accent-600 underline hover:text-accent-700">
          {t.termsOfService}
        </Link>
      </p>
      <p className="mt-2 text-xs text-navy-500">{t.brokerDisclosure}</p>
    </form>
  );
}
