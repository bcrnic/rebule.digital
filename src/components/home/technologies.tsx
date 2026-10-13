import { technologies } from "@/content/home";

export function Technologies() {
  return (
    <section aria-label="Tehnologije" className="relative">
      <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-4 px-5 py-10 sm:grid-cols-4 lg:px-10">
        {technologies.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="glass glass-hover flex h-24 items-center justify-center gap-3 text-muted-foreground hover:text-primary"
          >
            <Icon className="size-6" aria-hidden="true" />
            <span className="font-display text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
