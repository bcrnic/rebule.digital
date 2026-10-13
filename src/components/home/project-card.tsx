import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { reveal } from "@/lib/motion";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const metric = project.metrics?.[0];

  return (
    <motion.article
      layout
      {...reveal}
      className="glass glass-hover group flex flex-col overflow-hidden rounded-[2rem] border border-foreground/10 transition-all duration-300"
    >
      <Link
        to="/projekat/$id"
        params={{ id: project.id }}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] w-full overflow-hidden bg-muted/40"
      >
        <img
          src={project.image}
          alt={`Prikaz sajta ${project.title}`}
          loading="lazy"
          decoding="async"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {project.category}
          </span>
          {metric && (
            <span className="rounded-full border border-emerald-400/30 bg-emerald-950/80 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md">
              {metric.label}: {metric.value}
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase text-primary">
              Projekat 0{index + 1}
            </span>
            {project.year && (
              <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
            )}
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
            <Link to="/projekat/$id" params={{ id: project.id }}>
              {project.title}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-foreground/5 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-5">
          <Link
            to="/projekat/$id"
            params={{ id: project.id }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
          >
            Pogledaj studiju slučaja
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <span
            aria-hidden="true"
            className="glass-soft flex size-10 items-center justify-center rounded-full text-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <ArrowDownRight className="size-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
