import type { Locale } from "@/lib/i18n";

export type PricingPlan = {
  name: string;
  price: string;
  suffix?: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Start",
    price: "250 €",
    description: "Jedna strana koja jasno predstavlja vašu ponudu.",
    features: [
      "Jedna strana (landing)",
      "Responzivan dizajn za telefon i računar",
      "Kontakt forma",
      "Osnovni SEO",
    ],
  },
  {
    name: "Biznis",
    price: "490 €",
    description: "Kompletan sajt za firmu sa više strana i cenovnikom.",
    features: [
      "Do 5 strana",
      "Galerija i cenovnik",
      "Kontakt preko WhatsApp-a, Vibera i emaila",
      "Lokalni SEO",
    ],
    featured: true,
  },
  {
    name: "Zakazivanje",
    price: "650 €",
    description: "Sve iz paketa Biznis, uz zakazivanje termina porukom.",
    features: [
      "Sve iz paketa Biznis",
      "Zakazivanje preko WhatsApp-a, Vibera i emaila",
      "Pregled usluga i cena za zakazivanje",
    ],
  },
];

export const maintenancePlan = {
  name: "Održavanje",
  price: "30 €",
  suffix: "/ mesec",
  features: ["Hosting i SSL", "Backup i praćenje dostupnosti", "Oko 1 sat izmena mesečno"],
};

export const pricingNotes = [
  "Navedene cene su početne („od“). Tačnu fiksnu ponudu dobijate nakon kratkog razgovora.",
  "Domen se plaća posebno.",
  "Rok izrade je najčešće 7 do 14 radnih dana.",
];

// Engleska verzija paketa (/en). Cene su iste kao na srpskom.
const pricingPlansEn: PricingPlan[] = [
  {
    name: "Start",
    price: "250 €",
    description: "One page that presents your offer clearly.",
    features: [
      "One page (landing page)",
      "Responsive design for phone and desktop",
      "Contact form",
      "Basic SEO",
    ],
  },
  {
    name: "Business",
    price: "490 €",
    description: "A complete business website with several pages and a price list.",
    features: [
      "Up to 5 pages",
      "Gallery and price list",
      "Contact via WhatsApp, Viber and email",
      "Local SEO",
    ],
    featured: true,
  },
  {
    name: "Booking",
    price: "650 €",
    description: "Everything in Business, plus booking by message.",
    features: [
      "Everything in Business",
      "Booking via WhatsApp, Viber and email",
      "Services and prices overview for booking",
    ],
  },
];

const maintenancePlanEn = {
  name: "Maintenance",
  price: "30 €",
  suffix: "/ month",
  features: [
    "Hosting and SSL",
    "Backups and uptime monitoring",
    "About 1 hour of changes per month",
  ],
};

const pricingNotesEn = [
  "Prices shown are starting prices. You get an exact fixed quote after a short call.",
  "The domain is paid separately.",
  "Most websites are ready in 7 to 14 working days.",
];

export function getPricingContent(locale: Locale) {
  return locale === "en"
    ? { plans: pricingPlansEn, maintenance: maintenancePlanEn, notes: pricingNotesEn }
    : { plans: pricingPlans, maintenance: maintenancePlan, notes: pricingNotes };
}
