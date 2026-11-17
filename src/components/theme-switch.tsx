import { Moon, Sun } from "lucide-react";
import { useUi } from "@/lib/i18n";

type ThemeSwitchProps = {
  isDark: boolean;
  onToggle: () => void;
};

/** Jednostavno dugme za temu: sunce u tamnoj, mesec u svetloj temi. */
export function ThemeSwitch({ isDark, onToggle }: ThemeSwitchProps) {
  const t = useUi().theme;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t.toLight : t.toDark}
      aria-pressed={isDark}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
