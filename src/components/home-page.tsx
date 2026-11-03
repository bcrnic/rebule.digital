import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/portfolio";
import { Pricing } from "@/components/home/pricing";
import { Services } from "@/components/home/services";
import { Technologies } from "@/components/home/technologies";
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
        <Technologies />
        <Services />
        {/* Zasebna stranica sa cenama postoji samo na srpskom. */}
        <Pricing showMoreLink={locale === "sr"} />
        <Portfolio />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
