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
  caseStudies,
  insights,
} from "../site-content";
import { insightArticles } from "../insights-articles";
import { privacyPolicy, termsOfService } from "../legal";
import { articlesPt } from "./articles.pt";
import { articlesEs } from "./articles.es";
import { articlesIt } from "./articles.it";
import { legalPt } from "./legal.pt";
import { legalEs } from "./legal.es";
import { legalIt } from "./legal.it";
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

export function localizedCaseStudies(locale?: Locale) {
  const ov = overlayFor(locale)?.caseStudies;
  if (!ov) return caseStudies;
  return caseStudies.map((c) => ({ ...c, ...ov[c.slug] }));
}

export function localizedCaseStudy(slug: string, locale?: Locale) {
  return localizedCaseStudies(locale).find((c) => c.slug === slug);
}

export function localizedInsights(locale?: Locale) {
  const ov = overlayFor(locale)?.insights;
  if (!ov) return insights;
  return insights.map((p) => ({ ...p, ...ov[p.slug] }));
}

export function localizedInsight(slug: string, locale?: Locale) {
  return localizedInsights(locale).find((p) => p.slug === slug);
}

const articleMaps: Partial<Record<Locale, Record<string, string>>> = {
  pt: articlesPt,
  es: articlesEs,
  it: articlesIt,
};

/** Localized article body with English fallback. */
export function localizedArticle(slug: string, locale?: Locale): string | undefined {
  const map = articleMaps[locale ?? getLocale()];
  return map?.[slug] ?? insightArticles[slug];
}

const legalMaps: Partial<
  Record<Locale, { privacyPolicy?: string; termsOfService?: string }>
> = {
  pt: legalPt,
  es: legalEs,
  it: legalIt,
};

/** Localized legal documents (courtesy translations) with English fallback. */
export function localizedLegal(locale?: Locale) {
  const map = legalMaps[locale ?? getLocale()];
  return {
    privacyPolicy: map?.privacyPolicy ?? privacyPolicy,
    termsOfService: map?.termsOfService ?? termsOfService,
  };
}
