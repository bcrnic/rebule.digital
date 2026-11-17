import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { PixelReveal } from "@/components/ui/pixel-reveal";
import { ShuffleText } from "@/components/ui/shuffle-text";
import { useLocale, useUi } from "@/lib/i18n";
import { categoryLabel, projectSrcSet, type Project } from "@/lib/projects";

/** Kartica projekta: slika sa mono labelom, naziv, niša i godina, okrugla strelica. */
export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useUi().projectCard;
  const projectRoute = locale === "en" ? "/en/project/$id" : "/projekat/$id";
  const imgRef = useRef<HTMLImageElement>(null);

  // Uglovi "nišana" koji se pojave oko slike na hover.
  const corner =
    "pointer-events-none absolute size-4 border-white opacity-0 drop-shadow-[0_0_2px_rgb(0_0_0/0.6)] transition-[opacity,translate] duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none";

  return (
    <article
      data-shuffle-root
      data-cursor={t.viewCase}
      className="group relative flex w-[82%] shrink-0 snap-start flex-col md:w-auto"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius)] bg-muted">
        <img
          ref={imgRef}
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
        <PixelReveal imgRef={imgRef} />
        <i
          aria-hidden="true"
          className={`${corner} right-3 top-3 -translate-y-1 translate-x-1 border-r-2 border-t-2`}
        />
        <i
          aria-hidden="true"
          className={`${corner} bottom-3 left-3 -translate-x-1 translate-y-1 border-b-2 border-l-2`}
        />
        <i
          aria-hidden="true"
          className={`${corner} bottom-3 right-3 translate-x-1 translate-y-1 border-b-2 border-r-2`}
        />
        <span className="label-mono absolute left-3 top-3 flex items-center gap-1.5 bg-background px-2 py-1 text-foreground">
          <span className="size-1.5 bg-foreground" aria-hidden="true" />
          <ShuffleText text={categoryLabel(project.category, locale)} />
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
