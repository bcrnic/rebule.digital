import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { seo } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      alternates: { sr: "/", en: "/en" },
    }),
  component: HomePage,
});
