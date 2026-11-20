import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { RollCtaInner } from "@/components/ui/roll-cta";
import { rollCtaClass } from "@/components/ui/roll-cta-class";
import { ShuffleText } from "@/components/ui/shuffle-text";
import { alternatePath, useLocale, useSectionIds, useUi } from "@/lib/i18n";

const navKeys = [
  "home",
  "services",
  "pricing",
  "portfolio",
  "testimonials",
  "about",
  "faq",
  "contact",
] as const;

/** Link ka istoj stranici na drugom jeziku (SR na engleskoj verziji, EN na srpskoj). */
function LanguageSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const t = useUi().header;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const target = locale === "en" ? "sr" : "en";
  return (
    <a
      href={alternatePath(pathname, target)}
      hrefLang={target === "en" ? "en" : "sr"}
      lang={target === "en" ? "en" : "sr"}
      aria-label={t.switchAria}
      className={`inline-flex h-9 items-center justify-center rounded-full border border-border px-3 text-xs font-bold tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      {t.switchLabel}
    </a>
  );
}

export function SiteHeader() {
  const locale = useLocale();
  const t = useUi().header;
  const ids = useSectionIds();
  const home = locale === "en" ? "/en" : "/";
  const navItems = navKeys.map((key) => [t.nav[key], ids[key]] as const);
  // Na telefonu kraći meni: bez "Početna" (logo vodi na vrh) i bez "Utisci".
  const mobileNavItems = navKeys
    .filter((key) => key !== "home" && key !== "testimonials")
    .map((key) => [t.nav[key], ids[key]] as const);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Posle 40 px skrola zaglavlje postaje niže (CSS tranzicija radi ostalo).
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCompact(window.scrollY > 40);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Dok je meni otvoren, strana iza njega se ne skroluje.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      window.localStorage.setItem("tema", nextDark ? "dark" : "light");
    } catch {
      // Privatni režim ili blokiran storage: tema radi, samo se ne pamti.
    }
  };

  return (
    <header
      data-compact={compact || undefined}
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-300 sm:px-5 motion-reduce:transition-none ${compact ? "pt-2" : "pt-3 sm:pt-4"}`}
    >
      <div
        className={`glass mx-auto flex items-center justify-between rounded-full px-4 transition-[height,max-width] duration-300 ease-out sm:px-6 motion-reduce:transition-none ${
          compact ? "h-14 max-w-[80rem]" : "h-16 max-w-[86rem] sm:h-[4.25rem]"
        }`}
      >
        <Link
          to={home}
          className="text-primary transition-opacity hover:opacity-80"
          aria-label={t.homeAria}
        >
          <BrandLogo
            className={`w-auto transition-[height] duration-300 motion-reduce:transition-none ${compact ? "h-10" : "h-12 sm:h-14"}`}
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label={t.mainNav}>
          {navItems.map(([label, anchor]) => (
            <Link
              key={anchor}
              to={home}
              hash={anchor}
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              <ShuffleText text={label} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeSwitch isDark={isDark} onToggle={toggleTheme} />

          <Link to={home} hash={ids.contact} className={rollCtaClass("sm", "max-sm:hidden")}>
            <RollCtaInner label={t.cta} hoverLabel={t.ctaHover} size="sm" />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          // Zatamnjena podloga iza menija: sadržaj strane se ne vidi kroz stavke, a dodir van menija ga zatvara.
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 -z-10 bg-background/85 backdrop-blur-sm xl:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
        {open && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-[86rem] overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-2xl xl:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label={t.mobileNav}>
              {mobileNavItems.map(([label, anchor]) => (
                <Link
                  key={anchor}
                  to={home}
                  hash={anchor}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-card/70 hover:text-primary"
                >
                  <span>{label}</span>
                  <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
                </Link>
              ))}
              <div className="mt-3 border-t border-border pt-3">
                <Button asChild className="w-full rounded-xl" size="lg">
                  <Link to={home} hash={ids.contact} onClick={() => setOpen(false)}>
                    {t.cta} <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
