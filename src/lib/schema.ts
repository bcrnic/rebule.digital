import { pricingPlans } from "@/content/pricing";
import {
  CONTACT,
  FOUNDER,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

const services = [
  { name: "Izrada sajtova za male firme", path: "/izrada-sajtova-novi-sad" },
  { name: "Online zakazivanje termina", path: "/online-zakazivanje-termina" },
  { name: "Sajt za frizerski i kozmetički salon", path: "/sajt-za-frizerski-salon" },
  { name: "Sajt za majstore i zanatlije", path: "/sajt-za-majstore" },
  { name: "Održavanje sajta", path: "/odrzavanje-sajta" },
];

const prices = pricingPlans.map((plan) => Number(plan.price.replace(/[^\d]/g, "")));

export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "rebule. web studio",
      url: SITE_URL,
      logo: absoluteUrl("/favicon-192x192.png"),
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      priceRange: `${Math.min(...prices)}–${Math.max(...prices)} €`,
      founder: { "@id": `${SITE_URL}/#founder` },
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.city,
        addressRegion: "Vojvodina",
        addressCountry: "RS",
      },
      areaServed: [
        { "@type": "City", name: "Novi Sad" },
        { "@type": "Country", name: "Srbija" },
        "BA",
        "ME",
        "HR",
      ],
      sameAs: [FOUNDER.linkedin, ...(CONTACT.instagram ? [CONTACT.instagram] : [])],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usluge izrade sajtova",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.name, url: absoluteUrl(service.path) },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: FOUNDER.name,
      jobTitle: "Full-stack Web Developer",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      url: SITE_URL,
      sameAs: [FOUNDER.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "sr-Latn",
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
