import misolutionsImage from "@/assets/project-misolutions.jpg";
import remiImage from "@/assets/project-remielectric.jpg";
import residenceImage from "@/assets/project-residence.jpg";
import badbyteImage from "@/assets/project-badbyte.jpg";
import vojkanImage from "@/assets/project-vojkan.jpg";

export type ProjectCategory = "Zakazivanje" | "Portfolio" | "E-commerce" | "Biznis";

export type ProjectMetric = {
  label: string;
  value: string;
  hint?: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  client?: string;
  year?: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  deliverables?: string[];
  metrics?: ProjectMetric[];
  image: string;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "badbyte",
    title: "Badbyte",
    category: "Biznis",
    client: "Badbyte Studio",
    year: "2024",
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
      { label: "Direktni upiti", value: "+60%", hint: "U prvih 60 dana" },
      { label: "PageSpeed ocena", value: "99/100", hint: "Maksimalna brzina" },
      { label: "Vreme učitavanja", value: "< 0.7s", hint: "Instant odziv" },
    ],
    image: badbyteImage,
    url: "https://badbyte.netlify.app/",
  },
  {
    id: "modni-frizer-vojkan",
    title: "Modni Frizer Vojkan",
    category: "Zakazivanje",
    client: "Salon Vojkan",
    year: "2024",
    description:
      "Sajt za ženski frizerski salon sa 40 godina tradicije, cenovnikom i zakazivanjem termina.",
    problem:
      "Salon sa dugom tradicijom nije imao sajt — termini su se zakazivali isključivo telefonom i usmeno.",
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
      { label: "Zakazivanja porukom", value: "70%+", hint: "WhatsApp & Viber" },
      { label: "Smanjeni pozivi", value: "-45%", hint: "U toku rada" },
      { label: "Mobilne posete", value: "92%", hint: "Prilagođeno telefonu" },
    ],
    image: vojkanImage,
    url: "https://bcrnic.github.io/modni-frizer-vojkan/",
  },
  {
    id: "remielectric",
    title: "REMIELECTRIC",
    category: "Zakazivanje",
    client: "REMIELECTRIC Novi Sad",
    year: "2024",
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
      { label: "Hitni pozivi sa sajta", value: "+50%", hint: "Dugme za hitan poziv" },
      { label: "Google vidljivost", value: "Top 3", hint: "Za lokalne ključne reči" },
      { label: "Odziv sajta", value: "100%", hint: "Mobilna optimizacija" },
    ],
    image: remiImage,
    url: "https://bcrnic.github.io/remielectric/",
  },
  {
    id: "residence",
    title: "Residence",
    category: "E-commerce",
    client: "Investitor Residence",
    year: "2024",
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
      { label: "Pregledi tlocrta", value: "3.5k+", hint: "Mesečno" },
      { label: "Pripremljeni kupci", value: "85%", hint: "Tačno znaju koji stan žele" },
      { label: "Dostupnost uživo", value: "Ažurno", hint: "Oznake za prodato/slobodno" },
    ],
    image: residenceImage,
    url: "https://bcrnic.github.io/residence/",
  },
  {
    id: "misolutions",
    title: "MiSolutions",
    category: "Biznis",
    client: "MiSolutions Konsalting",
    year: "2024",
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
      { label: "Konverzija posetilaca", value: "2.4x", hint: "U poređenju sa PDF brošurom" },
      { label: "Vreme na sajtu", value: "+120%", hint: "Veće angažovanje posetilaca" },
      { label: "B2B kredibilitet", value: "100%", hint: "Verifikovane preporuke" },
    ],
    image: misolutionsImage,
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
