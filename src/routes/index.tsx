import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  HelpCircle,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  RefreshCw,
  Sparkles,
  Star,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { SiPython, SiReact, SiTailwindcss, SiTypescript, SiWhatsapp } from "react-icons/si";
import heroImage from "@/assets/project-residence.jpg";
import portraitAsset from "@/assets/bojan-crnic.jpg.asset.json";
const portrait = portraitAsset.url;
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { projects, type ProjectCategory } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "rebule. digital — Sajtovi koji donose klijente" },
      {
        name: "description",
        content:
          "Izrada brzih, modernih sajtova i sistema za zakazivanje za male lokalne firme u Srbiji i regionu.",
      },
      { property: "og:title", content: "rebule. digital — Sajtovi koji donose klijente" },
      {
        property: "og:description",
        content: "Web studio Bojana Crnića za male firme, od ideje do lansiranja.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

const services = [
  {
    icon: Globe2,
    title: "Sajtovi za male firme",
    text: "Jasna ponuda, profesionalan utisak i više pravih upita za vaš posao.",
  },
  {
    icon: CalendarCheck,
    title: "Zakazivanje termina",
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
    text: "Pouzdane izmene, nadogradnje i podrška i nakon lansiranja sajta.",
  },
];

const technologies = [
  { icon: SiPython, name: "Python" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];

const testimonials = [
  {
    name: "Modni Frizer Vojkan",
    role: "Vlasnik frizerskog salona",
    project: "modni-frizer-vojkan",
    text: "Dobili smo elegantan sajt i sistem gde klijentkinje direktno vide usluge i zakazuju preko WhatsApp-a. Smanjili smo zivkanje tokom šišanja za više od 40%.",
    highlight: "Preko 70% zakazivanja sada stiže porukom",
  },
  {
    name: "REMIELECTRIC",
    role: "Elektroinstalaterski tim",
    project: "remielectric",
    text: "Najbolja investicija za naš posao. Sajt je jasan, brz i ljudi nas odmah zovu za hitne intervencije ili zakazuju besplatan pregled.",
    highlight: "+50% više poziva preko dugmeta za hitne slučajeve",
  },
  {
    name: "MiSolutions",
    role: "Konsalting i analiza tržišta",
    project: "misolutions",
    text: "Bojan je razumeo tačno šta nam treba. Umesto glomaznog kataloga, dobili smo sajt koji odmah gradi autoritet i donosi ozbiljne B2B upite.",
    highlight: "2.4x veća konverzija u odnosu na ranije materijale",
  },
  {
    name: "Badbyte Studio",
    role: "Digital agencija",
    project: "badbyte",
    text: "Izuzetno brza izrada, savremen dizajn i čista komunikacija bez gubljenja vremena. Sve preporuke za saradnju.",
    highlight: "99/100 brzina na svim testovima",
  },
];

const faqs = [
  {
    question: "Koliko traje izrada sajta?",
    answer:
      "Najčešće između 7 i 14 radnih dana od trenutka kada prikupimo osnovne informacije i dogovorimo strukturu. Manji prezentacioni sajtovi mogu biti spremni i brže.",
  },
  {
    question: "Koliko košta izrada i da li ima skrivenih troškova?",
    answer:
      "Cena zavisi od obima projekta (broja stranica, sistema za zakazivanje, kataloga). Pre početka saradnje dobijate preciznu ponudu sa fiksnom cenom — nema naknadnih iznenađenja.",
  },
  {
    question: "Šta ako nemam spremljen tekst i fotografije?",
    answer:
      "Nema problema! Pomažem vam da definišete jasne poruke i ponudu koja prodaje, kao i u izboru profesionalnih vizuala prilagođenih vašoj delatnosti.",
  },
  {
    question: "Da li će sajt raditi brzo i na mobilnim telefonima?",
    answer:
      "Da, 100%. Svaki sajt pravim sa 'mobile-first' pristupom, uz maksimalnu optimizaciju brzine (ispod 1 sekunde učitavanja) i prilagođenost svim veličinama ekrana.",
  },
  {
    question: "Šta se dešava nakon lansiranja sajta?",
    answer:
      "Nakon lansiranja obezbeđujem tehničku podršku, besplatne sitne izmene i opciju mesečnog održavanja kako bi vaš sajt uvek bio siguran i ažuran.",
  },
];

function SectionTitle({
  number,
  eyebrow,
  title,
  text,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      {...reveal}
      className="grid gap-7 border-t border-border pt-5 md:grid-cols-[1fr_4fr]"
    >
      <p className="text-xs font-semibold text-muted-foreground">({number})</p>
      <div className="max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 className="font-display text-4xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        {text && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
        )}
      </div>
    </motion.div>
  );
}

function HomePage() {
  const [filter, setFilter] = useState<"Svi" | ProjectCategory>("Svi");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const visibleProjects =
    filter === "Svi" ? projects : projects.filter((project) => project.category === filter);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      type: formData.get("type"),
      message: formData.get("message"),
    };

    // Simulate sending with network feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-[94svh] items-center overflow-hidden pt-28"
        >
          <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 py-10 lg:px-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    rebule. digital © 2026
                  </span>
                  <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                    Sajtovi koji donose <span className="text-primary">klijente.</span>
                  </h1>
                  <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    rebule. digital — web studio Bojana Crnića. Pravim brze, jasne i moderne sajtove
                    za male firme, od ideje do lansiranja.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="rounded-2xl shadow-[0_12px_32px_-12px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
                    asChild
                  >
                    <a href="#portfolio">
                      Pogledaj radove <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="rounded-2xl border-border bg-card hover:bg-card/80"
                    asChild
                  >
                    <a href="#kontakt">Zakaži razgovor</a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="rounded-2xl gap-2 border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                    asChild
                  >
                    <a
                      href="https://wa.me/381601234567?text=Zdravo%20Bojane,%20zainteresovan%20sam%20za%20izradu%20sajta."
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <SiWhatsapp className="size-4" /> WhatsApp poruka
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 }}
                className="relative"
              >
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-3xl border border-border/60 bg-card p-3 shadow-2xl">
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={heroImage}
                      alt="rebule. digital projekat Residence"
                      width={1280}
                      height={960}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-border/60 bg-card px-5 py-3 shadow-xl md:flex">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Završen projekat
                      </p>
                      <p className="text-sm font-semibold text-foreground">Residences 2024</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Bar */}
        <section aria-label="Tehnologije" className="relative">
          <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-4 px-5 py-10 sm:grid-cols-4 lg:px-10">
            {technologies.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="glass glass-hover flex h-24 items-center justify-center gap-3 text-muted-foreground hover:text-primary"
              >
                <Icon className="size-6" aria-hidden="true" />
                <span className="font-display text-sm font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="usluge" className="scroll-mt-20 py-24 sm:py-36">
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <SectionTitle
              number="02"
              eyebrow="Usluge"
              title="Digitalna rešenja koja rade za vaš posao."
              text="Bez komplikovanja i skrivenih troškova. Dobijate brz, jasan sajt napravljen prema stvarnim potrebama vaših klijenata."
            />
            <div className="mt-16 grid gap-4">
              {services.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  {...reveal}
                  key={title}
                  className="glass glass-hover group grid gap-5 p-7 md:grid-cols-[0.8fr_2fr_2fr_auto] md:items-center"
                >
                  <span className="text-sm text-muted-foreground">0{index + 1}</span>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h3>
                  <p className="max-w-lg leading-relaxed text-muted-foreground">{text}</p>
                  <span className="glass-soft flex size-12 items-center justify-center rounded-full text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="relative scroll-mt-20 overflow-hidden bg-surface/60 py-24 sm:py-36"
        >
          <div className="aurora opacity-60" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-[90rem] px-5 lg:px-10">
            <SectionTitle
              number="03"
              eyebrow="Odabrani radovi"
              title="Rezultati, ne samo lepe stranice."
            />
            <div
              className="glass mt-12 ml-auto flex w-fit flex-wrap gap-1 rounded-full p-1.5"
              aria-label="Filter projekata"
            >
              {(["Svi", "Zakazivanje", "Portfolio", "E-commerce", "Biznis"] as const).map(
                (item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    size="sm"
                    className={
                      filter === item
                        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        : "text-muted-foreground"
                    }
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </Button>
                ),
              )}
            </div>
            <motion.div layout className="mt-16 grid grid-cols-12 gap-x-5 gap-y-24">
              {visibleProjects.map((project, index) => (
                <motion.article
                  layout
                  {...reveal}
                  key={project.id}
                  className={`${index % 3 === 0 ? "col-span-12 md:col-span-7" : index % 3 === 1 ? "col-span-12 md:col-span-5 md:pt-28" : "col-span-12 md:col-span-6 md:col-start-4"} group`}
                >
                  <Link
                    to="/projekat/$id"
                    params={{ id: project.id }}
                    className="block overflow-hidden rounded-[1.75rem] border border-foreground/10 shadow-[0_26px_60px_-32px_color-mix(in_oklab,var(--foreground)_45%,transparent)]"
                  >
                    <img
                      src={project.image}
                      alt={`Prikaz projekta ${project.title}`}
                      loading="lazy"
                      width={1280}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>
                  <div className="glass mt-5 flex items-start justify-between gap-4 p-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase text-primary">
                          {project.category} / 0{index + 1}
                        </span>
                        {project.metrics?.[0] && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                            {project.metrics[0].label}: {project.metrics[0].value}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-3xl font-semibold">{project.title}</h3>
                      <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-foreground/5 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 rounded-full"
                      asChild
                      aria-label={`Pogledaj projekat ${project.title}`}
                    >
                      <Link to="/projekat/$id" params={{ id: project.id }}>
                        <ArrowDownRight />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials / Utisci klijenata */}
        <section id="utisci" className="scroll-mt-20 py-24 sm:py-36">
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <SectionTitle
              number="04"
              eyebrow="Utisci klijenata"
              title="Šta kažu vlasnici sa kojima sarađujem."
              text="Direktna saradnja, jasna komunikacija i rešenja prilagođena konkretnom poslu."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {testimonials.map((item) => (
                <motion.div
                  {...reveal}
                  key={item.name}
                  className="glass flex flex-col justify-between p-8 sm:p-10"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-500" />
                        ))}
                      </div>
                      <Quote className="size-6 text-primary/40" />
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-foreground">„{item.text}“</p>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-display text-base font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="o-meni" className="scroll-mt-20 py-24 sm:py-36 bg-surface/40">
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <SectionTitle
              number="05"
              eyebrow="O meni"
              title="Mali studio. Direktna saradnja. Velika pažnja."
            />
            <div className="mt-20 grid grid-cols-12 gap-6">
              <motion.div {...reveal} className="col-span-12 md:col-span-5">
                <img
                  src={portrait}
                  alt="Bojan Crnić, osnivač studija rebule. digital"
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full rounded-[2rem] border border-foreground/10 object-cover shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--foreground)_50%,transparent)]"
                />
              </motion.div>
              <motion.div
                {...reveal}
                className="col-span-12 flex flex-col justify-between md:col-span-6 md:col-start-7"
              >
                <div>
                  <p className="font-display text-3xl font-semibold sm:text-5xl">
                    Zdravo, ja sam Bojan.
                  </p>
                  <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Full-stack developer i osnivač studija rebule. digital. Pomažem malim firmama
                      da dobiju sajt koji im donosi klijente.
                    </p>
                    <p>
                      Radim direktno sa vlasnicima, bez posrednika i dugih procesa. To znači bržu
                      komunikaciju, jasne rokove i rešenje prilagođeno vašem poslu.
                    </p>
                  </div>
                </div>
                <ul className="mt-12 grid gap-3 sm:grid-cols-2">
                  {[
                    "Direktna komunikacija",
                    "Jasni rokovi",
                    "Mobilni pristup",
                    "Podrška nakon lansiranja",
                  ].map((item) => (
                    <li key={item} className="glass flex items-center gap-3 px-5 py-4 text-sm">
                      <Check className="size-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 py-24 sm:py-36">
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <SectionTitle
              number="06"
              eyebrow="Česta pitanja"
              title="Sve što vas zanima pre početka rada."
              text="Odgovori na najčešća pitanja o procesu, cenama, rokovima i održavanju."
            />
            <div className="mt-16 mx-auto max-w-4xl space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    {...reveal}
                    key={faq.question}
                    className="glass overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`size-5 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="border-t border-border/60 px-6 pb-6 pt-4 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="kontakt"
          className="relative scroll-mt-20 overflow-hidden bg-primary py-24 text-primary-foreground sm:py-36"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_28rem_at_20%_10%,rgba(255,255,255,0.22),transparent_70%),radial-gradient(36rem_26rem_at_85%_85%,rgba(255,255,255,0.14),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto grid max-w-[90rem] gap-16 px-5 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase opacity-70">(07) Kontakt</p>
              <h2 className="mt-8 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
                Hajde da napravimo nešto što radi.
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed opacity-75">
                Ispričajte mi ukratko o svom poslu. Odgovoriću u roku od jednog radnog dana sa prvim
                predlogom.
              </p>
              <div className="mt-12 space-y-4 text-sm">
                <a
                  className="flex items-center gap-3 transition-opacity hover:opacity-75"
                  href="mailto:zdravo@rebule.studio"
                >
                  <Mail className="size-5" /> zdravo@rebule.studio
                </a>
                <a
                  className="flex items-center gap-3 transition-opacity hover:opacity-75"
                  href="tel:+381601234567"
                >
                  <Phone className="size-5" /> +381 60 123 4567
                </a>
                <a
                  className="flex items-center gap-3 text-emerald-200 transition-opacity hover:opacity-75"
                  href="https://wa.me/381601234567?text=Zdravo%20Bojane,%20zainteresovan%20sam%20za%20izradu%20sajta."
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiWhatsapp className="size-5" /> Pišite mi na WhatsApp
                </a>
                <p className="flex items-center gap-3 opacity-75">
                  <MapPin className="size-5" /> Beograd · rad sa klijentima svuda
                </p>
              </div>
            </div>

            <motion.form
              {...reveal}
              onSubmit={submit}
              className="grid gap-5 rounded-[1.75rem] border border-white/25 bg-white/10 p-7 backdrop-blur-2xl sm:grid-cols-2"
            >
              <label className="grid gap-2 text-sm">
                Ime i prezime *
                <input required name="name" className="form-control" placeholder="Vaše ime" />
              </label>
              <label className="grid gap-2 text-sm">
                Email adresa *
                <input
                  required
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="ime@firma.rs"
                />
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                Telefon / WhatsApp (opciono)
                <input type="tel" name="phone" className="form-control" placeholder="+381 60 ..." />
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                Tip projekta
                <select name="type" className="form-control">
                  <option>Sajt za firmu / usluge</option>
                  <option>Sistem za online zakazivanje</option>
                  <option>Portfolio / Prezentacija</option>
                  <option>Katalog / Internet prodavnica</option>
                  <option>Redizajn i ubrzanje postojećeg sajta</option>
                  <option>Nešto drugo</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm sm:col-span-2">
                Poruka i opis potreba *
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="form-control resize-none"
                  placeholder="Ukratko opišite čime se bavite i šta vam je potrebno..."
                />
              </label>
              <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-2xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Šaljem upit...
                    </>
                  ) : (
                    <>
                      Zakaži besplatne konsultacije <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    role="status"
                    className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm font-medium text-white"
                  >
                    <Check className="size-4" /> Hvala! Odgovoriću u roku od 24h.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="px-5 py-10 lg:px-10">
        <div className="glass mx-auto flex max-w-[90rem] flex-col gap-7 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold uppercase">
              Rebule<span className="text-primary">.</span> Digital
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Web studio za male firme.</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 rebule. digital. Sva prava zadržana.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" aria-label="LinkedIn profil Bojana Crnića" asChild>
              <a
                href="https://www.linkedin.com/in/bojan-crni%C4%87-9b3305142/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email" asChild>
              <a href="mailto:zdravo@rebule.studio">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
