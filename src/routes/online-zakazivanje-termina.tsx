import { createFileRoute } from "@tanstack/react-router";
import { LandingPageView, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/online-zakazivanje-termina")({
  head: () => landingHead("/online-zakazivanje-termina"),
  component: () => <LandingPageView path="/online-zakazivanje-termina" />,
});
