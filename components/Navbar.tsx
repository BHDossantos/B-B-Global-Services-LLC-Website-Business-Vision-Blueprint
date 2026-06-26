"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button, Container, cn } from "./ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/lib/siteConfig";
import type { Messages } from "@/lib/i18n/messages/en";
import type { Locale } from "@/lib/i18n/config";

export function Navbar({ m, locale }: { m: Messages; locale: Locale }) {
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/services", label: m.nav.services },
    { href: "/solutions", label: m.nav.solutions },
    { href: "/industries", label: m.nav.industries },
    { href: "/pricing", label: m.nav.pricing },
    { href: "/case-studies", label: m.nav.caseStudies },
    { href: "/insights", label: m.nav.insights },
    { href: "/about", label: m.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-700 transition hover:text-accent-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher current={locale} />
            <Button href={siteConfig.bookingUrl}>{m.cta.bookConsultation}</Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher current={locale} />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-navy-800"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <div className={cn("lg:hidden", open ? "block border-t border-navy-100" : "hidden")}>
        <Container>
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2.5 text-base font-medium text-navy-800 hover:bg-navy-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={siteConfig.bookingUrl} className="mt-3">
              {m.cta.bookConsultation}
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
