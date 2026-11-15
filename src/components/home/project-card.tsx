import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLocale, useUi } from "@/lib/i18n";
import { categoryLabel, projectSrcSet, type Project } from "@/lib/projects";
import { reveal } from "@/lib/motion";

/** Kompaktna kartica projekta: slika, delatnost, naziv, jedan red opisa i link na studiju slučaja. */
export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useUi().projectCard;
  const projectRoute = locale === "en" ? "/en/project/$id" : "/projekat/$id";

  return (
    <motion.article
      {...reveal}
      className="glass glass-hover group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 transition-all duration-300 md:w-auto"
    >
      <Link
        to={projectRoute}
        params={{ id: project.id }}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] w-full overflow-hidden bg-muted/40"
      >
        <img
          src={project.image}
          srcSet={projectSrcSet(project)}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 80vw"
          alt={t.imageAlt(project.title)}
          loading="lazy"
          decoding="async"
          width={1280}
          height={800}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {categoryLabel(project.category, locale)}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          <Link to={projectRoute} params={{ id: project.id }}>
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <Link
          to={projectRoute}
          params={{ id: project.id }}
          aria-label={t.viewCaseAria(project.title)}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-primary transition-all group-hover:gap-3"
        >
          {t.viewCase}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
