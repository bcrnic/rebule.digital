import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useUi } from "@/lib/i18n";

/** Dugme "nazad na vrh": pojavi se kad se skroluje niže od jednog ekrana. */
export function BackToTop() {
  const t = useUi().footer;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={t.backToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_32px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
