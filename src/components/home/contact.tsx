import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { CONTACT, whatsappLink } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { reveal } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-24 text-primary-foreground sm:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_28rem_at_20%_10%,rgba(255,255,255,0.22),transparent_70%),radial-gradient(36rem_26rem_at_85%_85%,rgba(255,255,255,0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-[90rem] gap-16 px-5 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase opacity-70">(08) Kontakt</p>
          <h2 className="mt-8 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
            Hajde da napravimo nešto što radi.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed opacity-75">
            Ispričajte mi ukratko o svom poslu. Odgovoriću u roku od jednog radnog dana sa prvim
            predlogom.
          </p>
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
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiWhatsapp className="size-5" aria-hidden="true" /> Pišite mi na WhatsApp
            </a>
            <p className="flex items-center gap-3 opacity-75">
              <MapPin className="size-5" aria-hidden="true" /> {CONTACT.city} · rad sa klijentima
              svuda
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
