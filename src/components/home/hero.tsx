import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import heroImage from "@/assets/hero-rebule.jpg";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[94svh] items-center overflow-hidden pt-28">
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 py-10 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                rebule. digital © {new Date().getFullYear()}
              </span>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Sajtovi koji donose <span className="text-primary">klijente.</span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
                rebule. digital — web studio Bojana Crnića. Pravim brze, jasne i moderne sajtove za
                male firme, od ideje do lansiranja.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                className="rounded-2xl shadow-[0_12px_32px_-12px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
                asChild
              >
                <a href="#portfolio">
                  Pogledaj radove <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="rounded-2xl border-border bg-card hover:bg-card/80"
                asChild
              >
                <a href="#kontakt">Zakaži razgovor</a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                asChild
              >
                <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                  <SiWhatsapp className="size-4" /> WhatsApp poruka
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl border border-border/60 bg-card p-3 shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={heroImage}
                  alt="rebule. digital — Web studio za lokalne biznise"
                  width={1280}
                  height={720}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-border/60 bg-card px-5 py-3 shadow-xl md:flex">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Web Studio & Sistemi
                  </p>
                  <p className="text-sm font-semibold text-foreground">rebule. digital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
