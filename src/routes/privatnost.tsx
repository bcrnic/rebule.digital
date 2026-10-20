import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seo } from "@/lib/seo";
import { CONTACT, FOUNDER, SITE_NAME } from "@/lib/site";

const LAST_UPDATED = "20. oktobar 2026.";

export const Route = createFileRoute("/privatnost")({
  head: () =>
    seo({
      title: `Politika privatnosti | ${SITE_NAME}`,
      description: `Kako ${SITE_NAME} prikuplja, koristi i čuva podatke koje pošaljete preko kontakt forme.`,
      path: "/privatnost",
    }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  const email = (
    <a className="font-medium text-primary underline" href={`mailto:${CONTACT.email}`}>
      {CONTACT.email}
    </a>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-32 lg:px-10">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 -ml-3 gap-2 text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="size-4" /> Nazad na početnu
          </Link>
        </Button>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Politika privatnosti
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Poslednja izmena: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-12">
          <Section title="Ko obrađuje podatke">
            <p>
              Rukovalac podacima je {FOUNDER.name}, {SITE_NAME}, {CONTACT.city}, Srbija. Za sva
              pitanja o vašim podacima pišite na {email}.
            </p>
          </Section>

          <Section title="Koje podatke prikupljam">
            <p>Kada pošaljete upit preko kontakt forme, prikupljam:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>ime i prezime,</li>
              <li>email adresu,</li>
              <li>broj telefona, ako ga unesete,</li>
              <li>tip projekta i poruku koju napišete.</li>
            </ul>
            <p>
              Ako me kontaktirate mejlom, telefonom ili preko WhatsApp-a, dobijam podatke koje mi
              tom prilikom pošaljete.
            </p>
          </Section>

          <Section title="Zašto ih koristim">
            <p>
              Podatke koristim isključivo da bih odgovorio na vaš upit, pripremio ponudu i dogovorio
              saradnju. Ne šaljem reklamne poruke, ne prodajem podatke i ne delim ih sa trećim
              licima radi marketinga.
            </p>
            <p>
              Osnov za obradu je vaš pristanak, koji dajete slanjem upita, i preduzimanje radnji na
              vaš zahtev pre zaključenja ugovora, u skladu sa Zakonom o zaštiti podataka o ličnosti.
            </p>
          </Section>

          <Section title="Gde se podaci čuvaju">
            <p>
              Sajt hostuje Netlify, Inc. (SAD). Upiti iz kontakt forme čuvaju se u servisu Netlify
              Forms, a obaveštenje o upitu stiže mi na email nalog kod Google-a (Gmail). Oba servisa
              primenjuju standardne mere zaštite podataka, uključujući i prenos podataka van Srbije.
            </p>
            <p>
              Podatke čuvam dok traje komunikacija i saradnja. Ako do saradnje ne dođe, brišem ih
              najkasnije 12 meseci nakon poslednjeg kontakta.
            </p>
          </Section>

          <Section title="Kolačići i spoljni servisi">
            <p>
              Sajt ne koristi kolačiće za analitiku ni oglašavanje. U vašem pregledaču čuva se samo
              izbor svetle ili tamne teme.
            </p>
            <p>
              Fontovi se učitavaju sa samog sajta, bez spoljnih servisa. Klikom na dugme za WhatsApp
              prelazite na WhatsApp, gde važe njihova pravila privatnosti.
            </p>
          </Section>

          <Section title="Vaša prava">
            <p>
              Imate pravo da zatražite uvid u svoje podatke, njihovu ispravku ili brisanje, da
              ograničite obradu i da povučete pristanak u bilo kom trenutku. Dovoljno je da mi
              pišete na {email}.
            </p>
            <p>
              Ako smatrate da su vaši podaci obrađeni suprotno zakonu, možete podneti pritužbu
              Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti (
              <a
                className="font-medium text-primary underline"
                href="https://www.poverenik.rs"
                target="_blank"
                rel="noreferrer noopener"
              >
                poverenik.rs
              </a>
              ).
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
