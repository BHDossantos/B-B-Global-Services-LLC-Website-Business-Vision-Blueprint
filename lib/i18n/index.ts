import { cookies } from "next/headers";
import { en, type Messages } from "./messages/en";
import { pt } from "./messages/pt";
import { es } from "./messages/es";
import { it } from "./messages/it";
import { defaultLocale, isLocale, type Locale } from "./config";

export const LOCALE_COOKIE = "NEXT_LOCALE";

const dictionaries: Record<Locale, Messages> = {
  en,
  pt: pt as Messages,
  es: es as Messages,
  it: it as Messages,
};

/** Deep-merge a locale dictionary over English so any missing key falls back. */
function withFallback(locale: Locale): Messages {
  if (locale === "en") return en;
  return deepMerge(en, dictionaries[locale]) as Messages;
}

function deepMerge(base: any, over: any): any {
  if (Array.isArray(base)) return Array.isArray(over) && over.length ? over : base;
  if (base && typeof base === "object") {
    const out: any = { ...base };
    for (const k of Object.keys(base)) {
      out[k] = over && k in over ? deepMerge(base[k], over[k]) : base[k];
    }
    return out;
  }
  return over ?? base;
}

/** Read the active locale from the cookie (set by middleware / switcher). */
export function getLocale(): Locale {
  const v = cookies().get(LOCALE_COOKIE)?.value;
  return isLocale(v) ? v : defaultLocale;
}

/** Get the message catalog for the active (or given) locale, with EN fallback. */
export function getMessages(locale?: Locale): Messages {
  return withFallback(locale ?? getLocale());
}
