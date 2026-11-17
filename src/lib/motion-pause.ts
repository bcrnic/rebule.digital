import { useSyncExternalStore } from "react";

// Globalno dugme "Pauziraj animacije" (WCAG 2.2.2: sadržaj koji se sam kreće duže od
// 5 s mora moći da se zaustavi). Stanje je atribut data-motion="paused" na <html>, pa
// CSS animacije (marquee, smenjivanje reči) staju same, a skripte ga čitaju preko
// isMotionPaused(). Izbor se pamti u localStorage.

const KEY = "animacije";
const EVENT = "motion-pause-change";

export function isMotionPaused() {
  return typeof document !== "undefined" && document.documentElement.dataset["motion"] === "paused";
}

export function setMotionPaused(paused: boolean) {
  const root = document.documentElement;
  if (paused) root.dataset["motion"] = "paused";
  else delete root.dataset["motion"];
  try {
    window.localStorage.setItem(KEY, paused ? "paused" : "on");
  } catch {
    // Privatni režim: radi, samo se ne pamti.
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Pri pokretanju vrati sačuvan izbor (poziva se jednom, iz korena aplikacije). */
export function restoreMotionPause() {
  try {
    if (window.localStorage.getItem(KEY) === "paused") setMotionPaused(true);
  } catch {
    // Nema storage-a: animacije ostaju uključene.
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

export function useMotionPaused() {
  return useSyncExternalStore(subscribe, isMotionPaused, () => false);
}
