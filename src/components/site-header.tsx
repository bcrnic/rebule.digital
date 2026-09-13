import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Početna", "home"],
  ["Usluge", "usluge"],
  ["Portfolio", "portfolio"],
  ["Utisci", "utisci"],
  ["O meni", "o-meni"],
  ["FAQ", "faq"],
  ["Kontakt", "kontakt"],
] as const;

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Read current theme from documentElement (initialized by head script)
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("tema", nextDark ? "dark" : "light");
  };

  const hrefFor = (anchor: string) => (compact ? `/#${anchor}` : `#${anchor}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="glass mx-auto flex h-16 max-w-[86rem] items-center justify-between rounded-full px-4 sm:h-[4.25rem] sm:px-6">
        <Link
          to="/"
          className="font-display text-base font-extrabold uppercase tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label="Početna"
        >
          Rebule<span className="text-primary">.</span>&nbsp;Digital
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Glavna navigacija">
          {navItems.map(([label, anchor]) => (
            <a
              key={anchor}
              href={hrefFor(anchor)}
              className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label={isDark ? "Uključi svetlu temu" : "Uključi tamnu temu"}
          >
            {isDark ? <Sun className="size-4 text-primary" /> : <Moon className="size-4" />}
          </Button>

          <Button asChild className="hidden rounded-full sm:inline-flex" size="sm">
            <a href={hrefFor("kontakt")}>Zakaži konsultacije</a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass mx-auto mt-2 max-w-[86rem] overflow-hidden rounded-3xl p-5 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobilna navigacija">
              {navItems.map(([label, anchor]) => (
                <a
                  key={anchor}
                  href={hrefFor(anchor)}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-card/70 hover:text-primary"
                >
                  <span>{label}</span>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </a>
              ))}
              <div className="mt-3 border-t border-border pt-3">
                <Button asChild className="w-full rounded-xl" size="lg">
                  <a href={hrefFor("kontakt")} onClick={() => setOpen(false)}>
                    Zakaži konsultacije <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
