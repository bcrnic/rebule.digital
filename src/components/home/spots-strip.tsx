import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { PhoneVideo } from "@/components/phone-video";
import { spotPoster, spotSrc, spots } from "@/content/spots";
import { reveal } from "@/lib/motion";

/** Usluge kao četiri kratka spota: video u telefonu, šta dobijate i link na stranicu usluge. */
export function SpotsStrip() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {spots.map((spot) => (
        <motion.article key={spot.id} {...reveal} className="flex flex-col">
          <PhoneVideo
            src={spotSrc(spot.id)}
            poster={spotPoster(spot.id)}
            label={`Kratak video: ${spot.title}`}
            aspect="540 / 960"
            className="mx-auto w-full max-w-[240px]"
          />
          <div className="mx-auto mt-6 flex w-full max-w-[280px] flex-1 flex-col">
            <h3 className="font-display text-xl font-semibold leading-tight">
              <Link to={spot.path} className="transition-colors hover:text-primary">
                {spot.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{spot.text}</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {spot.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to={spot.path}
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Saznajte više <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
