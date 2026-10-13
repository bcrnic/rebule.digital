import { motion } from "motion/react";
import { Quote, Sparkles, Star } from "lucide-react";
import { testimonials } from "@/content/home";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

export function Testimonials() {
  return (
    <section id="utisci" className="scroll-mt-20 py-24 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle
          number="05"
          eyebrow="Utisci klijenata"
          title="Šta kažu vlasnici sa kojima sarađujem."
          text="Direktna saradnja, jasna komunikacija i rešenja prilagođena konkretnom poslu."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((item) => (
            <motion.figure
              {...reveal}
              key={item.name}
              className="glass flex flex-col justify-between p-8 sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex gap-1 text-amber-500"
                    role="img"
                    aria-label="5 od 5 zvezdica"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="size-4 fill-amber-500" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="size-6 text-primary/40" aria-hidden="true" />
                </div>
                <blockquote className="mt-6 text-lg leading-relaxed text-foreground">
                  „{item.text}“
                </blockquote>
              </div>

              <figcaption className="mt-8 border-t border-border pt-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-base font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Sparkles className="size-3.5" aria-hidden="true" />
                    {item.highlight}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
