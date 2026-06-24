"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { cn } from "./ui";

/**
 * Compact email capture for top-of-funnel visitors. Posts to /api/subscribe.
 * `variant="footer"` is styled for the dark footer; default for light sections.
 */
export function NewsletterSignup({
  source = "newsletter",
  variant = "light",
}: {
  source?: string;
  variant?: "light" | "footer";
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company_website) {
      setStatus("done");
      return;
    }
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, source }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b.error || "Something went wrong.");
      }
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const dark = variant === "footer";

  if (status === "done") {
    return (
      <p className={cn("flex items-center gap-2 text-sm font-medium", dark ? "text-accent-300" : "text-accent-700")}>
        <Icon name="check" className="h-4 w-4" /> You&apos;re subscribed — thanks!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="hidden" aria-hidden="true">
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`nl-${source}`} className="sr-only">Email address</label>
        <input
          id={`nl-${source}`}
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={cn(
            "w-full rounded-lg border px-3.5 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2",
            dark
              ? "border-white/15 bg-white/5 text-white placeholder:text-navy-400 focus:border-accent-400 focus:ring-accent-500/30"
              : "border-navy-200 bg-white text-navy-900 placeholder:text-navy-400 focus:border-accent-400 focus:ring-accent-100"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex flex-none items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-600 disabled:opacity-70"
        >
          {status === "loading" ? "…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className={cn("mt-2 text-xs", dark ? "text-red-300" : "text-red-600")}>{error}</p>
      )}
    </form>
  );
}
