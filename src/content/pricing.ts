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
