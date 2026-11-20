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
      "An elegant sales website for a twenty-apartment building: every apartment with price, size, floor, galleries and a sold label, plus filters by number of rooms and the move-in date.",
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
  "advokat-borovac": {
    niche: "Website for a law office",
    client: "Concept for attorney dr Vladimir Borovac",
    description:
      "A bilingual website for an attorney in Novi Sad specialising in trademark and industrial design protection.",
    seoDescription:
      "Case study: a bilingual website for a Novi Sad attorney specialising in trademark law, with practice areas, publications and a consultation form.",
    problem:
      "A lawyer with a narrow specialisation needs a website that builds trust at once and shows clearly what he is an expert in, for both local and foreign clients.",
    solution:
      "A calm, serious website in Serbian and English: practice areas from trademark law to litigation, an about page, publications and a form to book a consultation.",
    result:
      "The specialisation, published work and way of working are in one place, and foreign clients get the whole site in English.",
    deliverables: [
      "Serbian and English site",
      "Practice areas",
      "Publications",
      "Consultation form",
    ],
    metrics: [
      { label: "Languages", value: "SR + EN", hint: "For local and foreign clients" },
      { label: "Practice areas", value: "6 areas", hint: "From trademarks to litigation" },
      { label: "Published work", value: "Publications", hint: "Proof of specialisation" },
    ],
  },
  fizioterapija: {
    niche: "Website for physiotherapy and massage",
    client: "Concept for physiotherapist Miloš Malešević",
    description:
      "A website for a physiotherapist in Novi Sad with online booking: patients pick a free day and time.",
    seoDescription:
      "Case study: a website for a Novi Sad physiotherapist with services, patient reviews and online booking with a calendar of free slots.",
    problem:
      "Appointments are arranged by phone during therapy sessions, and patients cannot see which slots are free.",
    solution:
      "A warm one-page website with treatments, the course of therapy, reviews and FAQ, plus a booking calendar: patients pick a service, day and time, and the slot disappears from the offer at once.",
    result:
      "Booking works even while the therapist is with a patient, and he sees, adds and cancels appointments on a separate page.",
    deliverables: [
      "Online booking",
      "Calendar of free slots",
      "Appointment admin page",
      "Email notifications",
    ],
    metrics: [
      { label: "Booking", value: "Online", hint: "Free days and times" },
      { label: "Appointments", value: "Admin", hint: "Add and cancel" },
      { label: "Confirmation", value: "Email", hint: "To therapist and patient" },
    ],
  },
};
