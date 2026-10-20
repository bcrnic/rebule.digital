import { createFileRoute } from "@tanstack/react-router";
import { LandingPageView, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/odrzavanje-sajta")({
  head: () => landingHead("/odrzavanje-sajta"),
  component: () => <LandingPageView path="/odrzavanje-sajta" />,
});
