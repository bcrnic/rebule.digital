import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { getHomeContent } from "@/content/home";
import { useLocale, useSectionIds, useUi } from "@/lib/i18n";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const locale = useLocale();
  const t = useUi().faq;
  const ids = useSectionIds();
  const { faqs } = getHomeContent(locale);

  return (
    <section id={ids.faq} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle number="07" eyebrow={t.eyebrow} title={t.title} text={t.text} />
        <div className="mt-10 grid items-start gap-x-12 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-button-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <motion.div
                {...reveal}
                key={faq.question}
                className="overflow-hidden border-b border-foreground/15"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground transition-colors duration-300 ${
                        isOpen ? "bg-foreground text-background" : ""
                      }`}
                    >
                      <Plus
                        className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 pr-12 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
