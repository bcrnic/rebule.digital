import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { seo } from "@/lib/seo";
import { SITE_DESCRIPTION_EN, SITE_TITLE_EN } from "@/lib/site";

export const Route = createFileRoute("/en/")({
  head: () =>
    seo({
      title: SITE_TITLE_EN,
      description: SITE_DESCRIPTION_EN,
      path: "/en",
      locale: "en",
      alternates: { sr: "/", en: "/en" },
    }),
  component: HomePage,
});
