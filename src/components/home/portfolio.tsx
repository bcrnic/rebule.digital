import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { categoryLabel, getLocalizedProjects, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

type Filter = "all" | ProjectCategory;
const filters: Filter[] = ["all", "Zakazivanje", "Portfolio", "E-commerce", "Biznis"];

export function Portfolio() {
  const locale = useLocale();
  const t = useUi().portfolio;
  const ids = useSectionIds();
  const projects = getLocalizedProjects(locale);
  const [filter, setFilter] = useState<Filter>("all");
  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section
      id={ids.portfolio}
      // Tamna sekcija (klasa "dark" menja boje unutra) daje ritam inače svetloj strani.
      className="dark section-deep relative scroll-mt-20 overflow-hidden py-20 text-foreground sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} />
        <div
          role="group"
          aria-label={t.filterAria}
          className="glass ml-auto mt-12 flex w-fit flex-wrap gap-1 rounded-full p-1.5"
        >
          {filters.map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              aria-pressed={filter === item}
              className={
                filter === item
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  : "text-muted-foreground"
              }
              onClick={() => setFilter(item)}
            >
              {item === "all" ? t.all : categoryLabel(item, locale)}
            </Button>
          ))}
        </div>
        <motion.div layout className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {filter === "all" && (
            <motion.article
              layout
              {...reveal}
              className="glass group flex min-h-[420px] flex-col justify-between rounded-[2rem] border border-dashed border-primary/40 p-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5 sm:p-10"
            >
              <div className="my-auto space-y-4">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Sparkles className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{t.ctaTitle}</h3>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.ctaText}
                </p>
              </div>
              <Button variant="hero" size="lg" className="mt-8 w-full rounded-2xl" asChild>
                <a href={`#${ids.contact}`}>
                  {t.ctaButton} <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.article>
          )}
        </motion.div>
      </div>
    </section>
  );
}
