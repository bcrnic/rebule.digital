import { motion } from "motion/react";

/**
 * Plakatni naslov koji se pri skrolu otkriva reč po reč: svaka reč izlazi odozdo iz
 * "maske" (roditelj sa overflow-hidden). Tekst je ceo u HTML-u, pa ga čitači ekrana i
 * pretraživači vide normalno. Uz smanjeno kretanje (MotionConfig reducedMotion="user")
 * reči se odmah prikazuju jer se animira samo pomeraj.
 */
export function MaskedWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className="block"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.06 }}
    >
      {words.map((word, i) => (
        <span key={i}>
          {/* Mali vertikalni padding da maska ne odseče kvačice (Č, Š, Ž) i Anton dno slova. */}
          <span className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "115%" }, shown: { y: "0%" } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
