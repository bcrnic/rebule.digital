// Sadržaj stranica usluga i niša. Cene se ne pišu ovde: paket se navodi imenom, a cena se čita
// iz pricing.ts, da bi uvek bila ista kao na početnoj.

export type LandingFaq = { question: string; answer: string };

export type LandingPage = {
  path: string;
  /** Naslov za Google (do ~60 karaktera). */
  seoTitle: string;
  /** Meta opis (do ~155 karaktera). */
  seoDescription: string;
  /** Kratak naziv za breadcrumb, footer i interne linkove. */
  navLabel: string;
  serviceName: string;
  kicker: string;
  title: string;
  intro: string;
  problemsTitle: string;
  problems: { title: string; text: string }[];
  featuresTitle: string;
  features: string[];
  /** Ime paketa iz pricing.ts koji se preporučuje. */
  plan?: string;
  planReason?: string;
  /** Prikaži celu tabelu paketa umesto jedne preporuke. */
  showPricing?: boolean;
  /** id projekta iz projects.ts koji služi kao primer. */
  caseStudy?: string;
  caseStudyText?: string;
  faqs: LandingFaq[];
  /** Putanje drugih stranica usluga na koje ova stranica linkuje. */
  related: string[];
  whatsappMessage: string;
};

export const landingPages: LandingPage[] = [
  {
    path: "/izrada-sajtova-novi-sad",
    seoTitle: "Izrada sajtova Novi Sad za male firme | rebule. digital",
    seoDescription:
      "Izrada brzih, modernih sajtova za male firme u Novom Sadu i Vojvodini. Fiksna cena unapred, izrada za 7 do 14 radnih dana, direktan rad sa developerom.",
    navLabel: "Izrada sajtova Novi Sad",
    serviceName: "Izrada sajtova u Novom Sadu",
    kicker: "Web studio iz Novog Sada",
    title: "Izrada sajtova u Novom Sadu za male firme.",
    intro:
      "Pravim sajtove za lokalne firme iz Novog Sada i Vojvodine: salone, majstore, konsultante i investitore. Radite direktno sa mnom, od prvog razgovora do lansiranja, bez posrednika.",
    problemsTitle: "Zašto lokalnoj firmi treba sajt",
    problems: [
      {
        title: "Ljudi vas traže na Google-u",
        text: "Kad neko u Novom Sadu traži uslugu, prvo pogleda pretragu i mapu. Bez sajta vas tamo nema ili izgledate manje ozbiljno od konkurencije.",
      },
      {
        title: "Isti upiti, iznova",
        text: "Cene, usluge, radno vreme, lokacija. Sajt odgovara na to umesto vas, i u ponoć.",
      },
      {
        title: "Preporuka nije dovoljna",
        text: "Preporuka dovede klijenta do vašeg imena. Sajt ga ubedi da vas pozove.",
      },
    ],
    featuresTitle: "Šta dobijate",
    features: [
      "Dizajn napravljen za vaš posao, ne gotov šablon",
      "Brzo učitavanje i odličan prikaz na telefonu",
      "Kontakt preko WhatsApp-a, Vibera i emaila",
      "Lokalni SEO za pretrage u Novom Sadu i okolini",
      "Fiksna cena dogovorena unapred",
      "Podrška i izmene i nakon lansiranja",
    ],
    showPricing: true,
    faqs: [
      {
        question: "Da li radite samo sa firmama iz Novog Sada?",
        answer:
          "Ne. Studio je u Novom Sadu, ali radim sa klijentima iz cele Srbije i regiona. Sve može da se dogovori preko poziva i poruka.",
      },
      {
        question: "Koliko traje izrada sajta?",
        answer:
          "Najčešće 7 do 14 radnih dana od trenutka kada prikupimo osnovne informacije i dogovorimo strukturu.",
      },
      {
        question: "Na čemu pravite sajtove?",
        answer:
          "Sajtove pravim po meri, u React-u i TypeScript-u. Brzo se učitavaju i nemaju dodatke koje treba stalno ažurirati.",
      },
    ],
    related: [
      "/cene-izrade-sajta",
      "/online-zakazivanje-termina",
      "/sajt-za-frizerski-salon",
      "/sajt-za-majstore",
      "/odrzavanje-sajta",
    ],
    whatsappMessage: "Zdravo Bojane, zainteresovan sam za izradu sajta.",
  },
  {
    path: "/cene-izrade-sajta",
    seoTitle: "Cena izrade sajta: paketi i šta dobijate | rebule. digital",
    seoDescription:
      "Koliko košta izrada sajta za malu firmu: paketi Start, Biznis i Zakazivanje, održavanje i šta je uključeno. Fiksna cena unapred, bez skrivenih troškova.",
    navLabel: "Cene izrade sajta",
    serviceName: "Izrada sajta: cene i paketi",
    kicker: "Cene",
    title: "Cena izrade sajta: jasni paketi, bez skrivenih troškova.",
    intro:
      "Cena zavisi od broja strana i od toga da li vam treba zakazivanje. Pre početka dobijate fiksnu ponudu, a cena se posle ne menja.",
    problemsTitle: "Od čega zavisi cena",
    problems: [
      {
        title: "Broj strana",
        text: "Jedna strana je dovoljna za jasnu ponudu. Za usluge, cenovnik i galeriju treba više strana.",
      },
      {
        title: "Zakazivanje",
        text: "Zakazivanje porukom je deo paketa. Kalendar sa slobodnim terminima je poseban projekat, po ponudi.",
      },
      {
        title: "Sadržaj",
        text: "Ako nemate tekstove i fotografije, pomažem oko njih. To utiče na rok više nego na cenu.",
      },
    ],
    featuresTitle: "Uključeno u svaki paket",
    features: [
      "Dizajn prilagođen telefonu i računaru",
      "Osnovna SEO postavka",
      "SSL i brzo učitavanje",
      "Kontakt forma",
      "Podrška nakon lansiranja",
    ],
    showPricing: true,
    faqs: [
      {
        question: "Da li ima skrivenih troškova?",
        answer:
          "Ne. Dobijate fiksnu ponudu pre početka. Posebno se plaća samo domen, a mesečno održavanje je opciono.",
      },
      {
        question: "Zašto su neke ponude na internetu jeftinije?",
        answer:
          "Najjeftinije ponude su obično gotovi šabloni sa malo prilagođavanja. Ja pravim sajt po meri, sa zakazivanjem, lokalnim SEO-om i direktnom podrškom.",
      },
      {
        question: "Kako se plaća?",
        answer: "Uslove plaćanja dogovaramo u ponudi, pre početka rada.",
      },
    ],
    related: ["/izrada-sajtova-novi-sad", "/online-zakazivanje-termina", "/odrzavanje-sajta"],
    whatsappMessage: "Zdravo Bojane, zanima me ponuda za izradu sajta.",
  },
  {
    path: "/online-zakazivanje-termina",
    seoTitle: "Online zakazivanje termina na sajtu | rebule. digital",
    seoDescription:
      "Sajt sa zakazivanjem termina porukom ili kalendarom slobodnih termina, za salone, ordinacije, trenere i servise. Fiksna cena dogovorena unapred.",
    navLabel: "Online zakazivanje termina",
    serviceName: "Sajt sa online zakazivanjem termina",
    kicker: "Za salone, ordinacije, trenere i servise",
    title: "Online zakazivanje termina bez stalnih poziva.",
    intro:
      "Klijenti zakazuju kad im odgovara, i u deset uveče. Vi termine pregledate i potvrđujete kad stignete.",
    problemsTitle: "Šta rešava zakazivanje na sajtu",
    problems: [
      {
        title: "Termini se zakazuju samo telefonom",
        text: "Ako se ne javite odmah, klijent zove nekog drugog. Poruka sa sajta ostaje i čeka vas.",
      },
      {
        title: "Ista pitanja svaki dan",
        text: "Usluge, trajanje i cene na sajtu odgovaraju na većinu pitanja pre nego što se postave.",
      },
      {
        title: "Skupe aplikacije za zakazivanje",
        text: "Za mnoge male firme je zakazivanje porukom dovoljno, bez mesečne pretplate na aplikaciju.",
      },
    ],
    featuresTitle: "Šta dobijate",
    features: [
      "Pregled usluga, trajanja i cena",
      "Zakazivanje porukom preko WhatsApp-a, Vibera ili emaila",
      "Opciono: kalendar sa slobodnim terminima",
      "Radi na telefonu i računaru",
      "Bez mesečne pretplate na aplikaciju",
      "Lokalni SEO",
    ],
    plan: "Zakazivanje",
    planReason:
      "Zakazivanje porukom je najbrže rešenje i odmah radi. Ako vam treba kalendar u kom klijenti sami biraju slobodan termin, to pravim kao poseban projekat prema vašim pravilima rada, po ponudi.",
    caseStudy: "modni-frizer-vojkan",
    caseStudyText:
      "Frizerski salon je prešao sa zakazivanja telefonom na zakazivanje porukom preko sajta.",
    faqs: [
      {
        question: "Koja je razlika između zakazivanja porukom i kalendara?",
        answer:
          "Kod zakazivanja porukom klijent pošalje željeni termin, a vi potvrdite. Kod kalendara klijent vidi slobodne termine i sam bira. Kalendar je složeniji, pa se radi po ponudi.",
      },
      {
        question: "Da li moram da plaćam aplikaciju mesečno?",
        answer:
          "Ne za zakazivanje porukom. Održavanje sajta je opciono i uključuje hosting i manje izmene.",
      },
      {
        question: "Za koje delatnosti ovo ima smisla?",
        answer:
          "Za sve koji rade po terminima: saloni, kozmetičari, maseri, treneri, ordinacije, auto servisi, fotografi.",
      },
    ],
    related: ["/sajt-za-frizerski-salon", "/izrada-sajtova-novi-sad", "/cene-izrade-sajta"],
    whatsappMessage: "Zdravo Bojane, zanima me sajt sa online zakazivanjem termina.",
  },
  {
    path: "/sajt-za-frizerski-salon",
    seoTitle: "Sajt za frizerski i kozmetički salon | rebule. digital",
    seoDescription:
      "Sajt za frizerski ili kozmetički salon: cenovnik, galerija i zakazivanje termina porukom preko WhatsApp-a i Vibera. Izrada za 7 do 14 radnih dana.",
    navLabel: "Sajt za frizerski salon",
    serviceName: "Izrada sajta za frizerski i kozmetički salon",
    kicker: "Za frizerske i kozmetičke salone",
    title: "Sajt za frizerski salon koji zakazuje umesto vas.",
    intro:
      "Klijentkinje vide usluge i cene unapred i zakazuju termin jednom porukom. Vi radite, a telefon zvoni ređe.",
    problemsTitle: "Poznato?",
    problems: [
      {
        title: "Telefon zvoni usred šišanja",
        text: "Svaki poziv za termin prekida posao. Poruka sa sajta može da sačeka da završite.",
      },
      {
        title: "Ljudi pitaju za cene",
        text: "Kad cenovnik nije nigde objavljen, ista pitanja stižu iznova. Jasan cenovnik na sajtu ih rešava.",
      },
      {
        title: "Instagram nije dovoljan",
        text: "Ko vas traži na Google-u, traži adresu, radno vreme i cene. Profil na mreži to retko daje na jednom mestu.",
      },
    ],
    featuresTitle: "Šta dobija vaš salon",
    features: [
      "Usluge i cenovnik pregledni na telefonu",
      "Zakazivanje termina porukom (WhatsApp, Viber, email)",
      "Galerija vaših radova",
      "Adresa, mapa i radno vreme",
      "Lokalni SEO za pretrage u vašem gradu",
      "Brzo učitavanje i na slabijem internetu",
    ],
    plan: "Zakazivanje",
    planReason:
      "Uključuje sve iz paketa Biznis i zakazivanje porukom, što salonu najviše štedi vreme. Ako želite da klijentkinje same biraju slobodan termin u kalendaru, to radim kao poseban projekat po ponudi.",
    caseStudy: "modni-frizer-vojkan",
    caseStudyText:
      "Salon sa 40 godina tradicije do sada je zakazivao samo telefonom. Danas klijentkinje unapred vide cenovnik i zakazuju porukom.",
    faqs: [
      {
        question: "Da li klijentkinje mogu da zakažu bez poziva?",
        answer:
          "Da. Na sajtu biraju uslugu i šalju upit za termin preko WhatsApp-a, Vibera ili emaila. Vi potvrđujete kad vam odgovara.",
      },
      {
        question: "Mogu li da menjam cene?",
        answer:
          "Izmene cena su uključene u mesečno održavanje. Pošaljete novi cenovnik i ja ga postavim.",
      },
      {
        question: "Nemam profesionalne fotografije. Šta onda?",
        answer:
          "Mogu da se koriste vaše fotografije radova sa telefona i Instagrama. Pomažem i oko izbora i obrade.",
      },
    ],
    related: ["/online-zakazivanje-termina", "/izrada-sajtova-novi-sad", "/cene-izrade-sajta"],
    whatsappMessage: "Zdravo Bojane, zanima me sajt za frizerski salon.",
  },
  {
    path: "/sajt-za-majstore",
    seoTitle: "Sajt za majstore, električare i zanatlije | rebule. digital",
    seoDescription:
      "Sajt za električare, vodoinstalatere i druge majstore: jasne usluge, dugme za hitan poziv i forma za zakazivanje pregleda. Izrada za 7 do 14 radnih dana.",
    navLabel: "Sajt za majstore",
    serviceName: "Izrada sajta za majstore i zanatlije",
    kicker: "Za električare, vodoinstalatere i majstore",
    title: "Sajt za majstore koji donosi pozive.",
    intro:
      "Ljudi koji traže majstora žele da vas pozovu odmah. Sajt im pokaže šta radite i da jednim dodirom pozovu ili zakažu dolazak.",
    problemsTitle: "Poznato?",
    problems: [
      {
        title: "Posao stiže samo preporukom",
        text: "Preporuka je odlična, ali ko vas ne zna, ne može da vas nađe. Sajt vas stavlja u pretragu.",
      },
      {
        title: "Klijent ne zna šta sve radite",
        text: "Kada su usluge jasno navedene, stižu upiti i za poslove koje inače ne biste dobili.",
      },
      {
        title: "Hitni slučajevi ne čekaju",
        text: "Kad nekome nestane struje ili curi voda, posao dobija prvi koga može da pozove.",
      },
    ],
    featuresTitle: "Šta dobijate",
    features: [
      "Jasan spisak usluga",
      "Dugme za hitan poziv na svakoj strani",
      "Forma za zakazivanje pregleda ili dolaska",
      "Kontakt preko WhatsApp-a, Vibera i emaila",
      "Lokalni SEO za vaš grad i okolinu",
      "Prilagođeno telefonu, odakle stiže većina poziva",
    ],
    plan: "Biznis",
    planReason:
      "Do 5 strana je dovoljno za usluge, česta pitanja i kontakt, uz lokalni SEO da vas nađu u okolini.",
    caseStudy: "remielectric",
    caseStudyText:
      "Elektroinstalaterski tim iz Novog Sada radio je samo preko preporuka. Sa sajtom klijenti sami zakazuju pregled, a hitni pozivi stižu direktno.",
    faqs: [
      {
        question: "Da li mi treba sajt ako imam dovoljno posla?",
        answer:
          "Sajt vam pomaže da birate poslove i da ih dobijate i u mirnijim mesecima, a ne samo kad neko preporuči.",
      },
      {
        question: "Koliko brzo sajt može da bude gotov?",
        answer: "Najčešće za 7 do 14 radnih dana od trenutka kad dogovorimo usluge i sadržaj.",
      },
      {
        question: "Ko piše tekstove?",
        answer:
          "Ispričate mi šta radite, a ja to pretočim u jasne, kratke tekstove. Vi samo proverite.",
      },
    ],
    related: ["/izrada-sajtova-novi-sad", "/cene-izrade-sajta", "/odrzavanje-sajta"],
    whatsappMessage: "Zdravo Bojane, zanima me sajt za moj zanat.",
  },
  {
    path: "/odrzavanje-sajta",
    seoTitle: "Održavanje sajta: hosting i izmene | rebule. digital",
    seoDescription:
      "Mesečno održavanje sajta za male firme: hosting i SSL, backup, praćenje dostupnosti i izmene sadržaja. Bez brige o tehničkim stvarima.",
    navLabel: "Održavanje sajta",
    serviceName: "Održavanje sajta",
    kicker: "Održavanje i podrška",
    title: "Održavanje sajta, da vi ne morate da mislite o tome.",
    intro:
      "Sajt treba da radi, da bude bezbedan i da prikazuje tačne cene. Održavanje pokriva tehnički deo i manje izmene, svakog meseca.",
    problemsTitle: "Šta se dešava bez održavanja",
    problems: [
      {
        title: "Zastareo sadržaj",
        text: "Stare cene i radno vreme na sajtu koštaju vas poverenja kod novih klijenata.",
      },
      {
        title: "Sajt padne, a vi ne znate",
        text: "Bez praćenja dostupnosti problem primetite tek kad neko kaže da sajt ne radi.",
      },
      {
        title: "Istekne domen ili SSL",
        text: "Pretraživač tada prikaže upozorenje i posetioci odlaze.",
      },
    ],
    featuresTitle: "Šta je uključeno",
    features: [
      "Hosting i SSL",
      "Backup",
      "Praćenje dostupnosti",
      "Oko 1 sat izmena mesečno",
      "Direktan kontakt sa mnom",
    ],
    plan: "Održavanje",
    planReason: "Održavanje je opciono i plaća se mesečno, za sajtove koje sam napravio.",
    faqs: [
      {
        question: "Da li je održavanje obavezno?",
        answer:
          "Nije. Sajt je vaš i bez održavanja. Ono postoji da ne morate sami da brinete o hostingu i izmenama.",
      },
      {
        question: "Šta ako mi treba više od sat vremena izmena?",
        answer: "Veće izmene i nove funkcije dogovaramo posebno, sa cenom unapred.",
      },
    ],
    related: ["/cene-izrade-sajta", "/izrada-sajtova-novi-sad"],
    whatsappMessage: "Zdravo Bojane, zanima me održavanje sajta.",
  },
];

export function getLandingPage(path: string) {
  const page = landingPages.find((p) => p.path === path);
  if (!page) throw new Error(`Stranica ${path} ne postoji u content/landing.ts`);
  return page;
}
