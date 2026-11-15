import { motion } from "motion/react";
import { getHomeContent } from "@/content/home";
import { useLocale, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

/** Saradnja u tri koraka: razgovor, dizajn i tekst, lansiranje. */
export function Process() {
  const locale = useLocale();
  const t = useUi().process;
  const { processSteps } = getHomeContent(locale);
  return (
    <section
      id={locale === "en" ? "how-it-works" : "kako-radimo"}
      className="scroll-mt-20 bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} text={t.text} />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.li key={step.title} {...reveal} className="glass relative p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
