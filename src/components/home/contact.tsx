import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { CONTACT, WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { reveal } from "@/lib/motion";

export function Contact() {
  const locale = useLocale();
  const t = useUi().contact;
  const ids = useSectionIds();
  return (
    <section
      id={ids.contact}
      className="relative scroll-mt-20 overflow-hidden bg-primary py-24 text-primary-foreground sm:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_28rem_at_20%_10%,rgba(255,255,255,0.22),transparent_70%),radial-gradient(36rem_26rem_at_85%_85%,rgba(255,255,255,0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-[90rem] gap-16 px-5 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase opacity-70">{t.kicker}</p>
          <h2 className="mt-8 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
            {t.title}
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed opacity-75">{t.text}</p>
          <div className="mt-12 space-y-4 text-sm">
            <a
              className="flex items-center gap-3 transition-opacity hover:opacity-75"
              href={`mailto:${CONTACT.email}`}
            >
              <Mail className="size-5" aria-hidden="true" /> {CONTACT.email}
            </a>
            <a
              className="flex items-center gap-3 transition-opacity hover:opacity-75"
              href={`tel:${CONTACT.phone}`}
            >
              <Phone className="size-5" aria-hidden="true" /> {CONTACT.phoneLabel}
            </a>
            <a
              className="flex items-center gap-3 text-emerald-200 transition-opacity hover:opacity-75"
              href={locale === "en" ? whatsappLink(WHATSAPP_MESSAGE_EN) : whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiWhatsapp className="size-5" aria-hidden="true" /> {t.whatsapp}
            </a>
            <p className="flex items-center gap-3 opacity-75">
              <MapPin className="size-5" aria-hidden="true" /> {CONTACT.city} · {t.location}
            </p>
          </div>
        </div>

        <motion.div {...reveal}>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
