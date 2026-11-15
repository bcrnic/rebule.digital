import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Briefcase, Building2, Scissors, Wrench } from "lucide-react";
import { reveal } from "@/lib/motion";
import { SectionTitle } from "./section-title";

// Delatnosti sa kojima studio radi; svaka vodi na svoju stranicu ili na studiju slučaja.
const audiences = [
  {
    icon: Scissors,
    title: "Frizerski i kozmetički saloni",
    text: "Cenovnik, galerija radova i zakazivanje termina porukom.",
    example: "Modni Frizer Vojkan",
    link: { to: "/sajt-za-frizerski-salon" },
  },
  {
    icon: Wrench,
    title: "Majstori i zanatlije",
    text: "Jasne usluge, dugme za hitan poziv i zakazivanje pregleda.",
    example: "REMIELECTRIC",
    link: { to: "/sajt-za-majstore" },
  },
  {
    icon: Briefcase,
    title: "Konsultanti i agencije",
    text: "Ponuda, rezultati i forma za poslovne upite umesto PDF brošure.",
    example: "MiSolutions",
    link: { to: "/projekat/$id", params: { id: "misolutions" } },
  },
  {
    icon: Building2,
    title: "Investitori i nekretnine",
    text: "Katalog stanova sa cenama, tlocrtima i oznakom slobodnih.",
    example: "Residence",
    link: { to: "/projekat/$id", params: { id: "residence" } },
  },
] as const;

export function Audience() {
  return (
    <section id="za-koga" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionTitle
          eyebrow="Za koga"
          title="Pravim sajtove za lokalne firme."
          text="Najviše radim sa firmama kojima telefon i preporuka više nisu dovoljni. Izaberite svoju delatnost i pogledajte primer."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, text, example, link }) => (
            <motion.div key={title} {...reveal}>
              <Link
                {...link}
                className="glass glass-hover group flex h-full flex-col p-7 transition-colors"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <p className="mt-auto pt-6 text-xs text-muted-foreground">
                  Primer: <span className="font-semibold text-foreground">{example}</span>
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  Pogledajte <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
