import { ArrowRight } from "lucide-react";
import { rollEase as ease, rollSizes as sizes, type RollSize } from "./roll-cta-class";

/*
 * CTA dugme sa "rolanjem": na hover (ili fokus tastaturom) se dugme s leva puni tamnom
 * bojom, krug sa strelicom klizi na desni kraj, a tekst odlazi gore i odozdo dolazi drugi.
 * Širina se ne menja jer se oba teksta slažu u istu ćeliju grida, a levi i desni padding
 * samo zamene mesta. Na dodir (telefon) i uz smanjeno kretanje ostaje obično dugme.
 */

/** Unutrašnjost dugmeta: pozadina koja se puni, krug sa strelicom i dva teksta. */
export function RollCtaInner({
  label,
  hoverLabel,
  size = "md",
}: {
  label: string;
  hoverLabel: string;
  size?: RollSize;
}) {
  const move = `transition-transform duration-500 ${ease} motion-reduce:transition-none`;
  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 origin-left scale-x-0 bg-foreground ${move} group-hover/roll:scale-x-100 group-focus-visible/roll:scale-x-100`}
      />
      <span
        aria-hidden="true"
        className={`absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground text-primary transition-[left,background-color,color] duration-500 ${ease} group-hover/roll:bg-background group-hover/roll:text-foreground group-focus-visible/roll:bg-background group-focus-visible/roll:text-foreground motion-reduce:transition-none ${sizes[size].knob}`}
      >
        <ArrowRight className={sizes[size].icon} />
      </span>
      <span className="relative grid overflow-hidden py-0.5">
        <span
          className={`whitespace-nowrap [grid-area:1/1] ${move} group-hover/roll:-translate-y-[120%] group-focus-visible/roll:-translate-y-[120%]`}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className={`whitespace-nowrap [grid-area:1/1] translate-y-[120%] ${move} group-hover/roll:translate-y-0 group-focus-visible/roll:translate-y-0`}
        >
          {hoverLabel}
        </span>
      </span>
    </>
  );
}
