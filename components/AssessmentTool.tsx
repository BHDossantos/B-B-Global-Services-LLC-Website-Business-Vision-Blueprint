"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { cn } from "./ui";
import {
  assessmentQuestions,
  getTier,
  maxScore,
} from "@/lib/content/assessment";
import { getService } from "@/lib/content/services";
import { siteConfig } from "@/lib/siteConfig";

type Phase = "questions" | "capture" | "result";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm transition placeholder:text-navy-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100";

export function AssessmentTool() {
  const [phase, setPhase] = useState<Phase>("questions");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const total = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  );
  const answeredCount = Object.keys(answers).length;
  const tier = getTier(total);
  const percent = Math.round((total / maxScore) * 100);

  const current = assessmentQuestions[step];
  const progress = Math.round((step / assessmentQuestions.length) * 100);

  function choose(score: number) {
    const next = { ...answers, [current.id]: score };
    setAnswers(next);
    if (step < assessmentQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setPhase("capture");
    }
  }

  // Weakest pillars drive the personalized recommendations.
  const weakest = useMemo(() => {
    return [...assessmentQuestions]
      .map((q) => ({ q, score: answers[q.id] ?? 0 }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 3)
      .map(({ q }) => q);
  }, [answers]);

  async function handleCapture(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company_website) {
      setPhase("result");
      return;
    }

    const breakdown = assessmentQuestions
      .map((q) => `${q.pillar}: ${answers[q.id] ?? 0}/3`)
      .join("; ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          service: "Technology Health Check (self-assessment)",
          message: `Self-assessment result: ${total}/${maxScore} (${percent}%) — Tier: ${tier.label}. Breakdown — ${breakdown}.`,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setPhase("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Questions ──────────────────────────────────────────────
  if (phase === "questions") {
    return (
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between text-sm text-navy-500">
          <span className="font-semibold text-accent-600">{current.pillar}</span>
          <span>
            Question {step + 1} of {assessmentQuestions.length}
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-400 to-electric-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="mt-6 text-xl font-semibold text-navy-900">
          {current.question}
        </h2>

        <div className="mt-5 space-y-3">
          {current.options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => choose(opt.score)}
              className="flex w-full items-center justify-between gap-4 rounded-xl border border-navy-200 bg-white px-4 py-3.5 text-left text-sm font-medium text-navy-800 transition hover:border-accent-400 hover:bg-accent-50"
            >
              {opt.label}
              <Icon name="arrow" className="h-4 w-4 flex-none text-navy-300" />
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-navy-800"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Back
          </button>
        )}
      </div>
    );
  }

  // ── Lead capture ───────────────────────────────────────────
  if (phase === "capture") {
    return (
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-accent-600">
          <Icon name="check" className="h-5 w-5" /> All {assessmentQuestions.length}{" "}
          questions answered
        </div>
        <h2 className="mt-3 text-2xl font-bold text-navy-900">
          Where should we send your results?
        </h2>
        <p className="mt-2 text-sm text-navy-600">
          See your technology maturity score, a per-area breakdown, and the
          recommended next step. No spam — just your results and an optional
          follow-up.
        </p>

        <form onSubmit={handleCapture} className="mt-6" noValidate>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="a-name" className="block text-sm font-medium text-navy-800">
                Name <span className="text-accent-600">*</span>
              </label>
              <input id="a-name" name="name" required className={inputClass} placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="a-company" className="block text-sm font-medium text-navy-800">
                Company
              </label>
              <input id="a-company" name="company" className={inputClass} placeholder="Acme Inc." />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="a-email" className="block text-sm font-medium text-navy-800">
              Work email <span className="text-accent-600">*</span>
            </label>
            <input id="a-email" name="email" type="email" required className={inputClass} placeholder="jane@acme.com" />
          </div>

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-accent-600 disabled:opacity-70 sm:w-auto"
          >
            {submitting ? "Calculating…" : "Show My Results"}
            {!submitting && <Icon name="arrow" className="h-4 w-4" />}
          </button>
          <p className="mt-3 text-xs text-navy-500">
            We respect your privacy and never share your information.
          </p>
        </form>
      </div>
    );
  }

  // ── Result ─────────────────────────────────────────────────
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="12" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#1ec8c8"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 52}
              strokeDashoffset={2 * Math.PI * 52 * (1 - percent / 100)}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-bold text-navy-900">{percent}%</span>
            <span className="text-xs font-medium text-navy-500">{total}/{maxScore}</span>
          </div>
        </div>
        <span className="mt-4 inline-block rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-700">
          {tier.label}
        </span>
        <h2 className="mt-3 text-2xl font-bold text-navy-900">{tier.headline}</h2>
        <p className="mt-3 max-w-xl text-navy-600">{tier.summary}</p>
      </div>

      <div className="mt-8 border-t border-navy-100 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
          Your maturity by area
        </h3>
        <ul className="mt-4 space-y-3">
          {assessmentQuestions.map((q) => {
            const score = answers[q.id] ?? 0;
            return (
              <li key={q.id} className="flex items-center gap-3">
                <span className="w-44 flex-none text-sm text-navy-700">{q.pillar}</span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-navy-100">
                  <span
                    className={cn(
                      "block h-full rounded-full",
                      score <= 1 ? "bg-gold-500" : score === 2 ? "bg-electric-500" : "bg-accent-500"
                    )}
                    style={{ width: `${(score / 3) * 100}%` }}
                  />
                </span>
                <span className="w-10 flex-none text-right text-sm font-medium text-navy-600">
                  {score}/3
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 rounded-xl bg-navy-50 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
          Recommended focus areas
        </h3>
        <ul className="mt-3 space-y-2">
          {weakest.map((q) => {
            const svc = getService(q.serviceSlug);
            return (
              <li key={q.id} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-navy-700">{q.pillar}</span>
                {svc && (
                  <Link href={`/services/${svc.slug}`} className="font-semibold text-accent-600 hover:text-accent-700">
                    {svc.title} →
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-600"
        >
          Book a Consultation <Icon name="arrow" className="h-4 w-4" />
        </a>
        <Link
          href="/contact"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-navy-200 px-6 py-3 text-base font-semibold text-navy-800 transition hover:border-navy-400 hover:bg-navy-50"
        >
          Request the {tier.recommendedOffer}
        </Link>
      </div>
    </div>
  );
}
