import { About } from "@/components/home/about";
import { Audience } from "@/components/home/audience";
import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/portfolio";
import { Pricing } from "@/components/home/pricing";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
        {/* Lice studija odmah posle uvoda: radite direktno sa mnom. */}
        <About />
        <Services />
        {/* Delatnosti vode na srpske stranice usluga, pa samo na srpskoj verziji. */}
        {locale === "sr" && <Audience />}
        {/* Zasebna stranica sa cenama postoji samo na srpskom. */}
        <Pricing showMoreLink={locale === "sr"} />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
