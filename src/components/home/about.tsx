import { motion } from "motion/react";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { ScrollWords } from "@/components/ui/scroll-words";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

export function About() {
  const locale = useLocale();
  const t = useUi().about;
  const ids = useSectionIds();
  const { aboutStats } = getHomeContent(locale);
  return (
    <section id={ids.about} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="02" eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div {...reveal} className="lg:col-span-6">
            <p className="font-display text-3xl font-semibold sm:text-4xl">{t.hello}</p>
            <div className="mt-6 max-w-2xl space-y-4 text-xl leading-relaxed text-foreground sm:text-2xl">
              <ScrollWords text={t.p1} />
              <ScrollWords text={t.p2} />
            </div>
          </motion.div>
          {/* Konkretne činjenice umesto opštih tvrdnji. */}
          <motion.dl
            {...reveal}
            className="grid grid-cols-2 border-l border-t border-foreground/15 lg:col-span-6"
          >
            {aboutStats.map((stat) => (
              <div key={stat.label} className="border-b border-r border-foreground/15 p-5 sm:p-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-poster text-4xl uppercase leading-none tracking-normal text-foreground sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="label-mono mt-3 block text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
