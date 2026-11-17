import { motion } from "motion/react";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

/** Utisci klijenata: citat, ime firme i delatnost, i jedna konkretna stvar koju su dobili. */
export function Testimonials() {
  const locale = useLocale();
  const t = useUi().testimonials;
  const ids = useSectionIds();
  const { testimonials } = getHomeContent(locale);
  const [open, close] = locale === "en" ? ["“", "”"] : ["„", "“"];
  return (
    <section id={ids.testimonials} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="06" eyebrow={t.eyebrow} title={t.title} text={t.text} />
        <div className="-mx-5 mt-10 flex scroll-px-5 snap-x snap-mandatory gap-6 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:overflow-visible sm:px-0">
          {testimonials.map((item) => (
            <motion.figure
              {...reveal}
              key={item.name}
              className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-6 border-b border-foreground/15 py-8 sm:w-auto"
            >
              <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
                {open}
                {item.text}
                {close}
              </blockquote>
              <figcaption className="flex flex-wrap items-center justify-between gap-3">
                <span className="label-mono text-foreground">
                  {item.name} <span className="text-muted-foreground">· {item.role}</span>
                </span>
                <span className="label-mono bg-primary/10 px-2 py-1 text-[0.625rem] text-primary">
                  {item.highlight}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
