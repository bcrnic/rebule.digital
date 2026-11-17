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
      className="scroll-mt-20 bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="04" eyebrow={t.eyebrow} title={t.title} text={t.text} />
        <ol className="mt-10 grid md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.title}
              {...reveal}
              className="border-b border-foreground/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="font-poster text-7xl leading-none tracking-normal text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
