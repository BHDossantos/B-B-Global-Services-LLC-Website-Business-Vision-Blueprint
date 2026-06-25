"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function UnsubscribeForm({ initialEmail }: { initialEmail: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <p className="mt-4 font-semibold text-navy-900">You&apos;re unsubscribed.</p>
        <p className="mt-1 text-sm text-navy-600">
          You won&apos;t receive further outreach from us. Thank you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
      <label htmlFor="unsub-email" className="block text-left text-sm font-medium text-navy-800">
        Email address
      </label>
      <input
        id="unsub-email"
        name="email"
        type="email"
        required
        defaultValue={initialEmail}
        className="mt-1.5 w-full rounded-lg border border-navy-200 px-3.5 py-2.5 text-sm focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-100"
      />
      {status === "error" && (
        <p className="mt-2 text-left text-xs text-red-600">Something went wrong — please email hello@bnbglobal.net.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:opacity-70"
      >
        {status === "loading" ? "Removing…" : "Unsubscribe me"}
      </button>
    </form>
  );
}
