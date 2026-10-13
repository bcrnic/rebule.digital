import { OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/site";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  type?: "website" | "article";
  image?: string;
};

export function seo({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  image = OG_IMAGE,
}: SeoOptions) {
  const url = absoluteUrl(path);
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
  };
}
