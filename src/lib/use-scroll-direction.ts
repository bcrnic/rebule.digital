import { useEffect, useState } from "react";

/**
 * Da li posetilac upravo skroluje nagore. Plutajući elementi se tada prikažu,
 * a dok čita i skroluje nadole sklanjaju se da ne zaklanjaju tekst.
 */
export function useScrollingUp(threshold = 8) {
  const [up, setUp] = useState(true);
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (Math.abs(y - last) < threshold) return;
      setUp(y < last);
      last = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [threshold]);
  return up;
}
