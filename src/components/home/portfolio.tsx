import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ShuffleText } from "@/components/ui/shuffle-text";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { categoryLabel, getLocalizedProjects, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "./project-card";

// Najpre radovi za glavnu publiku (saloni i majstori), pa ostali.
const order = ["modni-frizer-vojkan", "remielectric", "residence", "misolutions", "badbyte"];

/**
 * Radovi: plakatni naslov sa brojačem, filteri po vrsti projekta i mreža kartica
 * (na telefonu red koji se prevlači), a ispod traka "Sledeći ste vi".
 */
export function Portfolio() {
  const locale = useLocale();
  const t = useUi().portfolio;
  const ids = useSectionIds();
  const projects = [...getLocalizedProjects(locale)].sort(
    (a, b) => (order.indexOf(a.id) + 1 || 99) - (order.indexOf(b.id) + 1 || 99),
  );
  const categories = [...new Set(projects.map((p) => p.category))] as ProjectCategory[];
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const chip = (active: boolean) =>
    `label-mono inline-flex items-center gap-2 border px-3 py-2 transition-colors ${
      active
        ? "border-foreground bg-foreground text-background"
        : "border-border bg-card text-foreground hover:border-foreground"
    }`;

  return (
    <section id={ids.portfolio} className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <p className="label-mono flex items-center gap-2 text-muted-foreground">
          <span className="size-1.5 bg-primary" aria-hidden="true" />
          <span className="text-foreground">01</span>
          {t.eyebrow}
        </p>
        <div className="mt-4 flex items-end justify-between gap-6">
          <h2 className="font-poster text-[clamp(3.5rem,10vw,8rem)] uppercase leading-[0.86] tracking-normal text-foreground">
            {t.title}
            <span className="text-primary">.</span>
          </h2>
          <p className="label-mono pb-2 text-muted-foreground" aria-live="polite">
            {visible.length} / {projects.length}
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2 border-t border-foreground pt-5"
          role="group"
          aria-label={t.filtersAria}
        >
          <button
            type="button"
            className={chip(filter === "all")}
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            <ShuffleText text={t.all} />
            <span className="opacity-60">{projects.length}</span>
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={chip(filter === category)}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              <ShuffleText text={categoryLabel(category, locale)} />
              <span className="opacity-60">
                {projects.filter((p) => p.category === category).length}
              </span>
            </button>
          ))}
        </div>

        <div className="-mx-5 mt-8 flex scroll-px-5 snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-12 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mesto za sledećeg klijenta, kao poslednji "projekat" na listi. */}
        <div className="mt-12 flex flex-col gap-5 rounded-[var(--radius)] bg-surface p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <p className="flex items-center gap-3 font-poster text-4xl uppercase leading-none tracking-normal text-foreground sm:text-5xl">
            <span className="size-3 shrink-0 bg-primary" aria-hidden="true" />
            {t.ctaTitle}
          </p>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">{t.ctaText}</p>
          <a
            href={`#${ids.contact}`}
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
