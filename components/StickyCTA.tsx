"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { cn } from "./ui";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Floating "Book a Consultation" button that fades in after the user scrolls
 * past the hero, then can be dismissed for the session. Keeps the primary
 * conversion action one tap away without nagging.
 */
export function StickyCTA() {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShown(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-40 flex items-center gap-1 transition-all duration-300 sm:bottom-6 sm:right-6",
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition hover:bg-accent-600"
      >
        <Icon name="calendar" className="h-4 w-4" />
        Book a Consultation
      </a>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="grid h-8 w-8 place-items-center rounded-full bg-navy-800 text-white/80 shadow-lg transition hover:bg-navy-700"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
