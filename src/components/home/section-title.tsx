import { motion } from "motion/react";
import { reveal } from "@/lib/motion";

type SectionTitleProps = {
  number: string;
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionTitle({ number, eyebrow, title, text }: SectionTitleProps) {
  return (
    <motion.div
      {...reveal}
      className="grid gap-7 border-t border-border pt-5 md:grid-cols-[1fr_4fr]"
    >
      <p className="text-xs font-semibold text-muted-foreground">({number})</p>
      <div className="max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 className="font-display text-4xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        {text && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
        )}
      </div>
    </motion.div>
  );
}
