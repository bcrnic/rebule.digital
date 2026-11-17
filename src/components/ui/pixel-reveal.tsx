import { useEffect, useRef, useState, type RefObject } from "react";

const STEPS = [6, 12, 24, 48, 96];
const STEP_MS = 90;

/**
 * Pikselizovano otkrivanje slike: preko slike stoji mali canvas koji se crta u sve
 * većoj rezoluciji (krupni pikseli -> oštro), pa se na kraju ugasi. Kreće kad slika
 * uđe u ekran. Slika ispod je obična <img>, pa bez JS-a, uz smanjeno kretanje ili
 * kad je slika već vidljiva pri učitavanju stranice efekta nema i slika se odmah vidi.
 */
export function PixelReveal({ imgRef }: { imgRef: RefObject<HTMLImageElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  // Uključi efekat samo ako ima smisla (posle hidracije, da HTML sa servera ostane čist).
  useEffect(() => {
    const img = imgRef.current;
    if (!img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = img.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth;
    if (!inView) setActive(true);
  }, [imgRef]);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!active || !img || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let timer = 0;
    let started = false;
    const ratio = (img.naturalHeight || 10) / (img.naturalWidth || 16);
    const draw = (step: number | undefined) => {
      const width = step ?? 96;
      canvas.width = width;
      canvas.height = Math.max(1, Math.round(width * ratio));
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    const ready = () => img.complete && img.naturalWidth > 0;

    // Dok je slika van ekrana, pokaži najkrupnije piksele.
    const prime = () => ready() && !started && draw(STEPS[0]);
    prime();
    img.addEventListener("load", prime);

    const play = () => {
      if (started || !ready()) return;
      started = true;
      let i = 0;
      const next = () => {
        i += 1;
        if (i < STEPS.length) {
          draw(STEPS[i]);
          timer = window.setTimeout(next, STEP_MS);
        } else setDone(true);
      };
      draw(STEPS[0]);
      timer = window.setTimeout(next, STEP_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        if (ready()) {
          play();
          observer.disconnect();
        } else {
          img.addEventListener("load", play, { once: true });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(img);

    return () => {
      observer.disconnect();
      img.removeEventListener("load", prime);
      img.removeEventListener("load", play);
      window.clearTimeout(timer);
    };
  }, [active, imgRef]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full bg-muted [image-rendering:pixelated] transition-opacity duration-300 ${done ? "opacity-0" : "opacity-100"}`}
    />
  );
}
