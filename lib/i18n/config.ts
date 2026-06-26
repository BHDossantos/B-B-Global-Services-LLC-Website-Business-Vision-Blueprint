// Internationalization configuration.

export const locales = ["en", "pt", "es", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  it: "Italiano",
};

// Short labels for the switcher chip.
export const localeShort: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  it: "IT",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
