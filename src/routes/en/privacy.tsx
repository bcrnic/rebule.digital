import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { seo } from "@/lib/seo";
import { CONTACT, FOUNDER, SITE_NAME } from "@/lib/site";

// Engleski prevod stranice /privatnost; menjati ih zajedno.
const LAST_UPDATED = "November 3, 2026";

export const Route = createFileRoute("/en/privacy")({
  head: () =>
    seo({
      title: `Privacy policy | ${SITE_NAME}`,
      description: `How ${SITE_NAME} collects, uses and stores the data you send through the contact form.`,
      path: "/en/privacy",
      locale: "en",
      alternates: { sr: "/privatnost", en: "/en/privacy" },
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
          <Link to="/en">
            <ArrowLeft className="size-4" /> Back to the homepage
          </Link>
        </Button>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-12">
          <Section title="Who processes your data">
            <p>
              The data controller is {FOUNDER.name}, {SITE_NAME}, {CONTACT.city}, Serbia. For any
              questions about your data, write to {email}.
            </p>
          </Section>

          <Section title="What data I collect">
            <p>When you send an inquiry through the contact form, I collect:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>your full name,</li>
              <li>your email address,</li>
              <li>your phone number, if you enter it,</li>
              <li>the project type and the message you write.</li>
            </ul>
            <p>
              If you contact me by email, phone or WhatsApp, I receive the data you send me in that
              message.
            </p>
          </Section>

          <Section title="Why I use it">
            <p>
              I use your data only to reply to your inquiry, prepare a quote and agree on our
              collaboration. I do not send marketing messages, sell data or share it with third
              parties for marketing.
            </p>
            <p>
              The legal basis for processing is your consent, which you give by sending the inquiry,
              and taking steps at your request before entering into a contract, in line with the
              Serbian Law on Personal Data Protection and, where it applies, the GDPR.
            </p>
          </Section>

          <Section title="Where the data is stored">
            <p>
              The website is hosted by Netlify, Inc. (USA). Inquiries from the contact form are
              stored in Netlify Forms, and the notification about an inquiry arrives in my Google
              email account (Gmail). Both services apply standard data protection measures,
              including for transfers of data outside Serbia.
            </p>
            <p>
              I keep the data for as long as our communication and collaboration last. If we do not
              end up working together, I delete it no later than 12 months after our last contact.
            </p>
          </Section>

          <Section title="Cookies and external services">
            <p>
              The website does not use cookies for analytics or advertising. Your browser only
              stores your choice of light or dark theme.
            </p>
            <p>
              Fonts are loaded from the website itself, without external services. If you click the
              WhatsApp button, you move to WhatsApp, where their privacy rules apply.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You have the right to request access to your data, its correction or deletion, to
              restrict processing and to withdraw your consent at any time. Just write to me at{" "}
              {email}.
            </p>
            <p>
              If you believe your data has been processed unlawfully, you can file a complaint with
              the Serbian Commissioner for Information of Public Importance and Personal Data
              Protection (
              <a
                className="font-medium text-primary underline"
                href="https://www.poverenik.rs"
                target="_blank"
                rel="noreferrer noopener"
              >
                poverenik.rs
              </a>
              ) or with the data protection authority in your country.
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
