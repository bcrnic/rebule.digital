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

export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  if (inquiry.website) return;
  await new Promise((resolve) => setTimeout(resolve, 800));
}
