import { Pause, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { SiWhatsapp } from "react-icons/si";
import { RollCtaInner } from "@/components/ui/roll-cta";
import { rollCtaClass } from "@/components/ui/roll-cta-class";
import { WordRotator } from "@/components/ui/word-rotator";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { PortraitFlip } from "./portrait-flip";
import { isMotionPaused, setMotionPaused, useMotionPaused } from "@/lib/motion-pause";
import { WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";

/**
 * Traka sa uslugama: niz se ponavlja dvaput da animacija može da se vrti bez skoka.
 * Na skrol se ubrza, okrene smer zajedno sa skrolom i malo iskosi, pa se smiri.
 * Dugme na kraju trake pauzira sve animacije koje se same kreću (WCAG 2.2.2).
 */
function Marquee() {
  const t = useUi().hero;
  const items = [...t.marquee, ...t.marquee];
  const trackRef = useRef<HTMLDivElement>(null);
  const skewRef = useRef<HTMLDivElement>(null);
  const paused = useMotionPaused();

  useEffect(() => {
    const track = trackRef.current;
    const skew = skewRef.current;
    const animation = track?.getAnimations()[0];
    if (!track || !skew || !animation) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Pomeri početak daleko unapred da i vožnja unazad ima kuda (inače stane na nuli).
    const cycle = Number(animation.effect?.getComputedTiming().duration) || 38000;
    animation.currentTime = cycle * 1000;

    let last = window.scrollY;
    let dir = 1;
    let boost = 0;
    let rate = 1;
    let tilt = 0;
    let tiltTarget = 0;
    let frame = 0;

    const tick = () => {
      boost *= 0.92;
      tiltTarget *= 0.85;
      rate += (dir * (1 + boost) - rate) * 0.12;
      tilt += (tiltTarget - tilt) * 0.2;
      animation.playbackRate = rate;
      skew.style.transform = `skewX(${tilt.toFixed(2)}deg)`;
      const settled = boost < 0.01 && Math.abs(tilt) < 0.05 && Math.abs(rate - dir) < 0.01;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const d = window.scrollY - last;
      last = window.scrollY;
      if (!d || isMotionPaused()) return;
      dir = Math.sign(d);
      boost = Math.max(boost, Math.min(Math.abs(d) / 18, 4));
      tiltTarget = -Math.max(-6, Math.min(6, d * 0.25));
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden border-y border-foreground bg-foreground py-3 text-background sm:py-4"
      role="region"
      aria-label={t.marqueeAria}
    >
      <div ref={skewRef} className="will-change-transform">
        <div ref={trackRef} className="marquee-track flex w-max items-center" aria-hidden="true">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="whitespace-nowrap px-5 font-poster text-2xl uppercase leading-none tracking-normal sm:px-7 sm:text-4xl">
                {item}
              </span>
              <span className="font-poster text-2xl leading-none text-[var(--logo-gold)] sm:text-4xl">
                ✱
              </span>
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setMotionPaused(!paused)}
        aria-pressed={paused}
        aria-label={paused ? t.playMotion : t.pauseMotion}
        title={paused ? t.playMotion : t.pauseMotion}
        className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-background/30 bg-foreground text-background transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--logo-gold)] sm:right-4 sm:size-9"
      >
        {paused ? (
          <Play className="size-3.5" aria-hidden="true" />
        ) : (
          <Pause className="size-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export function Hero() {
  const locale = useLocale();
  const t = useUi().hero;
  const ids = useSectionIds();
  const [quote] = getHomeContent(locale).testimonials;
  const [qOpen, qClose] = locale === "en" ? ["“", "”"] : ["„", "“"];

  return (
    <>
      <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto w-full max-w-[90rem] px-5 pb-12 lg:px-10 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Levo: plakatni naslov. Bez ulazne animacije jer je to LCP element. */}
            <div className="flex flex-col lg:col-span-7">
              <p className="label-mono inline-flex w-fit items-center gap-2 border border-border bg-card px-3 py-1.5 text-muted-foreground">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-bright opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary-bright" />
                </span>
                {t.available}
              </p>

              <h1 className="mt-8">
                <span className="block font-poster text-[clamp(3.75rem,9.2vw,8.75rem)] uppercase leading-[0.86] tracking-[-0.01em] text-foreground">
                  {t.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <WordRotator words={[t.titleAccent, ...t.titleRotate]} className="text-primary" />
                </span>
                <span className="label-mono mt-6 flex items-center gap-2 text-muted-foreground">
                  <span className="size-1.5 bg-foreground" aria-hidden="true" />
                  {t.seoLine}
                </span>
              </h1>
            </div>

            {/* Desno: lice studija, kratko obećanje, poziv na razgovor i utisak klijenta. */}
            <div className="flex flex-col justify-end gap-8 lg:col-span-5">
              <div className="grid grid-cols-[minmax(0,9rem)_1fr] gap-5 sm:grid-cols-[minmax(0,13rem)_1fr]">
                <PortraitFlip alt={t.portraitAlt} label={t.portraitLabel} />
                <div className="flex flex-col justify-between gap-5">
                  <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                    {t.lede}
                  </p>
                  <div className="flex flex-col gap-3">
                    <a href={`#${ids.contact}`} className={rollCtaClass()}>
                      <RollCtaInner label={t.bookCall} hoverLabel={t.bookCallHover} />
                    </a>
                    <a
                      href={locale === "en" ? whatsappLink(WHATSAPP_MESSAGE_EN) : whatsappLink()}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <SiWhatsapp className="size-4 text-[#25D366]" aria-hidden="true" />
                      <span className="link-wipe">{t.whatsapp}</span>
                    </a>
                  </div>
                </div>
              </div>

              {quote && (
                <figure className="border-t border-foreground pt-4">
                  <p className="label-mono mb-2 text-muted-foreground">{t.quoteLabel}</p>
                  <blockquote className="text-base font-medium leading-snug text-foreground">
                    {qOpen}
                    {quote.text}
                    {qClose}
                  </blockquote>
                  <figcaption className="label-mono mt-3 text-muted-foreground">
                    {quote.name} · {quote.role}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}
