import misolutionsImage from "@/assets/project-misolutions.webp";
import misolutionsImageSmall from "@/assets/project-misolutions-800.webp";
import remiImage from "@/assets/project-remielectric.webp";
import remiImageSmall from "@/assets/project-remielectric-800.webp";
import residenceImage from "@/assets/project-residence.webp";
import residenceImageSmall from "@/assets/project-residence-800.webp";
import advokatImage from "@/assets/project-advokat.webp";
import advokatImageSmall from "@/assets/project-advokat-800.webp";
import fizioImage from "@/assets/project-fizioterapija.webp";
import fizioImageSmall from "@/assets/project-fizioterapija-800.webp";
import vojkanImage from "@/assets/project-vojkan.webp";
import vojkanImageSmall from "@/assets/project-vojkan-800.webp";
import { projectsEn } from "@/content/projects.en";
import type { Locale } from "@/lib/i18n";

export type ProjectCategory = "Zakazivanje" | "Portfolio" | "Nekretnine" | "Biznis";

export type ProjectMetric = {
  label: string;
  value: string;
  hint?: string;
};

export type Project = {
  id: string;
  title: string;
  /** Niša za H1 i title studije slučaja: „Sajt za …“. */
  niche: string;
  /** Stranica usluge na koju studija linkuje, ako postoji. */
  servicePath?: string;
  category: ProjectCategory;
  client?: string;
  year?: string;
  description: string;
  /** Opis za Google (do ~155 karaktera); ako ga nema, koristi se description. */
  seoDescription?: string;
  problem: string;
  solution: string;
  /** Šta možemo da potvrdimo: reči klijenta ili ono što se na sajtu može isprobati, bez izmišljenih brojki. */
  result: string;
  /** Kako sada izgleda jedna važna radnja na sajtu, u nekoliko koraka. */
  keyAction?: { title: string; steps: string[] };
  technologies: string[];
  deliverables?: string[];
  metrics?: ProjectMetric[];
  image: string;
  /** Ista slika, 800px široka, za telefon i manje prikaze. */
  imageSmall: string;
  /** Širina originalne slike u px. */
  imageWidth?: number;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "modni-frizer-vojkan",
    title: "Modni Frizer Vojkan",
    niche: "Sajt za frizerski salon",
    servicePath: "/sajt-za-frizerski-salon",
    category: "Zakazivanje",
    client: "Salon Vojkan",
    year: "2026",
    seoDescription:
      "Studija slučaja: sajt za ženski frizerski salon u Novom Sadu sa 40 godina tradicije. Cenovnik, galerija i zakazivanje termina porukom.",
    description:
      "Sajt za ženski frizerski salon sa 40 godina tradicije, cenovnikom i zakazivanjem termina.",
    problem:
      "Salon sa dugom tradicijom nije imao sajt - termini su se zakazivali isključivo telefonom i usmeno.",
    solution:
      "Napravljen je elegantan sajt sa uslugama, cenovnikom, galerijom i zahtevom za termin preko WhatsApp-a, Vibera i emaila.",
    result:
      "Prema rečima salona, klijentkinje sada unapred vide usluge i cene i zakazuju preko WhatsApp-a, a telefon ih mnogo ređe prekida tokom šišanja.",
    keyAction: {
      title: "Kako klijentkinja traži termin",
      steps: [
        "Otvori cenovnik na telefonu i izabere uslugu.",
        "Klikne na WhatsApp, Viber ili email i pošalje željeni termin.",
        "Salon potvrdi termin kad stigne, između dve klijentkinje.",
      ],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    deliverables: [
      "Dizajn cenovnika",
      "Zahtev za termin porukom",
      "Mobilna optimizacija",
      "Galerija radova",
    ],
    metrics: [
      { label: "Zakazivanje termina", value: "Porukom", hint: "WhatsApp, Viber i email" },
      { label: "Cene unapred", value: "Cenovnik", hint: "Klijentkinje znaju šta biraju" },
      { label: "Prilagođeno telefonu", value: "Mobilni", hint: "Pregledno na svakom ekranu" },
    ],
    image: vojkanImage,
    imageSmall: vojkanImageSmall,
    url: "https://frizervojkan.rs/",
  },
  {
    id: "remielectric",
    title: "REMIELECTRIC",
    niche: "Sajt za elektroinstalatere",
    servicePath: "/sajt-za-majstore",
    category: "Zakazivanje",
    client: "REMIELECTRIC Novi Sad",
    year: "2026",
    seoDescription:
      "Studija slučaja: sajt za elektroinstalatere iz Novog Sada sa pregledom usluga, dugmetom za hitan poziv i zakazivanjem besplatnog pregleda.",
    description:
      "Sajt za elektro instalatere iz Novog Sada sa jasnim uslugama i zakazivanjem besplatnog pregleda.",
    problem:
      "Posao je dolazio isključivo preporukom, bez mesta na kom klijenti vide usluge, cene i način da zakažu dolazak.",
    solution:
      "Napravljen je sajt sa pregledom svih usluga, recenzijama klijenata, čestim pitanjima i formom za zakazivanje besplatnog pregleda.",
    result:
      "Prema rečima klijenta, ljudi ih preko sajta odmah zovu za hitne intervencije ili traže besplatan pregled.",
    keyAction: {
      title: "Kako klijent dolazi do električara",
      steps: [
        "Na telefonu je dugme za hitan poziv uvek pri ruci.",
        "Za redovan posao klijent pregleda usluge i česta pitanja.",
        "Pošalje zahtev za besplatan pregled kroz formu na sajtu.",
      ],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    deliverables: [
      "Prezentacija usluga",
      "Sistem za hitne intervencije",
      "FAQ sekcija",
      "Lokalni SEO",
    ],
    metrics: [
      {
        label: "Dugme za hitne slučajeve",
        value: "Hitan poziv",
        hint: "Jednim dodirom sa telefona",
      },
      { label: "Zakazivanje sa sajta", value: "Pregled", hint: "Forma za besplatan pregled" },
      { label: "Vidljivost na Google-u", value: "Lokalni SEO", hint: "Za pretrage u Novom Sadu" },
    ],
    image: remiImage,
    imageSmall: remiImageSmall,
    url: "https://bcrnic.github.io/remielectric/",
  },
  {
    id: "residence",
    title: "Residence",
    niche: "Sajt za prodaju stanova",
    category: "Nekretnine",
    client: "Investitor Residence",
    year: "2026",
    seoDescription:
      "Studija slučaja: prodajni sajt za investitora sa katalogom stanova, cenama, tlocrtima, filterima po strukturi i oznakom slobodnih stanova.",
    description:
      "Prodajni sajt za investitora sa katalogom stanova, filterima po strukturi i statusom dostupnosti.",
    problem:
      "Kupci nisu imali gde da vide koji su stanovi slobodni, koliko koštaju i kako izgledaju.",
    solution:
      "Napravljen je elegantan prodajni sajt za zgradu od dvadeset stanova: pregled svih stanova sa cenama, kvadraturom, spratom, galerijama i oznakom „prodato“, uz filtere po broju soba i rok useljenja.",
    result:
      "Na sajtu se može isprobati: svi stanovi sa cenom, kvadraturom, spratom i statusom su na jednom mestu, a upit se šalje za tačno određen stan.",
    keyAction: {
      title: "Kako kupac nalazi stan",
      steps: [
        "Filtrira stanove po broju soba.",
        "Otvori stan i vidi cenu, kvadraturu, sprat, tlocrt i galeriju.",
        "Pošalje upit baš za taj stan.",
      ],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Filter Engine"],
    deliverables: [
      "Katalog stanova",
      "Filteri po strukturi",
      "Tlocrti i galerija",
      "Upit za pojedinačni stan",
    ],
    metrics: [
      { label: "Svi stanovi na jednom mestu", value: "Katalog", hint: "Cene, kvadratura i sprat" },
      { label: "Pretraga po strukturi", value: "Filteri", hint: "Po broju soba" },
      { label: "Dostupnost stanova", value: "Ažurno", hint: "Oznake za prodato/slobodno" },
    ],
    image: residenceImage,
    imageSmall: residenceImageSmall,
    url: "https://bcrnic.github.io/residence/",
  },
  {
    id: "misolutions",
    title: "MiSolutions",
    niche: "Sajt za konsultantsku agenciju",
    category: "Biznis",
    client: "MiSolutions Konsalting",
    year: "2026",
    seoDescription:
      "Studija slučaja: prezentacioni sajt konsultantske agencije za istraživanje tržišta, sa jasnom ponudom, rezultatima i B2B kontakt formom.",
    description:
      "Prezentacioni sajt konsultantske agencije za istraživanje tržišta i rast prodaje.",
    problem:
      "Agencija je imala odlične rezultate, ali nije imala način da ih jasno predstavi novim klijentima.",
    solution:
      "Struktuiran je sajt oko tri glavne usluge, sa merljivim rezultatima, utiscima klijenata i jasnim pozivom na kontakt.",
    result:
      "Prema rečima klijenta, sajt umesto PDF kataloga odmah gradi autoritet i donosi poslovne upite.",
    keyAction: {
      title: "Kako firma postaje klijent agencije",
      steps: [
        "Vidi tri glavne usluge agencije, jasno izdvojene.",
        "Pogleda rezultate i utiske dosadašnjih klijenata.",
        "Pošalje poslovni upit kroz posebnu B2B formu.",
      ],
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Radix Primitives"],
    deliverables: [
      "Struktura ponude",
      "Prezentacija studija slučaja",
      "B2B Kontakt forma",
      "Brending usklađivanje",
    ],
    metrics: [
      { label: "Struktura ponude", value: "3 usluge", hint: "Jasno izdvojene i objašnjene" },
      { label: "Rezultati klijenata", value: "Studije", hint: "Umesto PDF brošure" },
      { label: "Poslovni upiti", value: "B2B forma", hint: "Direktan kontakt sa agencijom" },
    ],
    image: misolutionsImage,
    imageSmall: misolutionsImageSmall,
    url: "https://bcrnic.github.io/MiSolutions/",
  },
  {
    id: "advokat-borovac",
    title: "dr Vladimir Borovac",
    niche: "Sajt za advokatsku kancelariju",
    category: "Biznis",
    client: "Koncept za advokata dr Vladimira Borovca",
    year: "2026",
    seoDescription:
      "Studija slučaja: dvojezični sajt advokata iz Novog Sada specijalizovanog za pravo žiga, sa oblastima rada, publikacijama i formom za konsultacije.",
    description:
      "Dvojezični sajt advokata iz Novog Sada, specijalizovanog za zaštitu žigova i industrijskog dizajna.",
    problem:
      "Advokatu sa uskom specijalizacijom treba sajt koji odmah gradi poverenje i jasno pokazuje u čemu je stručnjak, i domaćim i stranim klijentima.",
    solution:
      "Napravljen je ozbiljan, miran sajt na srpskom i engleskom: oblasti rada od prava žiga do parničnih postupaka, stranica o advokatu, publikacije i forma za zakazivanje konsultacija.",
    result:
      "Ovo je koncept, pa rezultati u radu tek slede. Ceo sajt, na srpskom i engleskom, može da se pregleda uživo.",
    keyAction: {
      title: "Kako klijent dolazi do konsultacija",
      steps: [
        "Izabere oblast rada, na primer pravo žiga, i pročita šta advokat radi.",
        "Pogleda publikacije kao dokaz specijalizacije.",
        "Pošalje upit za konsultacije, na srpskom ili engleskom.",
      ],
    },
    technologies: ["TanStack Start", "React", "TypeScript", "Tailwind CSS"],
    deliverables: [
      "Sajt na srpskom i engleskom",
      "Oblasti rada",
      "Publikacije",
      "Forma za konsultacije",
    ],
    metrics: [
      { label: "Jezici", value: "SR + EN", hint: "Za domaće i strane klijente" },
      { label: "Oblasti rada", value: "6 oblasti", hint: "Od prava žiga do parnica" },
      { label: "Stručni radovi", value: "Publikacije", hint: "Dokaz specijalizacije" },
    ],
    image: advokatImage,
    imageSmall: advokatImageSmall,
    url: "https://borovac-preview.netlify.app/",
  },
  {
    id: "fizioterapija",
    title: "Fizio Pokret",
    niche: "Sajt za fizioterapiju i masažu",
    category: "Zakazivanje",
    client: "Koncept za fizioterapeuta Miloša Maleševića",
    year: "2026",
    seoDescription:
      "Studija slučaja: sajt za fizioterapeuta iz Novog Sada sa uslugama, utiscima pacijenata i online rezervacijom u kalendaru slobodnih termina.",
    description:
      "Sajt za fizioterapeuta iz Novog Sada sa online zakazivanjem: pacijent bira slobodan dan i vreme.",
    problem:
      "Termini se dogovaraju telefonom tokom terapije, a pacijent ne zna unapred koji su termini slobodni.",
    solution:
      "Napravljen je topao sajt na jednoj strani sa tretmanima, tokom terapije, utiscima i pitanjima, i kalendarom za zakazivanje: pacijent bira uslugu, dan i vreme, a termin odmah nestaje iz ponude.",
    result:
      "Ovo je koncept, pa rezultati u radu tek slede. Zakazivanje može da se isproba uživo: termin se rezerviše i odmah nestaje iz ponude.",
    keyAction: {
      title: "Kako pacijent rezerviše termin",
      steps: [
        "Izabere tretman i slobodan dan u kalendaru.",
        "Izabere vreme i ostavi ime i telefon.",
        "Termin se odmah upisuje, a terapeut i pacijent dobiju potvrdu mejlom.",
      ],
    },
    technologies: ["HTML", "CSS", "GSAP", "Supabase"],
    deliverables: [
      "Online zakazivanje",
      "Kalendar slobodnih termina",
      "Stranica za upravljanje terminima",
      "Obaveštenja emailom",
    ],
    metrics: [
      { label: "Zakazivanje", value: "Online", hint: "Slobodni dani i vreme" },
      { label: "Pregled termina", value: "Admin", hint: "Dodavanje i otkazivanje" },
      { label: "Potvrda", value: "Email", hint: "Terapeutu i pacijentu" },
    ],
    image: fizioImage,
    imageSmall: fizioImageSmall,
    url: "https://fizio-malesevic-preview.netlify.app/redizajn.html",
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function getAdjacentProjects(id: string): { prevProject: Project; nextProject: Project } {
  const currentIndex = projects.findIndex((p) => p.id === id);
  const fallback = projects[0] as Project;
  if (currentIndex === -1) {
    return {
      prevProject: fallback,
      nextProject: (projects[1] ?? fallback) as Project,
    };
  }
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;
  return {
    prevProject: (projects[prevIndex] ?? fallback) as Project,
    nextProject: (projects[nextIndex] ?? fallback) as Project,
  };
}

/** srcset za projektnu sliku: telefon dobija 800px verziju, veći ekrani original. */
export function projectSrcSet(project: Project) {
  return `${project.imageSmall} 800w, ${project.image} ${project.imageWidth ?? 1440}w`;
}

const categoryLabels: Record<Locale, Record<ProjectCategory, string>> = {
  sr: {
    Zakazivanje: "Zakazivanje",
    Portfolio: "Portfolio",
    Nekretnine: "Nekretnine",
    Biznis: "Biznis",
  },
  en: {
    Zakazivanje: "Booking",
    Portfolio: "Portfolio",
    Nekretnine: "Real estate",
    Biznis: "Business",
  },
};

export const categoryLabel = (category: ProjectCategory, locale: Locale) =>
  categoryLabels[locale][category];

/** Projekat sa tekstovima na datom jeziku; srpski je osnova, engleski dolazi iz content/projects.en.ts. */
export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "sr") return project;
  const t = projectsEn[project.id];
  if (!t) return project;
  // Stranice usluga postoje samo na srpskom, pa engleski projekat nema servicePath.
  const { servicePath: _servicePath, client, ...rest } = project;
  const { client: clientEn, ...text } = t;
  const localizedClient = clientEn ?? client;
  return { ...rest, ...text, ...(localizedClient ? { client: localizedClient } : {}) };
}

export const getLocalizedProjects = (locale: Locale) =>
  projects.map((project) => localizeProject(project, locale));
