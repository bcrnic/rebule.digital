import { createFileRoute } from "@tanstack/react-router";
import { LandingPageView, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/sajt-za-majstore")({
  head: () => landingHead("/sajt-za-majstore"),
  component: () => <LandingPageView path="/sajt-za-majstore" />,
});
