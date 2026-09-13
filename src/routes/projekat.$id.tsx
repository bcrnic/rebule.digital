import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Layers, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { getProject, getAdjacentProjects } from "@/lib/projects";

export const Route = createFileRoute("/projekat/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    const adjacent = getAdjacentProjects(params.id);
    return { project, adjacent };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    return {
      meta: [
        {
          title: project
            ? `${project.title} — Studija slučaja | rebule. digital`
            : "Projekat nije pronađen — rebule. digital",
        },
        {
          name: "description",
          content: project?.description ?? "Detalji portfolio projekta studija rebule. digital.",
        },
        {
          property: "og:title",
          content: project ? `${project.title} — Studija slučaja` : "Portfolio projekat",
        },
        {
          property: "og:description",
          content: project?.description ?? "Detalji portfolio projekta.",
        },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center text-foreground">
      <h1 className="font-display text-4xl font-semibold">Projekat nije pronađen</h1>
      <p className="mt-3 text-muted-foreground">
        Projekat koji tražite ne postoji ili je premešten.
      </p>
      <Button asChild className="mt-6">
        <Link to="/" hash="portfolio">
          Povratak na portfolio
        </Link>
      </Button>
    </div>
  ),
});

function ProjectPage() {
  const { project, adjacent } = Route.useLoaderData();
  const { prevProject, nextProject } = adjacent;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.id]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Bojan Crnić",
      url: "https://rebule.studio",
    },
    creator: {
      "@type": "Organization",
      name: "rebule. digital",
      url: "https://rebule.studio",
    },
    genre: project.category,
    keywords: project.technologies.join(", "),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader compact />
      <main className="pt-28">
        {/* Header & Hero */}
        <section className="mx-auto max-w-[90rem] px-5 pb-16 pt-6 lg:px-10">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 -ml-3 gap-2 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to="/" hash="portfolio">
              <ArrowLeft className="size-4" /> Nazad na portfolio
            </Link>
          </Button>

          <div className="grid grid-cols-12 gap-8 border-t border-border pt-8">
            <div className="col-span-12 space-y-4 md:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                {project.category}
              </span>
              <div className="space-y-1 text-sm text-muted-foreground">
                {project.client && (
                  <p>
                    <span className="font-semibold text-foreground">Klijent:</span> {project.client}
                  </p>
                )}
                {project.year && (
                  <p>
                    <span className="font-semibold text-foreground">Godina:</span> {project.year}
                  </p>
                )}
                <p>
                  <span className="font-semibold text-foreground">Usluga:</span> Web development &
                  dizajn
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {project.description}
              </p>
              {project.url && (
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="rounded-2xl shadow-hero" asChild>
                    <a href={project.url} target="_blank" rel="noreferrer noopener">
                      Otvori sajt uživo <ExternalLink className="size-4" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="rounded-2xl" asChild>
                    <Link to="/" hash="kontakt">
                      Zatraži sličan projekat
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
            <img
              src={project.image}
              alt={`Prikaz projekta ${project.title}`}
              width={1440}
              height={900}
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </section>

        {/* Key Metrics / Highlights */}
        {project.metrics && project.metrics.length > 0 && (
          <section
            aria-label="Ključni rezultati projekta"
            className="border-y border-border/70 bg-card/40 py-14"
          >
            <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
              <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles className="size-4" />
                <span>Ključni pokazatelji i rezultati</span>
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
                <p className="section-kicker">01 / Izazov</p>
                <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                  Polazna situacija i problem
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-xs font-medium text-foreground">
                Cilj: Eliminisati prepreke za posetioce i stvoriti jednostavan put do kupovine ili
                rezervacije.
              </div>
            </div>

            <div className="glass flex flex-col justify-between p-8 sm:p-10 md:mt-12">
              <div>
                <p className="section-kicker">02 / Pristup</p>
                <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
                  Implementirano rešenje
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs font-medium text-primary">
                Fokus: Brzina, preglednost i jasan poziv na akciju na svim uređajima.
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
                <span>Isporučeni elementi (Deliverables)</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold">Šta je sve urađeno</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {(
                  project.deliverables ?? [
                    "Web dizajn",
                    "Front-end razvoj",
                    "Mobilna optimizacija",
                    "SEO postavka",
                  ]
                ).map((item) => (
                  <li key={item} className="glass flex items-center gap-3 px-4 py-3.5 text-sm">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-kicker">03 / Alati & Tehnologije</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Tehnološki stek</h2>
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
                  Krajnji ishod
                </p>
                <p className="mt-3 flex items-start gap-3 text-base font-medium leading-relaxed text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {project.result}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adjacent Projects Navigation */}
        <section
          aria-label="Navigacija između projekata"
          className="border-t border-border bg-surface/30 py-16"
        >
          <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Pogledajte ostale projekte
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link
                to="/projekat/$id"
                params={{ id: prevProject.id }}
                className="glass glass-hover group flex flex-col justify-between p-6"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  <span>Prethodni rad</span>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={prevProject.image}
                    alt={prevProject.title}
                    width={80}
                    height={60}
                    className="size-16 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-primary">
                      {prevProject.category}
                    </span>
                    <p className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prevProject.title}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/projekat/$id"
                params={{ id: nextProject.id }}
                className="glass glass-hover group flex flex-col justify-between p-6 sm:text-right"
              >
                <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <span>Sledeći rad</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="mt-6 flex items-center justify-end gap-4">
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase text-primary">
                      {nextProject.category}
                    </span>
                    <p className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {nextProject.title}
                    </p>
                  </div>
                  <img
                    src={nextProject.image}
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
                Započnimo saradnju
              </span>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Želite sličan sajt za vaš biznis?
              </h2>
              <p className="mt-3 max-w-xl text-lg opacity-80">
                Pošaljite kratak upit i dobićete analizu i predlog rešenja u roku od 24 časa.
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
    </div>
  );
}
