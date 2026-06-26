import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isLocale } from "@/lib/i18n/config";

const COOKIE = "NEXT_LOCALE";

// On first visit (no locale cookie), auto-detect the visitor's preferred
// language from the Accept-Language header and set the cookie. Visitors can
// override it any time via the language switcher.
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const existing = req.cookies.get(COOKIE)?.value;
  if (isLocale(existing)) return res;

  const accept = req.headers.get("accept-language") || "";
  const detected = pickLocale(accept);
  res.cookies.set(COOKIE, detected, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

function pickLocale(accept: string): string {
  // e.g. "pt-BR,pt;q=0.9,en;q=0.8" → ["pt","en"]
  const prefs = accept
    .split(",")
    .map((p) => p.split(";")[0].trim().slice(0, 2).toLowerCase())
    .filter(Boolean);
  for (const p of prefs) if (isLocale(p)) return p;
  return defaultLocale;
}

export const config = {
  // Run on pages only; skip assets, API, and Next internals.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

// referenced to keep locales import meaningful if tree-shaken
void locales;
