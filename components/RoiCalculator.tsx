"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/siteConfig";

const inputClass =
  "w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100";

function currency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

type Field = {
  id: string;
  label: string;
  hint: string;
  default: number;
  min: number;
  step: number;
};

const fields: Field[] = [
  {
    id: "employees",
    label: "Employees affected during an outage",
    hint: "People who can't work productively when systems are down.",
    default: 50,
    min: 1,
    step: 1,
  },
  {
    id: "hourlyCost",
    label: "Average fully-loaded hourly cost per employee ($)",
    hint: "Salary + benefits + overhead, per hour.",
    default: 55,
    min: 1,
    step: 1,
  },
  {
    id: "downtimeHours",
    label: "Hours of unplanned downtime per month",
    hint: "Outages, incidents, and degraded systems.",
    default: 8,
    min: 0,
    step: 1,
  },
  {
    id: "revenuePerHour",
    label: "Revenue at risk per downtime hour ($)",
    hint: "Lost or delayed revenue per hour of disruption. Use 0 if N/A.",
    default: 1500,
    min: 0,
    step: 100,
  },
];

export function RoiCalculator() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(fields.map((f) => [f.id, f.default]))
  );

  function update(id: string, raw: string) {
    const n = Math.max(0, Number(raw) || 0);
    setValues((v) => ({ ...v, [id]: n }));
  }

  const monthlyProductivity =
    values.employees * values.hourlyCost * values.downtimeHours;
  const monthlyRevenue = values.revenuePerHour * values.downtimeHours;
  const monthlyTotal = monthlyProductivity + monthlyRevenue;
  const annualTotal = monthlyTotal * 12;

  // Illustrative: a mature reliability/BCDR program typically reduces
  // unplanned downtime materially. We show a conservative 60% reduction.
  const recoverable = annualTotal * 0.6;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-navy-900">Your numbers</h2>
        <p className="mt-1 text-sm text-navy-600">
          Adjust the inputs to match your business. Results update instantly.
        </p>
        <div className="mt-6 space-y-5">
          {fields.map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-sm font-medium text-navy-800">
                {f.label}
              </label>
              <input
                id={f.id}
                type="number"
                inputMode="numeric"
                min={f.min}
                step={f.step}
                value={values[f.id]}
                onChange={(e) => update(f.id, e.target.value)}
                className={`mt-1.5 ${inputClass}`}
              />
              <p className="mt-1 text-xs text-navy-500">{f.hint}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col rounded-2xl border border-accent-200 bg-navy-950 p-6 text-white shadow-sm sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent-300">
          Estimated cost of downtime
        </h2>

        <div className="mt-4">
          <p className="text-4xl font-bold text-white">{currency(annualTotal)}</p>
          <p className="text-sm text-navy-300">per year</p>
        </div>

        <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-navy-300">Productivity loss / month</dt>
            <dd className="font-semibold">{currency(monthlyProductivity)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-navy-300">Revenue at risk / month</dt>
            <dd className="font-semibold">{currency(monthlyRevenue)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-navy-300">Total / month</dt>
            <dd className="font-semibold">{currency(monthlyTotal)}</dd>
          </div>
        </dl>

        <div className="mt-6 rounded-xl bg-gradient-to-r from-accent-500/20 to-electric-500/20 p-5">
          <p className="text-sm text-navy-100">
            Potentially recoverable with a mature reliability &amp; BCDR program
          </p>
          <p className="mt-1 text-2xl font-bold text-accent-300">
            ~{currency(recoverable)}/year
          </p>
          <p className="mt-1 text-xs text-navy-400">
            Illustrative, assuming a conservative 60% reduction in unplanned
            downtime.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-600"
          >
            Reduce Your Downtime Cost <Icon name="arrow" className="h-4 w-4" />
          </a>
          <Link
            href="/services/reliability-bcdr"
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-accent-200"
          >
            Explore Reliability &amp; BCDR services
          </Link>
        </div>
      </div>
    </div>
  );
}
