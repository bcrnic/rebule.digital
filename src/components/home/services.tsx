import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

export function Services() {
  const locale = useLocale();
  const t = useUi().services;
  const ids = useSectionIds();
  const { services } = getHomeContent(locale);
  return (
    <section id={ids.services} className="scroll-mt-20 py-24 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="02" eyebrow={t.eyebrow} title={t.title} text={t.text} />
        <div className="mt-16 grid gap-4">
          {services.map(({ icon: Icon, title, text, path }, index) => (
            <motion.article
              {...reveal}
              key={title}
              className="glass glass-hover group grid gap-5 p-7 md:grid-cols-[0.8fr_2fr_2fr_auto] md:items-center"
            >
              <span className="text-sm text-muted-foreground">0{index + 1}</span>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                {path ? (
                  <Link to={path} className="transition-colors hover:text-primary">
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </h3>
              <p className="max-w-lg leading-relaxed text-muted-foreground">{text}</p>
              <span className="glass-soft flex size-12 items-center justify-center rounded-full text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
