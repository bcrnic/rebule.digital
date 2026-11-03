import { z } from "zod";
import type { Locale } from "@/lib/i18n";

export const projectTypesByLocale: Record<Locale, readonly [string, ...string[]]> = {
  sr: [
    "Sajt za firmu / usluge",
    "Sistem za online zakazivanje",
    "Portfolio / Prezentacija",
    "Katalog / Internet prodavnica",
    "Redizajn i ubrzanje postojećeg sajta",
    "Nešto drugo",
  ],
  en: [
    "Business / services website",
    "Online booking system",
    "Portfolio / presentation",
    "Catalog / online shop",
    "Redesign or speed-up of an existing site",
    "Something else",
  ],
};

const messages: Record<Locale, { name: string; email: string; message: string }> = {
  sr: {
    name: "Unesite ime i prezime.",
    email: "Unesite ispravnu email adresu.",
    message: "Poruka mora imati bar 10 karaktera.",
  },
  en: {
    name: "Please enter your full name.",
    email: "Please enter a valid email address.",
    message: "Your message should be at least 10 characters.",
  },
};

export function createInquirySchema(locale: Locale) {
  const m = messages[locale];
  return z.object({
    name: z.string().trim().min(2, m.name),
    email: z.string().trim().email(m.email),
    phone: z.string().trim().optional(),
    type: z.enum(projectTypesByLocale[locale]),
    message: z.string().trim().min(10, m.message),
    website: z.string().max(0).optional(),
  });
}

export type Inquiry = z.infer<ReturnType<typeof createInquirySchema>>;

// Ime forme pod kojim Netlify Forms čuva upite (vidi `data-netlify` u contact-form.tsx).
export const INQUIRY_FORM_NAME = "kontakt";

export async function submitInquiry(inquiry: Inquiry, locale: Locale): Promise<void> {
  if (inquiry.website) return;

  const body = new URLSearchParams({ "form-name": INQUIRY_FORM_NAME, language: locale });
  for (const [key, value] of Object.entries(inquiry)) {
    if (value) body.append(key, value);
  }

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!response.ok) throw new Error(`Slanje upita nije uspelo (${response.status}).`);
}
