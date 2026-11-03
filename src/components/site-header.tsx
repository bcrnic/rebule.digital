import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
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
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="glass mx-auto flex h-16 max-w-[86rem] items-center justify-between rounded-full px-4 sm:h-[4.25rem] sm:px-6">
        <Link
          to={home}
          className="font-display text-base font-extrabold uppercase tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label={t.homeAria}
        >
          Rebule<span className="text-primary">.</span>&nbsp;Digital
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label={t.mainNav}>
          {navItems.map(([label, anchor]) => (
            <Link
              key={anchor}
              to={home}
              hash={anchor}
              className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeSwitch isDark={isDark} onToggle={toggleTheme} />

          <Button asChild className="hidden rounded-full sm:inline-flex" size="sm">
            <Link to={home} hash={ids.contact}>
              {t.cta}
            </Link>
          </Button>

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
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass mx-auto mt-2 max-w-[86rem] overflow-hidden rounded-3xl p-5 shadow-2xl xl:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label={t.mobileNav}>
              {navItems.map(([label, anchor]) => (
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
