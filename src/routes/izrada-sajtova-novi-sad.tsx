import { createFileRoute } from "@tanstack/react-router";
import { LandingPageView, landingHead } from "@/components/landing-page";

export const Route = createFileRoute("/izrada-sajtova-novi-sad")({
  head: () => landingHead("/izrada-sajtova-novi-sad"),
  component: () => <LandingPageView path="/izrada-sajtova-novi-sad" />,
});
