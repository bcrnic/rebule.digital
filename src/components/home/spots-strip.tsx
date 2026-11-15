import { motion } from "motion/react";
import { PhoneVideo } from "@/components/phone-video";
import { spotPoster, spotSrc, spots } from "@/content/spots";
import { reveal } from "@/lib/motion";

/** Četiri kratka spota u okvirima telefona: svaka usluga u 13 sekundi. */
export function SpotsStrip() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-8">
      {spots.map((spot) => (
        <motion.figure key={spot.id} {...reveal} className="flex flex-col">
          <PhoneVideo
            src={spotSrc(spot.id)}
            poster={spotPoster(spot.id)}
            label={`Kratak video: ${spot.title}`}
            aspect="540 / 960"
            className="mx-auto w-full max-w-[260px]"
          />
          <figcaption className="mx-auto mt-5 max-w-[260px]">
            <p className="font-display text-lg font-semibold leading-tight sm:text-xl">
              {spot.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{spot.text}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
