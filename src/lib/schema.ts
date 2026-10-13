import { CONTACT, FOUNDER, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const services = [
  "Sajtovi za male firme i preduzetnike",
  "Sistemi za online zakazivanje termina",
  "Portfolio i prezentacioni sajtovi",
];

export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "rebule. web studio",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      email: CONTACT.email,
      founder: {
        "@type": "Person",
        name: FOUNDER.name,
        jobTitle: "Full-stack Web Developer",
        url: FOUNDER.linkedin,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT.city,
        addressCountry: "RS",
      },
      areaServed: ["RS", "BA", "ME", "HR"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Usluge",
        itemListElement: services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
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
