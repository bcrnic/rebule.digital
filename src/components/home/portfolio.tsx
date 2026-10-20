import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

type Filter = "Svi" | ProjectCategory;
const filters: Filter[] = ["Svi", "Zakazivanje", "Portfolio", "E-commerce", "Biznis"];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Svi");
  const visibleProjects =
    filter === "Svi" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-20 overflow-hidden bg-surface/60 py-24 sm:py-36"
    >
      <div className="aurora opacity-60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle
          number="04"
          eyebrow="Odabrani radovi"
          title="Sajtovi koje sam napravio: rezultati, ne samo lepe stranice."
        />
        <div
          role="group"
          aria-label="Filter projekata"
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
              {item}
            </Button>
          ))}
        </div>
        <motion.div layout className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {filter === "Svi" && (
            <motion.article
              layout
              {...reveal}
              className="glass group flex min-h-[420px] flex-col justify-between rounded-[2rem] border border-dashed border-primary/40 p-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/5 sm:p-10"
            >
              <div className="my-auto space-y-4">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Sparkles className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  Vaš projekat na ovom mestu?
                </h3>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Hajde da zajedno kreiramo moderan, brz sajt koji privlači klijente i donosi upite
                  za vaš biznis.
                </p>
              </div>
              <Button variant="hero" size="lg" className="mt-8 w-full rounded-2xl" asChild>
                <a href="#kontakt">
                  Zakažite besplatan razgovor <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.article>
          )}
        </motion.div>
      </div>
    </section>
  );
}
