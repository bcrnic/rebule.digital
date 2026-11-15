// Kratki video spotovi (Instagram Reels) koji se prikazuju na sajtu. Fajlovi su u public/video:
// <id>.mp4 (540x960, bez zvuka, bez završnog kadra sa logom) i <id>.webp (slika pre puštanja).

export type SpotId = "tisina" | "mapa" | "preposle" | "sajt7";

export type Spot = { id: SpotId; title: string; text: string };

export const spots: Spot[] = [
  {
    id: "tisina",
    title: "Telefon prestaje da zvoni",
    text: "Klijenti sami biraju termin i zakazuju, i kad vi spavate.",
  },
  {
    id: "mapa",
    title: "Nađu vas na mapi",
    text: "Lokalni SEO, da vas mušterije nađu kad traže uslugu u blizini.",
  },
  {
    id: "preposle",
    title: "Isti posao, novi utisak",
    text: "Spor i sitan sajt postaje brz i jasan na telefonu.",
  },
  {
    id: "sajt7",
    title: "Gotovo za 7 do 14 dana",
    text: "Bez meseci čekanja, a cenu znate unapred.",
  },
];

export const getSpot = (id: SpotId) => spots.find((s) => s.id === id) as Spot;

export const spotSrc = (id: SpotId) => `/video/${id}.mp4`;
export const spotPoster = (id: SpotId) => `/video/${id}.webp`;
