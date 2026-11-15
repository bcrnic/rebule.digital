import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { landingPages } from "@/content/landing";
import { useLocale, useUi } from "@/lib/i18n";
import { CONTACT, FOUNDER, SITE_NAME } from "@/lib/site";

/** Centriran footer: znak i slogan, stranice usluga, mreže, pa autorska prava u dnu. */
export function SiteFooter() {
  const locale = useLocale();
  const t = useUi().footer;
  return (
    <footer className="px-5 py-10 lg:px-10">
      <div className="glass mx-auto flex max-w-[90rem] flex-col items-center gap-8 px-6 py-10 text-center sm:px-10">
        <div className="flex flex-col items-center gap-3">
          <Link
            to={locale === "en" ? "/en" : "/"}
            className="text-primary transition-opacity hover:opacity-80"
          >
            <BrandLogo className="h-16 w-auto" />
            <span className="sr-only">{SITE_NAME}</span>
          </Link>
          <p className="text-sm text-muted-foreground">{t.tagline}</p>
        </div>

        {/* Stranice usluga postoje samo na srpskom. */}
        {locale === "sr" && (
          <nav aria-label={t.servicesNav}>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {landingPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="transition-colors hover:text-primary">
                    {page.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" aria-label={t.linkedinAria} asChild>
            <a href={FOUNDER.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin aria-hidden="true" />
            </a>
          </Button>
          {CONTACT.instagram && (
            <Button variant="ghost" size="icon" aria-label={t.instagramAria} asChild>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer noopener">
                <Instagram aria-hidden="true" />
              </a>
            </Button>
          )}
          <Button variant="ghost" size="icon" aria-label={t.emailAria} asChild>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="flex w-full flex-col items-center gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-4">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {t.rights}
          </p>
          <span className="hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <Link
            to={locale === "en" ? "/en/privacy" : "/privatnost"}
            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
