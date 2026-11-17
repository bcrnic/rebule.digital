import { SiWhatsapp } from "react-icons/si";
import portrait from "@/assets/bojan-crnic.webp";
import { RollCtaInner } from "@/components/ui/roll-cta";
import { rollCtaClass } from "@/components/ui/roll-cta-class";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";

/** Traka sa uslugama: niz se ponavlja dvaput da animacija može da se vrti bez skoka. */
function Marquee() {
  const t = useUi().hero;
  const items = [...t.marquee, ...t.marquee];
  return (
    <div
      className="relative overflow-hidden border-y border-foreground bg-foreground py-3 text-background sm:py-4"
      role="region"
      aria-label={t.marqueeAria}
    >
      <div className="marquee-track flex w-max items-center" aria-hidden="true">
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
                  <span className="block text-primary">{t.titleAccent}</span>
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
                <figure className="relative self-start">
                  <img
                    src={portrait}
                    alt={t.portraitAlt}
                    width={724}
                    height={1086}
                    decoding="async"
                    fetchPriority="high"
                    className="aspect-[4/5] w-full rounded-[var(--radius)] object-cover object-top"
                  />
                  <figcaption className="label-mono absolute bottom-1.5 left-1.5 whitespace-nowrap bg-foreground px-1.5 py-0.5 text-[0.5rem] text-background sm:bottom-2 sm:left-2 sm:text-[0.625rem]">
                    {t.portraitLabel}
                  </figcaption>
                </figure>
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
                      className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                    >
                      <SiWhatsapp className="size-4 text-[#25D366]" aria-hidden="true" />
                      {t.whatsapp}
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
