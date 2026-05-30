"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button, Container, cn } from "./ui";
import { mainNav, siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-700 transition hover:text-accent-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={siteConfig.bookingUrl} external>
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-800 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-navy-100" : "hidden"
        )}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2.5 text-base font-medium text-navy-800 hover:bg-navy-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={siteConfig.bookingUrl} external className="mt-3">
              Book a Consultation
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
