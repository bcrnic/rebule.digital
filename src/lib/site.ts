const env = import.meta.env;

export const SITE_URL = (env.VITE_SITE_URL ?? "https://rebule.rs").replace(/\/$/, "");
export const SITE_NAME = "rebule. digital";
export const SITE_TITLE = "Izrada sajtova Novi Sad za male firme | rebule. digital";
export const SITE_DESCRIPTION =
  "Izrada sajtova u Novom Sadu za male firme: brzi, moderni sajtovi i zakazivanje termina, fiksna cena unapred. Web studio Bojana Crnića.";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const FOUNDER = {
  name: "Bojan Crnić",
  linkedin: "https://www.linkedin.com/in/bojan-crni%C4%87-9b3305142/",
};

export const CONTACT = {
  email: env.VITE_CONTACT_EMAIL ?? "rebule26@gmail.com",
  phone: env.VITE_CONTACT_PHONE ?? "+381643007002",
  phoneLabel: env.VITE_CONTACT_PHONE_LABEL ?? "+381 64 300 7002",
  instagram: env.VITE_INSTAGRAM_URL as string | undefined,
  city: "Novi Sad",
};

export const WHATSAPP_MESSAGE = "Zdravo Bojane, zainteresovan sam za izradu sajta.";

export const whatsappLink = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
