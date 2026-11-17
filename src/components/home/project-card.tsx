import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLocale, useUi } from "@/lib/i18n";
import { categoryLabel, projectSrcSet, type Project } from "@/lib/projects";

/** Kartica projekta: slika sa mono labelom, naziv, niša i godina, okrugla strelica. */
export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useUi().projectCard;
  const projectRoute = locale === "en" ? "/en/project/$id" : "/projekat/$id";

  return (
    <article className="group relative flex w-[82%] shrink-0 snap-start flex-col md:w-auto">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius)] bg-muted">
        <img
          src={project.image}
          srcSet={projectSrcSet(project)}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 82vw"
          alt={t.imageAlt(project.title)}
          loading="lazy"
          decoding="async"
          width={1280}
          height={800}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="label-mono absolute left-3 top-3 flex items-center gap-1.5 bg-background px-2 py-1 text-foreground">
          <span className="size-1.5 bg-foreground" aria-hidden="true" />
          {categoryLabel(project.category, locale)}
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {/* Ceo blok je klikabilan preko ::after, a link ostaje jedan i čitljiv čitaču ekrana. */}
            <Link
              to={projectRoute}
              params={{ id: project.id }}
              aria-label={t.viewCaseAria(project.title)}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          <p className="label-mono mt-1.5 truncate text-muted-foreground">
            {project.niche}
            {project.year ? ` · ${project.year}` : ""}
          </p>
        </div>
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground text-foreground transition-colors group-hover:bg-foreground group-hover:text-background"
          aria-hidden="true"
        >
          <ArrowRight className="size-4 transition-transform group-hover:-rotate-45" />
        </span>
      </div>
    </article>
  );
}
