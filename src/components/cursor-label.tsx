import { useEffect, useRef, useState } from "react";

/**
 * Natpis koji prati miš iznad elemenata sa `data-cursor="..."` (npr. "Pogledaj studiju
 * slučaja" iznad kartice projekta). Običan kursor ostaje, natpis je samo dodatak.
 * Postoji samo uz miš; uz smanjeno kretanje ide tačno uz kursor, bez "kašnjenja".
 */
export function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let frame = 0;
    let current = "";

    const render = () => {
      const k = reduce ? 1 : 0.22;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame =
        Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.3
          ? requestAnimationFrame(render)
          : 0;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const host = (event.target as Element | null)?.closest<HTMLElement>("[data-cursor]");
      const next = host?.dataset["cursor"] ?? "";
      target.x = event.clientX + 18;
      target.y = event.clientY + 18;
      if (next && !current) {
        // Natpis se pojavljuje tačno kod kursora, ne "doleće" sa poslednjeg mesta.
        pos.x = target.x;
        pos.y = target.y;
      }
      if (next !== current) {
        current = next;
        // Pri nestajanju tekst ostaje do kraja animacije, menja se samo vidljivost.
        if (next) setLabel(next);
        setVisible(Boolean(next));
      }
      if (current && !frame) frame = requestAnimationFrame(render);
    };
    const onLeave = () => {
      current = "";
      setVisible(false);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] will-change-transform"
    >
      <span
        className={`label-mono block whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-background shadow-lg transition-[opacity,scale] duration-200 ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
