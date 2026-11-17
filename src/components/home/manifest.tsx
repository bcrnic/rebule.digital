import { motion } from "motion/react";
import { useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";

/** Manifest studija: tamna traka sa motom i četiri kratka stava. Uvek tamna (klasa "dark"). */
export function Manifest() {
  const t = useUi().manifest;
  return (
    <section className="dark bg-background py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <p className="label-mono flex items-center gap-2 text-muted-foreground">
          <span className="size-1.5 bg-[var(--logo-gold)]" aria-hidden="true" />
          {t.eyebrow}
        </p>
        <h2 className="mt-6 font-poster text-[clamp(3.5rem,11vw,10rem)] uppercase leading-[0.86] tracking-normal">
          {t.title}
        </h2>
        <ol className="mt-12 grid border-t border-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
          {t.points.map((point, index) => (
            <motion.li
              key={point}
              {...reveal}
              className="border-b border-foreground/20 py-6 sm:pr-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="label-mono text-[var(--logo-gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg leading-snug text-foreground">{point}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
