import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Layers, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { categoryLabel, projectSrcSet, type Project } from "@/lib/projects";
import { FOUNDER, SITE_NAME, absoluteUrl } from "@/lib/site";

type ProjectPageProps = {
  project: Project;
  prevProject: Project;
  nextProject: Project;
};

/** Studija slučaja; koriste je /projekat/$id i /en/project/$id. */
export function ProjectPage({ project, prevProject, nextProject }: ProjectPageProps) {
  const locale = useLocale();
  const t = useUi().project;
  const ids = useSectionIds();
  const home = locale === "en" ? "/en" : "/";
  const projectRoute = locale === "en" ? "/en/project/$id" : "/projekat/$id";
  const projectUrl = (id: string) => (locale === "en" ? `/en/project/${id}` : `/projekat/${id}`);
  const category = (p: Project) => categoryLabel(p.category, locale);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.id]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: absoluteUrl(home) },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: absoluteUrl(`${home}#${ids.portfolio}`),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: absoluteUrl(projectUrl(project.id)),
          },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        headline: project.title,
        description: project.description,
        inLanguage: locale === "en" ? "en" : "sr-Latn",
        url: absoluteUrl(projectUrl(project.id)),
        author: { "@type": "Person", name: FOUNDER.name, url: absoluteUrl("/") },
        creator: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
        genre: category(project),
        keywords: project.technologies.join(", "),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main" className="pt-28">
        {/* Header & Hero */}
        <section className="mx-auto max-w-[90rem] px-5 pb-16 pt-6 lg:px-10">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 -ml-3 gap-2 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to={home} hash={ids.portfolio}>
              <ArrowLeft className="size-4" /> {t.back}
            </Link>
          </Button>

          <div className="grid grid-cols-12 gap-8 border-t border-border pt-8">
            <div className="col-span-12 space-y-4 md:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                {category(project)}
              </span>
              <div className="space-y-1 text-sm text-muted-foreground">
                {project.client && (
                  <p>
                    <span className="font-semibold text-foreground">{t.client}</span>{" "}
                    {project.client}
                  </p>
                )}
                {project.year && (
                  <p>
                    <span className="font-semibold text-foreground">{t.year}</span> {project.year}
                  </p>
                )}
                <p>
                  <span className="font-semibold text-foreground">{t.service}</span>{" "}
                  {t.serviceValue}
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl lg:text-8xl">
                <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">
                  {project.niche}:
                </span>
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {project.description}
              </p>
              {project.url && (
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="rounded-2xl shadow-hero" asChild>
                    <a href={project.url} target="_blank" rel="noreferrer noopener">
                      {t.openLive} <ExternalLink className="size-4" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="rounded-2xl" asChild>
                    <Link to={home} hash={ids.contact}>
                      {t.requestSimilar}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            <img
              src={project.image}
              srcSet={projectSrcSet(project)}
              sizes="(min-width: 1440px) 1360px, 94vw"
              alt={t.imageAlt(project.title)}
              width={1440}
              height={900}
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </section>

        {/* Key Metrics / Highlights */}
        {project.metrics && project.metrics.length > 0 && (
          <section
            aria-label={t.highlightsAria}
            className="border-y border-border/70 bg-card/40 py-14"
          >
            <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
              <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles className="size-4" />
                <span>{t.highlights}</span>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="glass flex flex-col justify-between p-6">
                    <p className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
                      {metric.value}
                    </p>
                    <div className="mt-4">
                      <p className="text-base font-semibold text-foreground">{metric.label}</p>
                      {metric.hint && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{metric.hint}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Problem & Solution */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="aurora opacity-50" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid max-w-[90rem] gap-10 px-5 md:grid-cols-2 lg:px-10">
            <div className="glass flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="section-kicker">{t.challengeKicker}</p>
                <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                  {t.challengeTitle}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-xs font-medium text-foreground">
                {t.goal}
              </div>
            </div>

            <div className="glass flex flex-col justify-between p-8 sm:p-10 md:mt-12">
              <div>
                <p className="section-kicker">{t.approachKicker}</p>
                <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                  {t.approachTitle}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs font-medium text-primary">
                {t.focus}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables & Technologies */}
        <section className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10">
          <div className="grid gap-12 border-t border-border pt-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Layers className="size-4" />
                <span>{t.deliverablesKicker}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold">{t.deliverablesTitle}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {(project.deliverables ?? t.defaultDeliverables).map((item) => (
                  <li key={item} className="glass flex items-center gap-3 px-4 py-3.5 text-sm">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-kicker">{t.toolsKicker}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">{t.toolsTitle}</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass rounded-full px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="glass-soft mt-8 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {t.outcome}
                </p>
                <p className="mt-3 flex items-start gap-3 text-base font-medium leading-relaxed text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {project.result}
                </p>
              </div>
              {project.servicePath && (
                <Link
                  to={project.servicePath}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {t.moreAbout(project.niche)} <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Adjacent Projects Navigation */}
        <section aria-label={t.adjacentAria} className="border-t border-border bg-surface/30 py-16">
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t.seeOthers}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link
                to={projectRoute}
                params={{ id: prevProject.id }}
                className="glass glass-hover group flex flex-col justify-between p-6"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  <span>{t.prev}</span>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={prevProject.imageSmall}
                    loading="lazy"
                    alt={prevProject.title}
                    width={80}
                    height={60}
                    className="size-16 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-primary">
                      {category(prevProject)}
                    </span>
                    <p className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prevProject.title}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to={projectRoute}
                params={{ id: nextProject.id }}
                className="glass glass-hover group flex flex-col justify-between p-6 sm:text-right"
              >
                <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <span>{t.next}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="mt-6 flex items-center justify-end gap-4">
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase text-primary">
                      {category(nextProject)}
                    </span>
                    <p className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {nextProject.title}
                    </p>
                  </div>
                  <img
                    src={nextProject.imageSmall}
                    loading="lazy"
                    alt={nextProject.title}
                    width={80}
                    height={60}
                    className="size-16 rounded-xl object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(35rem_25rem_at_20%_20%,rgba(255,255,255,0.18),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end lg:px-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                {t.ctaKicker}
              </span>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-3 max-w-xl text-lg opacity-80">{t.ctaText}</p>
            </div>
            <Button variant="secondary" size="lg" className="rounded-2xl shadow-xl" asChild>
              <Link to={home} hash={ids.contact}>
                {t.ctaButton} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/** Stranica kada projekat sa datim id-jem ne postoji. */
export function ProjectNotFound() {
  const locale = useLocale();
  const t = useUi().project;
  const ids = useSectionIds();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center text-foreground">
      <h1 className="font-display text-4xl font-semibold">{t.notFoundTitle}</h1>
      <p className="mt-3 text-muted-foreground">{t.notFoundText}</p>
      <Button asChild className="mt-6">
        <Link to={locale === "en" ? "/en" : "/"} hash={ids.portfolio}>
          {t.backToPortfolio}
        </Link>
      </Button>
    </div>
  );
}
