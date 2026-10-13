# rebule. digital — Web studio za male firme

Zvanični vebsajt i portfolio studija **rebule. digital** (osnivač Bojan Crnić). Specijalizovan za izradu brzih, modernih sajtova i sistema za zakazivanje za lokalne firme i preduzetnike.

## 🛠️ Tehnologije

- **Framework**: [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- **UI & Stilovi**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Animacije**: [Motion](https://motion.dev/)
- **Ikone**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Build alat**: [Vite](https://vitejs.dev/) + [Nitro](https://nitro.unjs.io/)

## 🚀 Pokretanje projekta lokalno

1. Instalacija zavisnosti:

   ```bash
   npm install
   ```

2. Pokretanje razvojnog servera:

   ```bash
   npm run dev
   ```

3. Build za produkciju:

   ```bash
   npm run build
   ```

4. Preview produkcionog build-a:
   ```bash
   npm run preview
   ```

## 🔧 Skripte

- `npm run lint` — ESLint + Prettier provera
- `npm run typecheck` — TypeScript provera (`tsc --noEmit`)
- `npm run check` — lint + typecheck
- `npm run format` — formatiranje koda

## ⚙️ Konfiguracija

Kopirajte `.env.example` u `.env` i podesite vrednosti. Sve se čita u `src/lib/site.ts`.

| Varijabla                  | Opis                                     |
| -------------------------- | ---------------------------------------- |
| `VITE_SITE_URL`            | Javni domen (canonical, OG, JSON-LD)     |
| `VITE_CONTACT_EMAIL`       | Kontakt email                            |
| `VITE_CONTACT_PHONE`       | Telefon u međunarodnom formatu (bez `0`) |
| `VITE_CONTACT_PHONE_LABEL` | Telefon kako se prikazuje                |
| `VITE_INSTAGRAM_URL`       | Opciono; bez njega se ikona ne prikazuje |

## 🌐 Deploy

Sajt hostuje **Netlify** (podešavanja u `netlify.toml`): svaki push na `main` pokreće build,
a na hosting ide prerenderovan `.output/public`. GitHub Actions (`.github/workflows/ci.yml`)
proverava lint, typecheck i build na svakom PR-u. Domen `rebule.rs` je registrovan kod Loopie,
a DNS je na Cloudflare-u.

## 🗂️ Struktura

- `src/routes/` — rute (TanStack Router, file-based)
- `src/components/home/` — sekcije početne stranice
- `src/content/` — tekstualni sadržaj (usluge, FAQ, utisci)
- `src/lib/projects.ts` — portfolio projekti
- `src/lib/site.ts`, `seo.ts`, `schema.ts` — konfiguracija sajta, SEO helper, JSON-LD
- `src/lib/inquiry.ts` — validacija i slanje kontakt forme

## 📄 Licenca

© 2026 rebule. digital. Sva prava zadržana.
