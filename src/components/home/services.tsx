import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";
import { SpotsStrip } from "./spots-strip";

// Delatnosti sa kojima studio radi; svaka vodi na svoju stranicu ili na studiju slučaja.
// Stranice usluga postoje samo na srpskom, pa se lista prikazuje samo na srpskoj verziji.
const audiences = [
  {
    title: "Frizerski i kozmetički saloni",
    text: "Cenovnik, galerija radova i zakazivanje termina porukom.",
    example: "Modni Frizer Vojkan",
    link: { to: "/sajt-za-frizerski-salon" },
  },
  {
    title: "Majstori i zanatlije",
    text: "Jasne usluge, dugme za hitan poziv i zakazivanje pregleda.",
    example: "REMIELECTRIC",
    link: { to: "/sajt-za-majstore" },
  },
  {
    title: "Konsultanti i agencije",
    text: "Ponuda, rezultati i forma za poslovne upite umesto PDF brošure.",
    example: "MiSolutions",
    link: { to: "/projekat/$id", params: { id: "misolutions" } },
  },
  {
    title: "Investitori i nekretnine",
    text: "Katalog stanova sa cenama, tlocrtima i oznakom slobodnih.",
    example: "Residence",
    link: { to: "/projekat/$id", params: { id: "residence" } },
  },
] as const;

/** Usluge (spotovi ili lista) i, na srpskom, delatnosti sa primerom za svaku. */
export function Services() {
  const locale = useLocale();
  const t = useUi().services;
  const ta = useUi().audience;
  const ids = useSectionIds();
  const { services } = getHomeContent(locale);
  return (
    <section id={ids.services} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="03" eyebrow={t.eyebrow} title={t.title} text={t.text} />
        {/* Srpska verzija: usluge kao spotovi (tekst u videu je na srpskom), engleska: lista. */}
        {locale === "sr" ? (
          <SpotsStrip />
        ) : (
          <ul className="mt-10 border-t border-foreground/15">
            {services.map(({ title, text }, index) => (
              <motion.li
                {...reveal}
                key={title}
                className="grid gap-3 border-b border-foreground/15 py-6 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline md:gap-8"
              >
                <span className="label-mono text-muted-foreground">0{index + 1}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="max-w-xl leading-relaxed text-muted-foreground">{text}</p>
              </motion.li>
            ))}
          </ul>
        )}

        {locale === "sr" && (
          <div className="mt-16" id="za-koga">
            <h3 className="label-mono flex items-center gap-2 text-muted-foreground">
              <span className="size-1.5 bg-primary" aria-hidden="true" />
              {ta.title}
            </h3>
            <ul className="mt-4 border-t border-foreground">
              {audiences.map(({ title, text, example, link }, index) => (
                <li key={title} className="border-b border-foreground/15">
                  <Link
                    {...link}
                    className="group grid items-center gap-2 py-5 md:grid-cols-[4rem_1.1fr_1.4fr_auto] md:gap-8"
                  >
                    <span className="label-mono hidden text-muted-foreground md:block">
                      0{index + 1}
                    </span>
                    <span className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                      {title}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {text}{" "}
                      <span className="label-mono whitespace-nowrap text-foreground">
                        · {ta.example}: {example}
                      </span>
                    </span>
                    <span
                      className="hidden size-10 items-center justify-center rounded-full border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background md:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight className="size-4 transition-transform group-hover:-rotate-45" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
