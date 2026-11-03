import { motion } from "motion/react";
import { Check } from "lucide-react";
import portrait from "@/assets/bojan-crnic.webp";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

export function About() {
  const locale = useLocale();
  const t = useUi().about;
  const ids = useSectionIds();
  const { aboutPoints } = getHomeContent(locale);
  return (
    <section id={ids.about} className="scroll-mt-20 bg-surface/40 py-24 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="06" eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-20 grid grid-cols-12 gap-6">
          <motion.div {...reveal} className="col-span-12 md:col-span-5">
            <img
              src={portrait}
              alt={t.portraitAlt}
              loading="lazy"
              decoding="async"
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
              <p className="font-display text-3xl font-semibold sm:text-5xl">{t.hello}</p>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
            </div>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((item) => (
                <li key={item} className="glass flex items-center gap-3 px-5 py-4 text-sm">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
