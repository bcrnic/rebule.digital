import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { MaskedWords } from "@/components/ui/masked-words";
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
      className="relative scroll-mt-20 overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_28rem_at_20%_10%,rgba(255,255,255,0.22),transparent_70%),radial-gradient(36rem_26rem_at_85%_85%,rgba(255,255,255,0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-[90rem] gap-16 px-5 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="label-mono flex items-center gap-2 opacity-80">
            <span className="size-1.5 bg-[var(--logo-gold)]" aria-hidden="true" />
            <span>08</span>
            {t.kicker}
          </p>
          <h2 className="mt-8 font-poster text-[clamp(3.25rem,7vw,6.5rem)] uppercase leading-[0.96] tracking-normal">
            <MaskedWords text={t.title} />
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed opacity-75">{t.text}</p>
          <div className="mt-12 space-y-4 text-sm">
            <a className="flex w-fit items-center gap-3" href={`mailto:${CONTACT.email}`}>
              <Mail className="size-5" aria-hidden="true" />
              <span className="link-wipe">{CONTACT.email}</span>
            </a>
            <a className="flex w-fit items-center gap-3" href={`tel:${CONTACT.phone}`}>
              <Phone className="size-5" aria-hidden="true" />
              <span className="link-wipe">{CONTACT.phoneLabel}</span>
            </a>
            <a
              className="flex w-fit items-center gap-3 font-semibold"
              href={locale === "en" ? whatsappLink(WHATSAPP_MESSAGE_EN) : whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiWhatsapp className="size-5" aria-hidden="true" />
              <span className="link-wipe">{t.whatsapp}</span>
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
