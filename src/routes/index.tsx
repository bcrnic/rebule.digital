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
import { seo } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      keywords:
        "izrada sajtova, web development novi sad, izrada sajtova novi sad, sajtovi za male firme, izrada veb sajta srbija, online zakazivanje termina, web studio, bojan crnic",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Technologies />
        <Services />
        <Pricing />
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
