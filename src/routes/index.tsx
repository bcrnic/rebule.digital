import { createFileRoute } from "@tanstack/react-router";
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
import { faqs } from "@/content/home";
import { faqSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    }),
  component: HomePage,
});

function HomePage() {
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
        <Pricing showMoreLink />
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
