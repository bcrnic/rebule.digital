import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { getProject, projectSrcSet, type Project } from "@/lib/projects";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";

const featured = getProject("modni-frizer-vojkan") as Project;
const secondary = getProject("remielectric") as Project;

// Adresa u "address bar"-u: pravi domen klijenta, a za sajtove na deljenom hostingu naziv projekta.
function addressLabel(project: Project) {
  const host = project.url ? new URL(project.url).hostname.replace(/^www\./, "") : "";
  return host && !/\.(github\.io|netlify\.app)$/.test(host) ? host : project.title;
}

function BrowserWindow({
  project,
  priority = false,
  className = "",
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  const t = useUi().hero;
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border/70 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="truncate rounded-full bg-muted px-3 py-0.5 text-[11px] font-medium text-muted-foreground">
          {addressLabel(project)}
        </span>
      </div>
      <img
        src={project.image}
        srcSet={projectSrcSet(project)}
        sizes="(min-width: 1024px) 40vw, 92vw"
        alt={t.siteAlt(project.title)}
        width={1440}
        height={900}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}

export function Hero() {
  const locale = useLocale();
  const t = useUi().hero;
  const ids = useSectionIds();
  const projectRoute = locale === "en" ? "/en/project/$id" : "/projekat/$id";
  return (
    <section id="home" className="relative flex min-h-[94svh] items-center overflow-hidden pt-28">
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 py-10 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Bez ulazne animacije: naslov je najveći element (LCP) i mora biti vidljiv odmah,
              a ne tek kad se učita JavaScript. */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              {/* Znak i moto brenda: buntovnik na strani malih. */}
              <p className="flex items-center gap-4 text-primary">
                <BrandLogo className="hidden h-16 w-auto sm:block" />
                <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {t.motto}
                </span>
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {t.titleStart}
                <span className="text-primary">{t.titleAccent}</span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {t.lede}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-2xl shadow-[0_12px_32px_-12px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
                  asChild
                >
                  <a href={`#${ids.contact}`}>
                    {t.bookCall} <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="gap-2 rounded-2xl border-border bg-card hover:bg-card/80"
                  asChild
                >
                  <a
                    href={locale === "en" ? whatsappLink(WHATSAPP_MESSAGE_EN) : whatsappLink()}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiWhatsapp className="size-4 text-[#25D366]" aria-hidden="true" /> {t.whatsapp}
                  </a>
                </Button>
              </div>
              <a
                href={`#${ids.portfolio}`}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {t.viewWork} <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative pb-10 sm:pb-6 sm:pr-10 sm:pt-10 lg:pt-14">
              {/* Svaki prozor vodi na svoju studiju slučaja. */}
              <Link
                to={projectRoute}
                params={{ id: secondary.id }}
                aria-label={t.viewProjectAria(secondary.title)}
                className="absolute right-0 top-0 hidden w-[72%] rotate-3 opacity-90 transition-transform duration-500 hover:rotate-[4deg] sm:block"
              >
                <BrowserWindow project={secondary} />
              </Link>
              <Link
                to={projectRoute}
                params={{ id: featured.id }}
                aria-label={t.viewProjectAria(featured.title)}
                className="group relative block"
              >
                <BrowserWindow
                  project={featured}
                  priority
                  className="relative w-full transition-transform duration-500 group-hover:-translate-y-1 sm:w-[88%]"
                />
                <div className="absolute bottom-0 left-4 flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-2.5 shadow-xl sm:-bottom-2 sm:-left-6 sm:px-5 sm:py-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {t.latestProject}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {featured.title}
                      <span className="hidden sm:inline">{t.featuredNote}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
