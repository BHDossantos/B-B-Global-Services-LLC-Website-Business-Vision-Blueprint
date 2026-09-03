// Shared types for per-locale content overlays. Each overlay maps a slug to
// the translated subset of fields; anything missing falls back to English.
import type { Service } from "../services";
import type { Solution } from "../solutions";
import type { IndustryPage } from "../industries-detail";

export type ServiceOverlay = Partial<Pick<Service, "title" | "headline" | "summary">>;
export type SolutionOverlay = Partial<Pick<Solution, "title" | "summary" | "audience" | "body">>;
export type IndustryOverlay = Partial<Pick<IndustryPage, "name" | "cardDescription" | "title" | "intro">>;

export type ContentOverlay = {
  services: Record<string, ServiceOverlay>;
  solutions: Record<string, SolutionOverlay>;
  industries: Record<string, IndustryOverlay>;
};
