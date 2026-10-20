import { createFileRoute } from "@tanstack/react-router";
import { LandingPageView, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/sajt-za-frizerski-salon")({
  head: () => landingHead("/sajt-za-frizerski-salon"),
  component: () => <LandingPageView path="/sajt-za-frizerski-salon" />,
});
