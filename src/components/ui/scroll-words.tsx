import { useEffect, useRef } from "react";

/**
 * Pasus koji se "boji" reč po reč dok skroluješ: reči su na početku blede, a kako
 * pasus prolazi kroz ekran, prvih N reči dobija punu boju. Klase se menjaju direktno
 * na elementima (bez React stanja), pa skrol ostaje gladak.
 *
 * Sa servera i uz smanjeno kretanje sve reči su pune boje; efekat se uključi tek u
 * browseru. Tekst je ceo u HTML-u, pa ga čitači ekrana i pretraživači vide normalno.
 */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = [...el.querySelectorAll<HTMLSpanElement>("[data-w]")];
    el.dataset["scrollWords"] = "on";

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 kad vrh pasusa uđe u donjih 15% ekrana, 1 kad dno pasusa stigne do sredine.
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35);
      const lit = Math.round(Math.min(Math.max(progress, 0), 1) * spans.length);
      spans.forEach((span, i) => span.classList.toggle("on", i < lit));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      delete el.dataset["scrollWords"];
    };
  }, [text]);

  return (
    <p ref={ref} className={`scroll-words ${className}`}>
      {words.map((word, i) => (
        <span key={i}>
          <span data-w="">{word}</span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </p>
  );
}
