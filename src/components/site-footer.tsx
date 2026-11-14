import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { landingPages } from "@/content/landing";
import { useLocale, useUi } from "@/lib/i18n";
import { CONTACT, FOUNDER, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  const locale = useLocale();
  const t = useUi().footer;
  return (
    <footer className="px-5 py-10 lg:px-10">
      {/* Stranice usluga postoje samo na srpskom. */}
      {locale === "sr" && (
        <nav aria-label={t.servicesNav} className="mx-auto mb-6 max-w-[90rem] px-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
      <div className="glass mx-auto flex max-w-[90rem] flex-col gap-7 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-foreground">
            <BrandLogo className="h-12 w-auto" />
            <span className="sr-only">{SITE_NAME}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {t.rights}
          </p>
          <Link
            to={locale === "en" ? "/en/privacy" : "/privatnost"}
            className="underline transition-colors hover:text-primary"
          >
            {t.privacy}
          </Link>
        </div>
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
      </div>
    </footer>
  );
}
