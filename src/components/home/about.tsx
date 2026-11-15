import { motion } from "motion/react";
import portrait from "@/assets/bojan-crnic.webp";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

export function About() {
  const locale = useLocale();
  const t = useUi().about;
  const ids = useSectionIds();
  const { aboutStats } = getHomeContent(locale);
  return (
    <section id={ids.about} className="scroll-mt-20 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-12 grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <motion.div {...reveal} className="md:col-span-4">
            <img
              src={portrait}
              alt={t.portraitAlt}
              loading="lazy"
              decoding="async"
              width={900}
              height={1100}
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-foreground/10 object-cover shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--foreground)_50%,transparent)]"
            />
          </motion.div>
          <motion.div {...reveal} className="md:col-span-8">
            <p className="font-display text-3xl font-semibold sm:text-4xl">{t.hello}</p>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
            {/* Konkretne činjenice umesto opštih tvrdnji. */}
            <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="glass p-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
