import { useEffect, useState } from "react";

type ThemeSwitchProps = {
  isDark: boolean;
  onToggle: () => void;
};

/**
 * Prekidač teme sa suncem i mesecom (dizajn: Uiverse.io, abinandhs_7835).
 * Stilovi su u styles.css pod `.theme-switch`. Originalno je 90px, ovde je umanjen
 * na veličinu ostalih dugmadi u headeru.
 */
export function ThemeSwitch({ isDark, onToggle }: ThemeSwitchProps) {
  // Bez animacije dok se ne učita stvarna tema, da prekidač ne "odleti" pri otvaranju stranice.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <span className="theme-switch-wrap">
      <label className="theme-switch" data-ready={ready ? "" : undefined}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={onToggle}
          aria-label={isDark ? "Uključi svetlu temu" : "Uključi tamnu temu"}
        />
        <span className="switch-bg" aria-hidden="true">
          <span className="sky-vault">
            <span className="sun" />
            <span className="moon">
              <span className="craters">
                <span className="crater crater-1" />
                <span className="crater crater-2" />
                <span className="crater crater-3" />
              </span>
            </span>
          </span>
          <span className="sky-clouds">
            <span className="cloud cloud-1" />
            <span className="cloud cloud-2" />
          </span>
          <span className="sky-stars">
            <span className="star star-1" />
            <span className="star star-2" />
            <span className="star star-3" />
            <span className="star star-4" />
          </span>
          <span className="landscape">
            <span className="mountain mountain-1" />
            <span className="mountain mountain-2" />
            <span className="terrain" />
            <span className="tree tree-1" />
            <span className="tree tree-2" />
            <span className="tree tree-3" />
          </span>
        </span>
      </label>
    </span>
  );
}
