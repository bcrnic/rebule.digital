import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Pricing } from "@/components/home/pricing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getLandingPage, landingPages, type LandingPage } from "@/content/landing";
import { maintenancePlan, pricingPlans } from "@/content/pricing";
import { getProject, projectSrcSet } from "@/lib/projects";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { SITE_URL, absoluteUrl, whatsappLink } from "@/lib/site";

function findPlan(name?: string) {
  if (!name) return undefined;
  if (name === maintenancePlan.name) return maintenancePlan;
  return pricingPlans.find((plan) => plan.name === name);
}

/** head() za rute stranica usluga: title, meta, canonical. */
export function landingHead(path: string) {
  const page = getLandingPage(path);
  return seo({ title: page.seoTitle, description: page.seoDescription, path: page.path });
}

function pageSchema(page: LandingPage) {
  const plan = findPlan(page.plan);
  const price = plan?.price.replace(/[^\d]/g, "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.serviceName,
        description: page.seoDescription,
        url: absoluteUrl(page.path),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "City", name: "Novi Sad" },
        ...(price
          ? {
              offers: {
                "@type": "Offer",
                price,
                priceCurrency: "EUR",
                description: `Paket ${plan?.name}, početna cena`,
              },
            }
          : {}),
      },
      breadcrumbSchema([
        { name: "Početna", path: "/" },
        { name: page.navLabel, path: page.path },
      ]),
      faqSchema(page.faqs),
    ],
  };
}

export function LandingPageView({ path }: { path: string }) {
  const page = getLandingPage(path);
  const plan = findPlan(page.plan);
  const project = page.caseStudy ? getProject(page.caseStudy) : undefined;
  const related = page.related
    .map((p) => landingPages.find((l) => l.path === p))
    .filter((l): l is LandingPage => Boolean(l));

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema(page)) }}
      />
      <SiteHeader />
      <main id="main" className="pt-28">
        {/* Uvod */}
        <section className="mx-auto max-w-[90rem] px-5 pb-16 pt-6 lg:px-10">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 -ml-3 gap-2 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="size-4" /> Početna
            </Link>
          </Button>
          <div className="border-t border-border pt-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              {page.kicker}
            </span>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="rounded-2xl" asChild>
                <Link to="/" hash="kontakt">
                  Zakažite besplatan razgovor <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 hover:bg-emerald-500/20 dark:text-emerald-400"
                asChild
              >
                <a
                  href={whatsappLink(page.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiWhatsapp className="size-4" aria-hidden="true" /> WhatsApp poruka
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Problemi */}
        <section className="border-y border-border/70 bg-card/40 py-20">
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              {page.problemsTitle}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.problems.map((problem) => (
                <article key={problem.title} className="glass p-7">
                  <h3 className="font-display text-xl font-semibold">{problem.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Šta dobijate + preporučeni paket */}
        <section className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              {page.featuresTitle}
            </h2>
            <ul className="mt-8 grid gap-3">
              {page.features.map((feature) => (
                <li key={feature} className="glass flex items-center gap-3 px-4 py-3.5">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {plan && (
            <aside className="glass flex flex-col p-8 ring-2 ring-primary sm:p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Preporučeni paket
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold">{plan.name}</h2>
              <p className="mt-6 text-sm text-muted-foreground">od</p>
              <p className="font-display text-5xl font-semibold tracking-tight">
                {plan.price}
                {plan.suffix && (
                  <span className="ml-2 text-base font-medium text-muted-foreground">
                    {plan.suffix}
                  </span>
                )}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{page.planReason}</p>
              <ul className="mt-6 grid gap-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-4 pt-8">
                <Button variant="hero" size="lg" className="rounded-2xl" asChild>
                  <Link to="/" hash="kontakt">
                    Zatraži ponudu <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="rounded-2xl" asChild>
                  <Link to="/cene-izrade-sajta">Svi paketi</Link>
                </Button>
              </div>
            </aside>
          )}
        </section>

        {page.showPricing && <Pricing number="02" title="Paketi i cene" />}

        {/* Studija slučaja */}
        {project && (
          <section className="mx-auto max-w-[90rem] px-5 pb-20 lg:px-10">
            <Link
              to="/projekat/$id"
              params={{ id: project.id }}
              className="glass glass-hover group grid items-center gap-8 overflow-hidden p-6 sm:p-8 md:grid-cols-2"
            >
              <img
                src={project.image}
                srcSet={projectSrcSet(project)}
                sizes="(min-width: 768px) 45vw, 92vw"
                alt={`Sajt ${project.title}, izradio rebule. digital`}
                width={1440}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full rounded-2xl object-cover object-top"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Primer iz prakse
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold">
                  {project.niche}: {project.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{page.caseStudyText}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Pogledajte studiju slučaja
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* FAQ */}
        <section className="border-t border-border bg-surface/30 py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-10">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">Česta pitanja</h2>
            <div className="mt-10 space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="glass group overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                    <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="border-t border-border/60 px-6 pb-6 pt-4 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Povezane usluge */}
        {related.length > 0 && (
          <nav aria-label="Povezane usluge" className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Pogledajte i
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  {item.navLabel}
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
          <div className="relative z-10 mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end lg:px-10">
            <div>
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Hajde da vidimo šta vašem poslu treba.
              </h2>
              <p className="mt-3 max-w-xl text-lg opacity-80">
                Pošaljite kratak upit i odgovoriću u roku od jednog radnog dana sa prvim predlogom.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="rounded-2xl shadow-xl" asChild>
              <Link to="/" hash="kontakt">
                Zakažite besplatne konsultacije <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
