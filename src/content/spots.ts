// Kratki video spotovi (Instagram Reels) koji se prikazuju na sajtu. Fajlovi su u public/video:
// <id>.mp4 (540x960, bez zvuka, bez završnog kadra sa logom) i <id>.webp (slika pre puštanja).

export type SpotId = "tisina" | "mapa" | "preposle" | "sajt7";

export type Spot = {
  id: SpotId;
  title: string;
  text: string;
  /** Stranica usluge na koju spot vodi. */
  path: string;
  /** Konkretno šta klijent dobija (mora da odgovara paketima na sajtu). */
  points: string[];
};

export const spots: Spot[] = [
  {
    id: "tisina",
    title: "Telefon prestaje da zvoni",
    text: "Klijenti sami biraju termin i zakazuju, i kad vi spavate.",
    path: "/online-zakazivanje-termina",
    points: [
      "Zakazivanje porukom ili kalendarom",
      "Usluge i cene pre poziva",
      "Vi potvrđujete termin",
    ],
  },
  {
    id: "mapa",
    title: "Nađu vas na mapi",
    text: "Lokalni SEO, da vas mušterije nađu kad traže uslugu u blizini.",
    path: "/izrada-sajtova-novi-sad",
    points: ["Lokalni SEO za vaš grad", "Povezano sa Google mapom", "Brz sajt na telefonu"],
  },
  {
    id: "preposle",
    title: "Isti posao, novi utisak",
    text: "Spor i sitan sajt postaje brz i jasan na telefonu.",
    path: "/sajt-za-frizerski-salon",
    points: ["Cenovnik i galerija radova", "Pregledno na telefonu", "Dugme za zakazivanje"],
  },
  {
    id: "sajt7",
    title: "Gotovo za 7 do 14 dana",
    text: "Bez meseci čekanja, a cenu znate unapred.",
    path: "/cene-izrade-sajta",
    points: ["Fiksna cena od 250 €", "Rok 7 do 14 radnih dana", "Radite direktno sa mnom"],
  },
];

export const getSpot = (id: SpotId) => spots.find((s) => s.id === id) as Spot;

export const spotSrc = (id: SpotId) => `/video/${id}.mp4`;
export const spotPoster = (id: SpotId) => `/video/${id}.webp`;
