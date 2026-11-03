// Engleski sadržaj početne (/en). Struktura je ista kao u home.ts.
import { CalendarCheck, Code2, Globe2, RefreshCw } from "lucide-react";
import type { Service } from "./home";

export const servicesEn: Service[] = [
  {
    icon: Globe2,
    title: "Websites for small businesses",
    text: "A clear offer, a professional first impression and more real inquiries for your business.",
  },
  {
    icon: CalendarCheck,
    title: "Online booking",
    text: "Simple booking that saves time for you and your clients.",
  },
  {
    icon: Code2,
    title: "Portfolio websites",
    text: "Your best work, presented quickly and clearly, with nothing extra.",
  },
  {
    icon: RefreshCw,
    title: "Maintenance and updates",
    text: "Reliable changes, upgrades and support after your site goes live.",
  },
];

export const testimonialsEn = [
  {
    name: "Modni Frizer Vojkan",
    role: "Hair salon owner",
    project: "modni-frizer-vojkan",
    text: "We got an elegant website where clients see our services and book through WhatsApp. The phone interrupts us far less during haircuts.",
    highlight: "Booking by message instead of by phone",
  },
  {
    name: "REMIELECTRIC",
    role: "Electrical installation team",
    project: "remielectric",
    text: "The best investment for our business. The site is clear and fast, and people call us right away for emergencies or book a free inspection.",
    highlight: "Emergency call button on every page",
  },
  {
    name: "MiSolutions",
    role: "Consulting and market research",
    project: "misolutions",
    text: "Bojan understood exactly what we needed. Instead of a bulky catalog, we got a website that builds authority right away and brings serious B2B inquiries.",
    highlight: "A website instead of a bulky PDF catalog",
  },
  {
    name: "Badbyte Studio",
    role: "Digital agency",
    project: "badbyte",
    text: "Very fast delivery, modern design and clear communication with no time wasted. Highly recommended.",
    highlight: "Fast delivery and clear communication",
  },
];

export const faqsEn = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Usually 7 to 14 working days from the moment we gather the basic information and agree on the structure. Smaller sites can be ready sooner.",
  },
  {
    question: "How much does it cost, and are there hidden costs?",
    answer:
      "Websites start at 250 € for one page, 490 € for up to 5 pages and 650 € with booking by message. Maintenance is 30 € per month. Before we start, you get a precise fixed-price quote, so there are no surprises later.",
  },
  {
    question: "Do you work with clients outside Serbia?",
    answer:
      "Yes. I work remotely with clients from other countries. We talk over video calls, email or WhatsApp, and all prices are in euros.",
  },
  {
    question: "What if I don't have texts and photos ready?",
    answer:
      "No problem. I help you define clear messages and an offer that sells, and choose visuals that suit your business.",
  },
  {
    question: "Will the site be fast and work well on phones?",
    answer:
      "Yes. I build every site mobile-first, optimize it to load fast and adapt it to every screen size.",
  },
  {
    question: "What happens after launch?",
    answer:
      "After launch I provide technical support, free small changes and an optional monthly maintenance plan, so your site stays secure and up to date.",
  },
];

export const aboutPointsEn = [
  "Direct communication",
  "Clear deadlines",
  "Mobile-first approach",
  "Support after launch",
];
