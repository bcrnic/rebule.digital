import { useRouterState } from "@tanstack/react-router";
import { ui, type UiStrings } from "@/content/ui";

// Sajt ima dva jezika: srpski na korenu (/) i engleski pod /en.
// Engleska verzija pokriva početnu, studije slučaja i privatnost; stranice usluga su samo na srpskom.
export type Locale = "sr" | "en";

export const localeFromPath = (pathname: string): Locale =>
  /^\/en(\/|$)/.test(pathname) ? "en" : "sr";

/** Jezik stranice koja je trenutno prikazana (ne one na koju se tek prelazi). */
export function useLocale(): Locale {
  return useRouterState({
    select: (s) => localeFromPath((s.resolvedLocation ?? s.location).pathname),
  });
}

export function useUi(): UiStrings {
  return ui[useLocale()];
}

/** Id-jevi sekcija na početnoj, za linkove sa # u adresi. */
export const sectionIds = {
  sr: {
    home: "home",
    services: "usluge",
    pricing: "cene",
    portfolio: "portfolio",
    testimonials: "utisci",
    about: "o-meni",
    faq: "faq",
    contact: "kontakt",
  },
  en: {
    home: "home",
    services: "services",
    pricing: "pricing",
    portfolio: "work",
    testimonials: "testimonials",
    about: "about",
    faq: "faq",
    contact: "contact",
  },
} as const;

export const useSectionIds = () => sectionIds[useLocale()];

/** Ista stranica na drugom jeziku; stranice bez prevoda vode na početnu tog jezika. */
export function alternatePath(pathname: string, target: Locale): string {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (target === "en") {
    if (localeFromPath(path) === "en") return path;
    if (path === "/") return "/en";
    const project = path.match(/^\/projekat\/([^/]+)$/);
    if (project) return `/en/project/${project[1]}`;
    if (path === "/privatnost") return "/en/privacy";
    return "/en";
  }
  if (localeFromPath(path) === "sr") return path;
  if (path === "/en") return "/";
  const project = path.match(/^\/en\/project\/([^/]+)$/);
  if (project) return `/projekat/${project[1]}`;
  if (path === "/en/privacy") return "/privatnost";
  return "/";
}

export const htmlLang = (locale: Locale) => (locale === "en" ? "en" : "sr-Latn");
export const ogLocale = (locale: Locale) => (locale === "en" ? "en_US" : "sr_RS");
