import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { getPricingContent } from "@/content/pricing";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

type PricingProps = {
  title?: string;
  /** Na početnoj ide link ka zasebnoj stranici sa cenama. */
  showMoreLink?: boolean;
  /** Redni broj sekcije (samo na početnoj). */
  number?: string;
};

/** Paketi: tri kolone u rasteru, najpopularniji je taman; ispod kalendar i održavanje. */
export function Pricing({ title, showMoreLink = false, number }: PricingProps) {
  const locale = useLocale();
  const t = useUi().pricing;
  const ids = useSectionIds();
  const home = locale === "en" ? "/en" : "/";
  const {
    plans: pricingPlans,
    maintenance: maintenancePlan,
    notes: pricingNotes,
  } = getPricingContent(locale);
  return (
    <section id={ids.pricing} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number={number} eyebrow={t.eyebrow} title={title ?? t.title} text={t.text} />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.article
              {...reveal}
              key={plan.name}
              className={`flex flex-col rounded-[var(--radius)] border p-7 sm:p-8 ${
                plan.featured
                  ? "dark border-transparent bg-background text-foreground"
                  : "border-foreground/15 bg-card"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="label-mono text-sm text-foreground">{plan.name}</h3>
                {plan.featured && (
                  <span className="label-mono bg-[var(--logo-gold)] px-2 py-1 text-[0.625rem] text-[oklch(0.2_0.02_160)]">
                    {t.popular}
                  </span>
                )}
              </div>
              <p className="mt-8 flex items-baseline gap-2">
                <span className="label-mono text-muted-foreground">{t.from}</span>
                <span className="font-poster text-7xl leading-none tracking-normal">
                  {plan.price}
                </span>
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 grid flex-1 content-start gap-3 border-t border-foreground/15 pt-6 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={home}
                hash={ids.contact}
                className={`group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary-bright"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {t.requestQuote}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <motion.article
            {...reveal}
            className="flex flex-col gap-4 rounded-[var(--radius)] border border-foreground/15 p-7"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-semibold">{t.calendarTitle}</h3>
              <p className="label-mono shrink-0 text-foreground">{t.onRequest}</p>
            </div>
            <p className="leading-relaxed text-muted-foreground">{t.calendarText}</p>
          </motion.article>

          <motion.article
            {...reveal}
            className="flex flex-col gap-4 rounded-[var(--radius)] border border-foreground/15 p-7"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-semibold">{maintenancePlan.name}</h3>
              <p className="shrink-0">
                <span className="font-poster text-3xl tracking-normal">
                  {maintenancePlan.price}
                </span>{" "}
                <span className="label-mono text-muted-foreground">{maintenancePlan.suffix}</span>
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {maintenancePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <ul className="space-y-1 text-sm text-muted-foreground">
            {pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          {showMoreLink && (
            <Link
              to="/cene-izrade-sajta"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {t.moreLink} <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
