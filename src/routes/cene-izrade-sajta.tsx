import { createFileRoute } from "@tanstack/react-router";
import { LandingPageView, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/cene-izrade-sajta")({
  head: () => landingHead("/cene-izrade-sajta"),
  component: () => <LandingPageView path="/cene-izrade-sajta" />,
});
