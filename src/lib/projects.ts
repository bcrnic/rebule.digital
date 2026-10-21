import misolutionsImage from "@/assets/project-misolutions.webp";
import misolutionsImageSmall from "@/assets/project-misolutions-800.webp";
import remiImage from "@/assets/project-remielectric.webp";
import remiImageSmall from "@/assets/project-remielectric-800.webp";
import residenceImage from "@/assets/project-residence.webp";
import residenceImageSmall from "@/assets/project-residence-800.webp";
import badbyteImage from "@/assets/project-badbyte.webp";
import badbyteImageSmall from "@/assets/project-badbyte-800.webp";
import vojkanImage from "@/assets/project-vojkan.webp";
import vojkanImageSmall from "@/assets/project-vojkan-800.webp";

export type ProjectCategory = "Zakazivanje" | "Portfolio" | "E-commerce" | "Biznis";

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
  result: string;
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
    id: "badbyte",
    title: "Badbyte",
    niche: "Sajt za web studio",
    category: "Biznis",
    client: "Badbyte Studio",
    year: "2024",
    seoDescription:
      "Studija slučaja: sajt za web development studio iz Novog Sada sa jasnom ponudom, cenama, utiscima klijenata i formom za zahtev za ponudu.",
    description:
      "Sajt za web development studio iz Novog Sada sa jasnom ponudom, cenama i pozivom na akciju.",
    problem:
      "Studio je nudio više usluga, ali bez sajta koji ih jasno predstavlja i pretvara posetioce u upite.",
    solution:
      "Napravljen je moderan sajt sa pregledom usluga i cena, rezultatima, utiscima klijenata i formom za ponudu.",
    result: "Jasna ponuda na jednom mestu i više direktnih upita za saradnju.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    deliverables: ["UI/UX Dizajn", "Front-end Development", "SEO Optimizacija", "Forma za ponude"],
    metrics: [
      { label: "Usluge i cene", value: "Jasna ponuda", hint: "Sve na jednoj strani" },
      { label: "Optimizovan sajt", value: "Brzina", hint: "Lagan kod i slike" },
      { label: "Direktni upiti", value: "Forma", hint: "Zahtev za ponudu bez posrednika" },
    ],
    image: badbyteImage,
    imageSmall: badbyteImageSmall,
    url: "https://badbyte.netlify.app/",
  },
  {
    id: "modni-frizer-vojkan",
    title: "Modni Frizer Vojkan",
    niche: "Sajt za frizerski salon",
    servicePath: "/sajt-za-frizerski-salon",
    category: "Zakazivanje",
    client: "Salon Vojkan",
    year: "2024",
    seoDescription:
      "Studija slučaja: sajt za ženski frizerski salon u Novom Sadu sa 40 godina tradicije. Cenovnik, galerija i zakazivanje termina porukom.",
    description:
      "Sajt za ženski frizerski salon sa 40 godina tradicije, cenovnikom i zakazivanjem termina.",
    problem:
      "Salon sa dugom tradicijom nije imao sajt - termini su se zakazivali isključivo telefonom i usmeno.",
    solution:
      "Napravljen je elegantan sajt sa uslugama, cenovnikom, galerijom i zakazivanjem preko WhatsApp-a, Vibera i emaila.",
    result: "Klijentkinje sada vide cene i usluge unapred i zakazuju termin jednom porukom.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    deliverables: [
      "Dizajn cenovnika",
      "Online zakazivanje",
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
    year: "2024",
    seoDescription:
      "Studija slučaja: sajt za elektroinstalatere iz Novog Sada sa pregledom usluga, dugmetom za hitan poziv i zakazivanjem besplatnog pregleda.",
    description:
      "Sajt za elektro instalatere iz Novog Sada sa jasnim uslugama i zakazivanjem besplatnog pregleda.",
    problem:
      "Posao je dolazio isključivo preporukom, bez mesta na kom klijenti vide usluge, cene i način da zakažu dolazak.",
    solution:
      "Napravljen je sajt sa pregledom svih usluga, recenzijama klijenata, čestim pitanjima i formom za zakazivanje besplatnog pregleda.",
    result: "Klijenti sada sami zakazuju pregled, a hitni pozivi stižu direktno preko sajta.",
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
    category: "E-commerce",
    client: "Investitor Residence",
    year: "2024",
    seoDescription:
      "Studija slučaja: prodajni sajt za investitora sa katalogom stanova, cenama, tlocrtima, filterima po strukturi i oznakom slobodnih stanova.",
    description:
      "Prodajni sajt za investitora sa katalogom stanova, filterima po strukturi i statusom dostupnosti.",
    problem:
      "Kupci nisu imali gde da vide koji su stanovi slobodni, koliko koštaju i kako izgledaju.",
    solution:
      "Napravljen je pregled svih stanova sa cenama, kvadraturom, spratom, galerijama i oznakom „prodato“, uz filtere po broju soba.",
    result: "Zainteresovani kupci dolaze pripremljeni, sa konkretnim stanom u vidu.",
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
    imageWidth: 1280,
    imageSmall: residenceImageSmall,
    url: "https://bcrnic.github.io/residence/",
  },
  {
    id: "misolutions",
    title: "MiSolutions",
    niche: "Sajt za konsultantsku agenciju",
    category: "Biznis",
    client: "MiSolutions Konsalting",
    year: "2024",
    seoDescription:
      "Studija slučaja: prezentacioni sajt konsultantske agencije za istraživanje tržišta, sa jasnom ponudom, rezultatima i B2B kontakt formom.",
    description:
      "Prezentacioni sajt konsultantske agencije za istraživanje tržišta i rast prodaje.",
    problem:
      "Agencija je imala odlične rezultate, ali nije imala način da ih jasno predstavi novim klijentima.",
    solution:
      "Struktuiran je sajt oko tri glavne usluge, sa merljivim rezultatima, utiscima klijenata i jasnim pozivom na kontakt.",
    result: "Ozbiljniji prvi utisak i lakše predstavljanje ponude potencijalnim klijentima.",
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
