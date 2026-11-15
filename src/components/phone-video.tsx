import { useEffect, useRef, useState } from "react";

type PhoneVideoProps = {
  src: string;
  poster: string;
  /** Opis za čitače ekrana (video je bez zvuka i bez teksta koji se mora pročitati). */
  label: string;
  /** Odnos širine i visine videa, npr. "540 / 960". */
  aspect: string;
  className?: string;
};

/**
 * Kratak video bez zvuka u okviru telefona. Fajl se ne učitava dok video ne uđe u ekran,
 * pušta se samo dok je vidljiv, a uz "smanji pokrete" ostaje slika sa dugmetom za puštanje.
 */
export function PhoneVideo({ src, poster, label, aspect, className = "" }: PhoneVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduce);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          // Izvor se postavlja tek kad je video na ekranu, pa se fajl ne skida unapred.
          if (!video.getAttribute("src")) video.src = src;
          if (!reduce) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      className={`relative rounded-[2.4rem] border border-foreground/10 bg-neutral-950 p-2 shadow-2xl ${className}`}
    >
      <div
        className="absolute left-1/2 top-3.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-neutral-950"
        aria-hidden="true"
      />
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        controls={reducedMotion}
        aria-label={label}
        style={{ aspectRatio: aspect }}
        className="block w-full rounded-[1.9rem] bg-neutral-900 object-cover"
      />
    </div>
  );
}
