import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Manifest } from "@/components/home/manifest";
import { Portfolio } from "@/components/home/portfolio";
import { Process } from "@/components/home/process";
import { Pricing } from "@/components/home/pricing";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { getHomeContent } from "@/content/home";
import { useLocale } from "@/lib/i18n";
import { faqSchema } from "@/lib/schema";

/** Početna stranica; isti raspored za / i /en, tekstovi zavise od jezika. */
export function HomePage() {
  const locale = useLocale();
  const { faqs } = getHomeContent(locale);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", ...faqSchema(faqs) }),
        }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        {/* Radovi odmah posle uvoda: za studio su oni glavni dokaz. */}
        <Portfolio />
        <Manifest />
        <About />
        {/* Usluge; na srpskom i delatnosti koje vode na stranice usluga. */}
        <Services />
        <Process />
        {/* Zasebna stranica sa cenama postoji samo na srpskom. */}
        <Pricing number="05" showMoreLink={locale === "sr"} />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
