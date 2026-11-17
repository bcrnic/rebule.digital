import { useEffect, useRef, useState } from "react";
import portrait1 from "@/assets/bojan-crnic.webp";
import portrait2 from "@/assets/bojan-crnic-2.webp";
import portrait3 from "@/assets/bojan-crnic-3.webp";
import { isMotionPaused } from "@/lib/motion-pause";

const PHOTOS = [portrait1, portrait2, portrait3];
const FLIP_MS = 420;

/**
 * Portret u hero sekciji: u mirovanju crno-beo, a na hover dobije boju, blago se
 * približi i "lista" kroz tri fotografije kao stop-motion. Natpis se zarola u drugi.
 * Na telefonu isto radi na dodir (dodir ponovo vraća crno-belo).
 *
 * Prva slika je LCP element (eager, fetchPriority high); ostale se učitavaju lenjo.
 * Uz smanjeno kretanje ili pauzirane animacije nema listanja, samo boja.
 */
export function PortraitFlip({
  alt,
  label,
  colorLabel,
}: {
  alt: string;
  label: string;
  colorLabel: string;
}) {
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
          className={`absolute inset-0 h-full w-full object-cover object-top transition-[filter,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          } ${active ? "scale-[1.04] contrast-100 grayscale-0" : "scale-100 grayscale contrast-[1.06]"}`}
        />
      ))}
      <figcaption className="label-mono absolute bottom-1.5 left-1.5 z-10 grid overflow-hidden whitespace-nowrap bg-foreground px-1.5 py-0.5 text-[0.5rem] text-background sm:bottom-2 sm:left-2 sm:text-[0.625rem]">
        <span
          className={`[grid-area:1/1] transition-transform duration-500 motion-reduce:transition-none ${active ? "-translate-y-[120%]" : ""}`}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className={`[grid-area:1/1] transition-transform duration-500 motion-reduce:transition-none ${active ? "" : "translate-y-[120%]"}`}
        >
          {colorLabel}
        </span>
      </figcaption>
    </figure>
  );
}
