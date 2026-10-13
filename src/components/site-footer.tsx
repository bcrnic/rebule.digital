import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, FOUNDER, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="px-5 py-10 lg:px-10">
      <div className="glass mx-auto flex max-w-[90rem] flex-col gap-7 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold uppercase">
            Rebule<span className="text-primary">.</span> Digital
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Web studio za male firme.</p>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Sva prava zadržana.
          </p>
          <Link to="/privatnost" className="underline transition-colors hover:text-primary">
            Politika privatnosti
          </Link>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" aria-label="LinkedIn profil Bojana Crnića" asChild>
            <a href={FOUNDER.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin aria-hidden="true" />
            </a>
          </Button>
          {CONTACT.instagram && (
            <Button variant="ghost" size="icon" aria-label="Instagram profil" asChild>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer noopener">
                <Instagram aria-hidden="true" />
              </a>
            </Button>
          )}
          <Button variant="ghost" size="icon" aria-label="Pošaljite email" asChild>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
