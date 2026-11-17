import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPRSTUVZ0123456789#%&*+=/<>";
const DURATION = 420;

/**
 * Tekst koji se na hover "promeša": slova se na trenutak zamene nasumičnim znakovima
 * i slože nazad s leva na desno. Namenjen mono labelama (širina se ne menja).
 *
 * Okidač je najbliži roditelj sa `data-shuffle-root`, ili link ili dugme u kome je tekst.
 * Radi samo sa mišem i kad korisnik nije uključio smanjeno kretanje; čitač ekrana uvek
 * čita pravi tekst iz skrivenog sr-only elementa.
 */
export function ShuffleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const root = el?.closest<HTMLElement>("[data-shuffle-root], a, button");
    if (!el || !root) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    const run = () => {
      if (!canHover.matches || reduce.matches) return;
      cancelAnimationFrame(frame);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1);
        const settled = Math.floor(progress * text.length);
        el.textContent = [...text]
          .map((ch, i) =>
            i < settled || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join("");
        if (progress < 1) frame = requestAnimationFrame(tick);
        else el.textContent = text;
      };
      frame = requestAnimationFrame(tick);
    };

    root.addEventListener("pointerenter", run);
    return () => {
      root.removeEventListener("pointerenter", run);
      cancelAnimationFrame(frame);
      el.textContent = text;
    };
  }, [text]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
