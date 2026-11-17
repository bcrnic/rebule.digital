import { useEffect, useRef, useState } from "react";
import portrait1 from "@/assets/bojan-crnic.webp";
import portrait2 from "@/assets/bojan-crnic-2.webp";
import portrait3 from "@/assets/bojan-crnic-3.webp";
import { isMotionPaused } from "@/lib/motion-pause";

const PHOTOS = [portrait1, portrait2, portrait3];
// Sporije listanje sa mekim pretapanjem, da prelaz ne deluje kao skok.
const FLIP_MS = 1100;

/**
 * Portret u hero sekciji: na hover se blago približi i "lista" kroz tri fotografije
 * kao stop-motion, a kad miš ode vrati se na prvu. Na telefonu isto radi na dodir
 * (drugi dodir zaustavlja).
 *
 * Prva slika je LCP element (eager, fetchPriority high); ostale se učitavaju lenjo.
 * Uz smanjeno kretanje ili pauzirane animacije nema listanja.
 */
export function PortraitFlip({ alt, label }: { alt: string; label: string }) {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [canHover, setCanHover] = useState(true);
  const timer = useRef(0);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    return () => window.clearInterval(timer.current);
  }, []);

  const start = () => {
    setActive(true);
    window.clearInterval(timer.current);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || isMotionPaused();
    if (still) return;
    timer.current = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % PHOTOS.length);
    }, FLIP_MS);
  };
  const stop = () => {
    window.clearInterval(timer.current);
    setActive(false);
    setIndex(0);
  };

  return (
    <figure
      className="relative aspect-[4/5] self-start overflow-hidden rounded-[var(--radius)] bg-muted"
      onMouseEnter={canHover ? start : undefined}
      onMouseLeave={canHover ? stop : undefined}
      onClick={canHover ? undefined : () => (active ? stop() : start())}
    >
      {PHOTOS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          width={724}
          height={1086}
          decoding="async"
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 h-full w-full object-cover object-top [transition:scale_700ms_cubic-bezier(0.22,1,0.36,1),opacity_300ms_ease-in-out] motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          } ${active ? "scale-[1.04]" : "scale-100"}`}
        />
      ))}
      <figcaption className="label-mono absolute bottom-1.5 left-1.5 z-10 whitespace-nowrap bg-foreground px-1.5 py-0.5 text-[0.5rem] text-background sm:bottom-2 sm:left-2 sm:text-[0.625rem]">
        {label}
      </figcaption>
    </figure>
  );
}
