import type { Locale } from "@/lib/i18n";

export type PricingPlan = {
  name: string;
  price: string;
  suffix?: string;
  description: string;
  /** Kome je paket namenjen, jednom rečenicom. */
  audience: string;
  features: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Start",
    price: "250 €",
    description: "Jedna strana koja jasno predstavlja vašu ponudu.",
    audience: "Za majstore i konsultante kojima treba ozbiljna vizitkarta na internetu.",
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
    audience: "Za firme sa više usluga koje žele cenovnik, galeriju i lokalni SEO.",
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
    description:
      "Sve iz paketa Biznis, uz formu za zahtev za termin: klijent ne kuca poruku, nego izabere uslugu i termin.",
    audience: "Za salone i ordinacije koji rade po terminima.",
    features: [
      "Sve iz paketa Biznis",
      "Forma za zahtev za termin: usluga, datum i deo dana",
      "Uređen zahtev stiže vam na WhatsApp, Viber ili email",
      "Vi potvrđujete termin kad stignete",
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
  "Rok izrade je najčešće 7 do 14 radnih dana.",
];

/** Online rezervacija (kalendar slobodnih termina) je zaseban projekat sa okvirnom cenom. */
export const onlineBookingPrice = "od 900 €";

export type CostItem = { title: string; text: string };

/** Šta klijent plaća posle izrade: kratki, konkretni odgovori uz pakete. */
export const afterLaunchCosts: CostItem[] = [
  {
    title: "Domen",
    text: "Oko 15 € godišnje. Registruje se na vaše ime i plaća direktno registru.",
  },
  {
    title: "Hosting",
    text: "Prva godina je uključena u cenu izrade. Posle toga je deo održavanja.",
  },
  {
    title: "Bez održavanja",
    text: "Sajt i dalje radi. Izmene plaćate po potrebi, 20 € po satu.",
  },
  {
    title: "Sa održavanjem, 30 € mesečno",
    text: "Hosting, backup, praćenje i do 1 sat izmena mesečno, na primer nove cene, radno vreme ili slike. Neiskorišćeno vreme se ne prenosi.",
  },
];

// Engleska verzija paketa (/en). Cene su iste kao na srpskom.
const pricingPlansEn: PricingPlan[] = [
  {
    name: "Start",
    price: "250 €",
    description: "One page that presents your offer clearly.",
    audience: "For tradespeople and consultants who need a serious online business card.",
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
    audience: "For businesses with several services that want a price list, gallery and local SEO.",
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
    description:
      "Everything in Business, plus an appointment request form: clients don't type a message, they pick a service and a time.",
    audience: "For salons and practices that work by appointment.",
    features: [
      "Everything in Business",
      "Appointment request form: service, date and time of day",
      "A tidy request arrives on WhatsApp, Viber or email",
      "You confirm the appointment when you can",
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
  "Most websites are ready in 7 to 14 working days.",
];

const onlineBookingPriceEn = "from 900 €";

const afterLaunchCostsEn: CostItem[] = [
  {
    title: "Domain",
    text: "About 15 € a year, registered in your name and paid directly to the registrar.",
  },
  {
    title: "Hosting",
    text: "The first year is included in the build price. After that it is part of maintenance.",
  },
  {
    title: "Without maintenance",
    text: "The site keeps working. Changes are paid as needed, 20 € per hour.",
  },
  {
    title: "With maintenance, 30 € a month",
    text: "Hosting, backups, monitoring and up to 1 hour of changes a month, such as new prices, opening hours or photos. Unused time does not carry over.",
  },
];

export function getPricingContent(locale: Locale) {
  return locale === "en"
    ? {
        plans: pricingPlansEn,
        maintenance: maintenancePlanEn,
        notes: pricingNotesEn,
        onlineBooking: onlineBookingPriceEn,
        costs: afterLaunchCostsEn,
      }
    : {
        plans: pricingPlans,
        maintenance: maintenancePlan,
        notes: pricingNotes,
        onlineBooking: onlineBookingPrice,
        costs: afterLaunchCosts,
      };
}
