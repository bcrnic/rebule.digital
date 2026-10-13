import { z } from "zod";

export const projectTypes = [
  "Sajt za firmu / usluge",
  "Sistem za online zakazivanje",
  "Portfolio / Prezentacija",
  "Katalog / Internet prodavnica",
  "Redizajn i ubrzanje postojećeg sajta",
  "Nešto drugo",
] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Unesite ime i prezime."),
  email: z.string().trim().email("Unesite ispravnu email adresu."),
  phone: z.string().trim().optional(),
  type: z.enum(projectTypes),
  message: z.string().trim().min(10, "Poruka mora imati bar 10 karaktera."),
  website: z.string().max(0).optional(),
});

export type Inquiry = z.infer<typeof inquirySchema>;

// Ime forme pod kojim Netlify Forms čuva upite (vidi `data-netlify` u contact-form.tsx).
export const INQUIRY_FORM_NAME = "kontakt";

export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  if (inquiry.website) return;

  const body = new URLSearchParams({ "form-name": INQUIRY_FORM_NAME });
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
