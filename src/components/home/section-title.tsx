import { motion } from "motion/react";
import { reveal } from "@/lib/motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
  /** Zastarelo: redni broj sekcije se više ne prikazuje. */
  number?: string;
};

/** Naslov sekcije: naslov levo, uvodna rečenica desno (na širokom ekranu), bez praznih kolona. */
export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <motion.div
      {...reveal}
      className="grid gap-5 border-t border-border pt-6 lg:grid-cols-2 lg:items-end lg:gap-16"
    >
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {text && (
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
          {text}
        </p>
      )}
    </motion.div>
  );
}
