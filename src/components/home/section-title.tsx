import { motion } from "motion/react";
import { MaskedWords } from "@/components/ui/masked-words";
import { reveal } from "@/lib/motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
  /** Redni broj sekcije u mono labeli, npr. "03". */
  number?: string | undefined;
};

/**
 * Naslov sekcije: tanka crta, mono labela sa brojem, plakatni naslov levo i
 * uvodna rečenica desno (na širokom ekranu).
 */
export function SectionTitle({ eyebrow, title, text, number }: SectionTitleProps) {
  return (
    <motion.div {...reveal} className="border-t border-foreground pt-5">
      <p className="label-mono flex items-center gap-2 text-muted-foreground">
        <span className="size-1.5 bg-primary" aria-hidden="true" />
        {number && <span className="text-foreground">{number}</span>}
        {eyebrow}
      </p>
      <div className="mt-6 grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h2 className="font-poster text-[clamp(2.75rem,6.4vw,6rem)] uppercase leading-[0.92] tracking-normal text-foreground lg:col-span-7">
          <MaskedWords text={title} />
        </h2>
        {text && (
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:justify-self-end">
            {text}
          </p>
        )}
      </div>
    </motion.div>
  );
}
