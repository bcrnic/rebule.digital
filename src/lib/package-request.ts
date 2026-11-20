// Izbor paketa iz cenovnika prenosi se u kontakt formu, da posetilac ne objašnjava ponovo šta želi.
// Radi i preko stranica: izbor se čuva u sessionStorage, a forma ga pročita kad se prikaže.

const KEY = "rebule-paket";
const EVENT = "rebule:paket";

export type PackageRequest = { name: string; price: string };

export function requestPackage(pkg: PackageRequest) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(pkg));
  } catch {
    // Privatni režim: prenos radi samo na istoj stranici, preko događaja ispod.
  }
  window.dispatchEvent(new CustomEvent<PackageRequest>(EVENT, { detail: pkg }));
}

/** Pretplata na izbor paketa; odmah javi i paket izabran na prethodnoj stranici. */
export function onPackageRequest(handler: (pkg: PackageRequest) => void) {
  try {
    const saved = sessionStorage.getItem(KEY);
    if (saved) {
      sessionStorage.removeItem(KEY);
      handler(JSON.parse(saved) as PackageRequest);
    }
  } catch {
    // Bez storage-a ostaje samo događaj.
  }
  const listener = (e: Event) => {
    try {
      sessionStorage.removeItem(KEY);
    } catch {
      // ignorisano
    }
    handler((e as CustomEvent<PackageRequest>).detail);
  };
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
