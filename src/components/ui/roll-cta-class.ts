// Klase za CTA dugme sa "rolanjem" (vidi roll-cta.tsx). U posebnom fajlu da bi
// roll-cta.tsx izvozio samo komponente (React Fast Refresh).

export const rollEase = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export const rollSizes = {
  md: {
    root: "h-12 pl-12 pr-5 hover:pl-5 hover:pr-12 focus-visible:pl-5 focus-visible:pr-12",
    knob: "left-2 size-8 group-hover/roll:left-[calc(100%-2.5rem)] group-focus-visible/roll:left-[calc(100%-2.5rem)]",
    icon: "size-4",
  },
  sm: {
    root: "h-9 pl-10 pr-4 hover:pl-4 hover:pr-10 focus-visible:pl-4 focus-visible:pr-10",
    knob: "left-1.5 size-6 group-hover/roll:left-[calc(100%-1.875rem)] group-focus-visible/roll:left-[calc(100%-1.875rem)]",
    icon: "size-3.5",
  },
} as const;

export type RollSize = keyof typeof rollSizes;

/** Klase za spoljni element (a ili Link). */
export function rollCtaClass(size: RollSize = "md", className = "") {
  return `group/roll relative isolate inline-flex w-fit items-center overflow-hidden rounded-full bg-primary text-sm font-semibold text-primary-foreground outline-none transition-[padding,color] duration-500 ${rollEase} hover:text-background focus-visible:text-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none ${rollSizes[size].root} ${className}`;
}
