import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CalendarClock, Check, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { maintenancePlan, pricingNotes, pricingPlans } from "@/content/pricing";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

type PricingProps = {
  number?: string;
  title?: string;
  /** Na početnoj ide link ka zasebnoj stranici sa cenama. */
  showMoreLink?: boolean;
};

export function Pricing({
  number = "03",
  title = "Cene izrade sajta: jasni paketi, bez skrivenih troškova.",
  showMoreLink = false,
}: PricingProps) {
  return (
    <section id="cene" className="scroll-mt-20 py-24 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle
          number={number}
          eyebrow="Cene"
          title={title}
          text="Fiksna cena dogovorena unapred. Izaberite paket koji odgovara vašem poslu, a ostalo rešavamo na razgovoru."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.article
              {...reveal}
              key={plan.name}
              className={`glass flex flex-col p-8 sm:p-10 ${
                plan.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Najpopularnije
                  </span>
                )}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">od</p>
              <p className="font-display text-5xl font-semibold tracking-tight">{plan.price}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-8 grid flex-1 content-start gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "hero" : "heroOutline"}
                size="lg"
                className="mt-10 w-full rounded-2xl"
                asChild
              >
                <Link to="/" hash="kontakt">
                  Zatraži ponudu <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.article {...reveal} className="glass flex flex-col gap-5 p-8">
            <div className="flex items-center gap-3">
              <span className="glass-soft flex size-11 items-center justify-center rounded-full text-primary">
                <CalendarClock className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">Zakazivanje sa kalendarom</h3>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Klijenti biraju slobodan termin direktno na sajtu. Ovo je zaseban projekat, pa se cena
              određuje po ponudi prema vašim pravilima rada.
            </p>
            <p className="font-display text-2xl font-semibold">Po ponudi</p>
          </motion.article>

          <motion.article {...reveal} className="glass flex flex-col gap-5 p-8">
            <div className="flex items-center gap-3">
              <span className="glass-soft flex size-11 items-center justify-center rounded-full text-primary">
                <Wrench className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">{maintenancePlan.name}</h3>
            </div>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {maintenancePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="font-display text-2xl font-semibold">
              {maintenancePlan.price}{" "}
              <span className="text-base font-medium text-muted-foreground">
                {maintenancePlan.suffix}
              </span>
            </p>
          </motion.article>
        </div>

        <ul className="mt-8 space-y-1 text-sm text-muted-foreground">
          {pricingNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        {showMoreLink && (
          <Link
            to="/cene-izrade-sajta"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Šta je uključeno u cenu izrade sajta <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
