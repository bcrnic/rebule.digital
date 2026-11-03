// Engleski tekstovi studija slučaja (/en/project/...). Slike, linkovi i tehnologije su u lib/projects.ts.
import type { ProjectMetric } from "@/lib/projects";

export type ProjectTranslation = {
  niche: string;
  client?: string;
  description: string;
  seoDescription: string;
  problem: string;
  solution: string;
  result: string;
  deliverables: string[];
  metrics: ProjectMetric[];
};

export const projectsEn: Record<string, ProjectTranslation> = {
  badbyte: {
    niche: "Website for a web studio",
    description:
      "A website for a web development studio from Novi Sad, with a clear offer, prices and a call to action.",
    seoDescription:
      "Case study: a website for a web development studio from Novi Sad with a clear offer, prices, client testimonials and a quote request form.",
    problem:
      "The studio offered several services, but had no website that presented them clearly and turned visitors into inquiries.",
    solution:
      "A modern website with an overview of services and prices, results, client testimonials and a quote request form.",
    result: "A clear offer in one place and more direct inquiries for collaboration.",
    deliverables: [
      "UI/UX design",
      "Front-end development",
      "SEO optimization",
      "Quote request form",
    ],
    metrics: [
      { label: "Services and prices", value: "Clear offer", hint: "Everything on one page" },
      { label: "Optimized website", value: "Speed", hint: "Lightweight code and images" },
      { label: "Direct inquiries", value: "Form", hint: "Quote requests with no middleman" },
    ],
  },
  "modni-frizer-vojkan": {
    niche: "Website for a hair salon",
    client: "Salon Vojkan",
    description:
      "A website for a women's hair salon with 40 years of tradition, a price list and appointment booking.",
    seoDescription:
      "Case study: a website for a women's hair salon in Novi Sad with 40 years of tradition. Price list, gallery and booking by message.",
    problem:
      "A salon with a long tradition had no website. Appointments were booked only by phone or in person.",
    solution:
      "An elegant website with services, a price list, a gallery and booking via WhatsApp, Viber and email.",
    result:
      "Clients now see prices and services in advance and book an appointment with one message.",
    deliverables: ["Price list design", "Online booking", "Mobile optimization", "Work gallery"],
    metrics: [
      { label: "Appointment booking", value: "By message", hint: "WhatsApp, Viber and email" },
      { label: "Prices upfront", value: "Price list", hint: "Clients know what they choose" },
      { label: "Built for phones", value: "Mobile", hint: "Clear on every screen" },
    ],
  },
  remielectric: {
    niche: "Website for electricians",
    description:
      "A website for electricians from Novi Sad with clear services and booking of a free inspection.",
    seoDescription:
      "Case study: a website for electricians from Novi Sad with a service overview, an emergency call button and booking of a free inspection.",
    problem:
      "Work came only through referrals, with no place where clients could see services, prices and a way to book a visit.",
    solution:
      "A website with an overview of all services, client reviews, frequently asked questions and a form for booking a free inspection.",
    result:
      "Clients now book inspections themselves, and emergency calls come straight from the website.",
    deliverables: ["Service presentation", "Emergency call system", "FAQ section", "Local SEO"],
    metrics: [
      { label: "Emergency button", value: "Urgent call", hint: "One tap from a phone" },
      { label: "Booking from the site", value: "Inspection", hint: "Free inspection form" },
      { label: "Google visibility", value: "Local SEO", hint: "For searches in Novi Sad" },
    ],
  },
  residence: {
    niche: "Website for selling apartments",
    client: "Residence developer",
    description:
      "A sales website for a property developer with an apartment catalog, filters by layout and availability status.",
    seoDescription:
      "Case study: a sales website for a property developer with an apartment catalog, prices, floor plans, filters by layout and availability labels.",
    problem:
      "Buyers had nowhere to see which apartments were available, how much they cost and what they looked like.",
    solution:
      "An overview of all apartments with prices, size, floor, galleries and a sold label, plus filters by number of rooms.",
    result: "Interested buyers arrive prepared, with a specific apartment in mind.",
    deliverables: [
      "Apartment catalog",
      "Layout filters",
      "Floor plans and gallery",
      "Inquiry per apartment",
    ],
    metrics: [
      { label: "All apartments in one place", value: "Catalog", hint: "Price, size and floor" },
      { label: "Search by layout", value: "Filters", hint: "By number of rooms" },
      { label: "Apartment availability", value: "Up to date", hint: "Sold / available labels" },
    ],
  },
  misolutions: {
    niche: "Website for a consulting agency",
    client: "MiSolutions Consulting",
    description:
      "A presentation website for a consulting agency focused on market research and sales growth.",
    seoDescription:
      "Case study: a presentation website for a market research consulting agency, with a clear offer, results and a B2B contact form.",
    problem: "The agency had excellent results, but no way to present them clearly to new clients.",
    solution:
      "A website structured around three main services, with results, client testimonials and a clear call to get in touch.",
    result:
      "A more serious first impression and an easier way to present the offer to potential clients.",
    deliverables: [
      "Offer structure",
      "Case study presentation",
      "B2B contact form",
      "Brand alignment",
    ],
    metrics: [
      { label: "Offer structure", value: "3 services", hint: "Clearly separated and explained" },
      { label: "Client results", value: "Case studies", hint: "Instead of a PDF brochure" },
      { label: "Business inquiries", value: "B2B form", hint: "Direct contact with the agency" },
    ],
  },
};
