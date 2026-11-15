import { CalendarCheck, Code2, Globe2, RefreshCw } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { aboutStatsEn, faqsEn, processStepsEn, servicesEn, testimonialsEn } from "./home.en";

export type Service = {
  icon: typeof Globe2;
  title: string;
  path?: string;
  text: string;
};

export const services: Service[] = [
  {
    icon: Globe2,
    title: "Sajtovi za mikro firme",
    path: "/izrada-sajtova-novi-sad",
    text: "Jasna ponuda, profesionalan utisak i više pravih upita za vaš posao.",
  },
  {
    icon: CalendarCheck,
    title: "Zakazivanje termina",
    path: "/online-zakazivanje-termina",
    text: "Jednostavna rezervacija koja štedi vreme vama i vašim klijentima.",
  },
  {
    icon: Code2,
    title: "Portfolio sajtovi",
    text: "Vaš najbolji rad predstavljen brzo, pregledno i bez suvišnih elemenata.",
  },
  {
    icon: RefreshCw,
    title: "Održavanje i razvoj",
    path: "/odrzavanje-sajta",
    text: "Pouzdane izmene, nadogradnje i podrška i nakon lansiranja sajta.",
  },
];

export const testimonials = [
  {
    name: "Modni Frizer Vojkan",
    role: "Vlasnik frizerskog salona",
    project: "modni-frizer-vojkan",
    text: "Dobili smo elegantan sajt i sistem gde klijentkinje direktno vide usluge i zakazuju preko WhatsApp-a. Telefon nas mnogo ređe prekida tokom šišanja.",
    highlight: "Zakazivanje porukom umesto telefonom",
  },
  {
    name: "REMIELECTRIC",
    role: "Elektroinstalaterski tim",
    project: "remielectric",
    text: "Najbolja investicija za naš posao. Sajt je jasan, brz i ljudi nas odmah zovu za hitne intervencije ili zakazuju besplatan pregled.",
    highlight: "Dugme za hitne pozive na svakoj strani",
  },
  {
    name: "MiSolutions",
    role: "Konsalting i analiza tržišta",
    project: "misolutions",
    text: "Bojan je razumeo tačno šta nam treba. Umesto glomaznog kataloga, dobili smo sajt koji odmah gradi autoritet i donosi ozbiljne B2B upite.",
    highlight: "Sajt umesto glomaznog PDF kataloga",
  },
  {
    name: "Badbyte Studio",
    role: "Digital agencija",
    project: "badbyte",
    text: "Izuzetno brza izrada, savremen dizajn i čista komunikacija bez gubljenja vremena. Sve preporuke za saradnju.",
    highlight: "Brza izrada i jasna komunikacija",
  },
];

export const faqs = [
  {
    question: "Koliko traje izrada sajta?",
    answer:
      "Najčešće između 7 i 14 radnih dana od trenutka kada prikupimo osnovne informacije i dogovorimo strukturu. Manji prezentacioni sajtovi mogu biti spremni i brže.",
  },
  {
    question: "Koliko košta izrada i da li ima skrivenih troškova?",
    answer:
      "Sajt kreće od 250 € (jedna strana), 490 € za sajt do 5 strana i 650 € uz zakazivanje porukom. Održavanje je 30 € mesečno. Pre početka saradnje dobijate preciznu ponudu sa fiksnom cenom - nema naknadnih iznenađenja.",
  },
  {
    question: "Šta ako nemam spremljen tekst i fotografije?",
    answer:
      "Nema problema! Pomažem vam da definišete jasne poruke i ponudu koja prodaje, kao i u izboru profesionalnih vizuala prilagođenih vašoj delatnosti.",
  },
  {
    question: "Da li će sajt raditi brzo i na mobilnim telefonima?",
    answer:
      "Da. Svaki sajt pravim sa 'mobile-first' pristupom, optimizujem ga za brzo učitavanje i prilagođavam svim veličinama ekrana.",
  },
  {
    question: "Šta se dešava nakon lansiranja sajta?",
    answer:
      "Nakon lansiranja obezbeđujem tehničku podršku, besplatne sitne izmene i opciju mesečnog održavanja kako bi vaš sajt uvek bio siguran i ažuran.",
  },
  {
    question: "Koliko izmena je uključeno u cenu?",
    answer:
      "Dve runde izmena dizajna i teksta su uključene u cenu. Sitne izmene posle lansiranja (na primer nova cena ili radno vreme) radim besplatno, a veće dogovaramo posebno ili kroz održavanje.",
  },
  {
    question: "Ko je vlasnik sajta i domena?",
    answer:
      "Vi. Domen se registruje na vaše ime, a posle uplate su vaši i sajt, tekstovi, slike i kod. Ako jednog dana odlučite da pređete kod drugog developera, predajem vam sve fajlove.",
  },
  {
    question: "Da li radite samo sa firmama iz Novog Sada?",
    answer:
      "Ne. Studio je u Novom Sadu, ali sve može da se uradi online: razgovaramo telefonom ili preko WhatsApp-a, a dizajn i izmene vam šaljem na pregled. Radim sa firmama iz cele Srbije i regiona.",
  },
  {
    question: "Da li mi treba sajt ako već imam Instagram?",
    answer:
      "Instagram je odličan za radove, ali kada vas neko traži na Google-u ili na mapi, nalazi sajt, ne objave. Na sajtu su cene, usluge i zakazivanje uvek na istom mestu, a Instagram vodi ljude na njega. Najbolje rade zajedno.",
  },
];

export type Stat = { value: string; label: string };

/** Činjenice u delu "O meni" (samo tačni podaci, dobijeni od Bojana). */
export const aboutStats: Stat[] = [
  { value: "20+", label: "urađenih sajtova" },
  { value: "7 do 14", label: "dana do lansiranja" },
  { value: "2 runde", label: "izmena uključene u cenu" },
  { value: "1 radni dan", label: "do odgovora na upit" },
];

export type Step = { title: string; text: string };

/** Kako izgleda saradnja, u tri koraka. */
export const processSteps: Step[] = [
  {
    title: "Besplatan razgovor",
    text: "Ispričate mi ukratko o svom poslu i šta vam treba. Dobijate fiksnu ponudu i rok, bez obaveze.",
  },
  {
    title: "Dizajn i tekst",
    text: "Pravim dizajn i pomažem oko teksta i fotografija. Predlog dobijate na pregled, a dve runde izmena su uključene u cenu.",
  },
  {
    title: "Lansiranje",
    text: "Sajt ide uživo na vašem domenu i povezujem ga sa Google-om. Domen je na vaše ime, a posle uplate i sajt je vaš.",
  },
];

/** Sadržaj početne za dati jezik; srpski je gore, engleski u home.en.ts. */
export function getHomeContent(locale: Locale) {
  return locale === "en"
    ? {
        services: servicesEn,
        testimonials: testimonialsEn,
        faqs: faqsEn,
        aboutStats: aboutStatsEn,
        processSteps: processStepsEn,
      }
    : { services, testimonials, faqs, aboutStats, processSteps };
}
