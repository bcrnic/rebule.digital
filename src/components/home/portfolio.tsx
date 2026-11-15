import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { getLocalizedProjects } from "@/lib/projects";
import { reveal } from "@/lib/motion";
import { ProjectCard } from "./project-card";
import { SectionTitle } from "./section-title";

/**
 * Radovi: tri kolone na računaru, dve na tabletu, a na telefonu red koji se prevlači levo-desno,
 * da pet projekata ne zauzme pet ekrana.
 */
export function Portfolio() {
  const locale = useLocale();
  const t = useUi().portfolio;
  const ids = useSectionIds();
  // Najpre radovi za glavnu publiku (saloni i majstori), pa ostali.
  const order = ["modni-frizer-vojkan", "remielectric", "residence", "misolutions", "badbyte"];
  const projects = [...getLocalizedProjects(locale)].sort(
    (a, b) => (order.indexOf(a.id) + 1 || 99) - (order.indexOf(b.id) + 1 || 99),
  );

  return (
    <section
      id={ids.portfolio}
      // Tamna sekcija (klasa "dark" menja boje unutra) daje ritam inače svetloj strani.
      className="dark section-deep relative scroll-mt-20 overflow-hidden py-20 text-foreground sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} />
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <motion.article
            {...reveal}
            className="glass group flex w-[80%] shrink-0 snap-start flex-col justify-between rounded-[1.5rem] border border-dashed border-primary/40 p-7 transition-colors hover:border-primary hover:bg-primary/5 md:w-auto"
          >
            <div className="space-y-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold">{t.ctaTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.ctaText}</p>
            </div>
            <a
              href={`#${ids.contact}`}
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              {t.ctaButton} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
