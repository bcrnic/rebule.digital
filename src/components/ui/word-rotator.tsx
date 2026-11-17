import { useEffect, useState } from "react";

/**
 * Reč koja se smenjuje kao brojčanik (pozive. → klijente. → termine.). Reči stoje u
 * koloni unutar "prozora" visokog jedan red, a CSS animacija `word-rotate` pomera
 * kolonu gore sa pauzom na svakoj reči. Keyframes u styles.css su za tačno tri reči;
 * prva se ponavlja na kraju da krug bude bez skoka.
 *
 * Sa servera (i bez JS-a, uz smanjeno kretanje) ide samo prva reč, pa je h1 za
 * pretraživače i čitače ekrana uvek isti: "... pozive." Ostale reči se dodaju tek u
 * browseru i sakrivene su od čitača ekrana.
 */
export function WordRotator({
  words,
  className = "",
}: {
  words: readonly string[];
  className?: string;
}) {
  const [first = ""] = words;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && words.length > 1) setAnimate(true);
  }, [words.length]);

  if (!animate) return <span className={`block ${className}`}>{first}</span>;

  const loop = [...words, first];
  return (
    <span className={`block ${className}`}>
      <span className="sr-only">{first}</span>
      <span aria-hidden="true" className="block h-[0.92em] overflow-hidden">
        <span className="word-rotate block">
          {loop.map((word, i) => (
            <span key={i} className="block h-[1.15em] leading-[0.92]">
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
