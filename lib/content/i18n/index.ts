// Locale-aware accessors for structured content. Merge the active locale's
// translation overlay over the English base, with per-field fallback.

import { services, type Service } from "../services";
import { solutions, type Solution } from "../solutions";
import { industryPages, type IndustryPage } from "../industries-detail";
import {
  lifecycleFramework,
  painPoints,
  differentiators,
  featuredSolutions,
  idealCustomers,
  faqs,
  engagementOffers,
} from "../site-content";
import { getLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import type { ContentOverlay } from "./types";
import { ptContent } from "./content.pt";
import { esContent } from "./content.es";
import { itContent } from "./content.it";

const overlays: Partial<Record<Locale, ContentOverlay>> = {
  pt: ptContent,
  es: esContent,
  it: itContent,
};

function overlayFor(locale?: Locale): ContentOverlay | undefined {
  return overlays[locale ?? getLocale()];
}

export function localizedServices(locale?: Locale): Service[] {
  const ov = overlayFor(locale);
  if (!ov) return services;
  return services.map((s) => ({ ...s, ...ov.services[s.slug] }));
}

export function localizedService(slug: string, locale?: Locale): Service | undefined {
  return localizedServices(locale).find((s) => s.slug === slug);
}

export function localizedSolutions(locale?: Locale): Solution[] {
  const ov = overlayFor(locale);
  if (!ov) return solutions;
  return solutions.map((s) => ({ ...s, ...ov.solutions[s.slug] }));
}

export function localizedSolution(slug: string, locale?: Locale): Solution | undefined {
  return localizedSolutions(locale).find((s) => s.slug === slug);
}

export function localizedIndustries(locale?: Locale): IndustryPage[] {
  const ov = overlayFor(locale);
  if (!ov) return industryPages;
  return industryPages.map((i) => ({ ...i, ...ov.industries[i.slug] }));
}

export function localizedIndustry(slug: string, locale?: Locale): IndustryPage | undefined {
  return localizedIndustries(locale).find((i) => i.slug === slug);
}

/** Shared site-content arrays with the active locale's translations applied. */
export function localizedSiteContent(locale?: Locale) {
  const site = overlayFor(locale)?.site;
  return {
    lifecycleFramework: site?.lifecyclePhases
      ? {
          ...lifecycleFramework,
          phases: lifecycleFramework.phases.map((p, i) => ({
            ...p,
            ...site.lifecyclePhases?.[i],
          })),
        }
      : lifecycleFramework,
    painPoints: site?.painPoints ?? painPoints,
    differentiators: site?.differentiators ?? differentiators,
    featuredSolutions: site?.featuredSolutions ?? featuredSolutions,
    idealCustomers: site?.idealCustomers ?? idealCustomers,
    faqs: site?.faqs ?? faqs,
    engagementOffers: site?.engagementOffers ?? engagementOffers,
  };
}
