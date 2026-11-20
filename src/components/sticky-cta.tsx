import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { CONTACT, WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";
import { useScrollingUp } from "@/lib/use-scroll-direction";

/**
 * Lepljiva traka sa jednim pozivom na akciju. Pojavi se kad hero ode sa ekrana,
 * a sakrije se kad je kontakt forma vidljiva (tada je ionako pred očima).
 */
export function StickyCta() {
  const locale = useLocale();
  const t = useUi().stickyCta;
  const ids = useSectionIds();
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById(ids.contact);
    const observer = contact
      ? new IntersectionObserver(([entry]) => setContactVisible(Boolean(entry?.isIntersecting)), {
          rootMargin: "0px 0px -20% 0px",
        })
      : null;
    if (contact && observer) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [ids.contact]);

  // Sklanja se dok posetilac čita (skrol nadole), vraća se čim krene nagore.
  const scrollingUp = useScrollingUp();
  const visible = pastHero && !contactVisible && scrollingUp;

  const iconLink =
    "flex size-10 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background";

  return (
    <div
      role="region"
      aria-label={t.label}
      aria-hidden={!visible}
      className={`fixed bottom-5 left-4 z-40 flex items-center gap-1 rounded-full bg-foreground p-1.5 shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--foreground)_60%,transparent)] transition-all duration-300 sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={`mailto:${CONTACT.email}`}
        aria-label={t.email}
        tabIndex={visible ? 0 : -1}
        className={iconLink}
      >
        <Mail className="size-4" aria-hidden="true" />
      </a>
      <a
        href={locale === "en" ? whatsappLink(WHATSAPP_MESSAGE_EN) : whatsappLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={t.whatsapp}
        tabIndex={visible ? 0 : -1}
        className={iconLink}
      >
        <SiWhatsapp className="size-4" aria-hidden="true" />
      </a>
      <a
        href={`#${ids.contact}`}
        tabIndex={visible ? 0 : -1}
        className="ml-1 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-bright"
      >
        <span className="sm:hidden">{t.bookShort}</span>
        <span className="hidden sm:inline">{t.book}</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}
