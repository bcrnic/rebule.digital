import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Sajt je statičan (prerender) i servira se sa korena domena rebule.rs.
// Fiksiran preset sprečava da Nitro na Netlify-ju automatski pređe na SSR funkcije;
// na hosting ide samo .output/public.
export default defineConfig({
  nitro: { preset: "cloudflare-module" },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/projekat/badbyte", prerender: { enabled: true } },
      { path: "/projekat/modni-frizer-vojkan", prerender: { enabled: true } },
      { path: "/projekat/remielectric", prerender: { enabled: true } },
      { path: "/projekat/residence", prerender: { enabled: true } },
      { path: "/projekat/misolutions", prerender: { enabled: true } },
      { path: "/privatnost", prerender: { enabled: true } },
      { path: "/izrada-sajtova-novi-sad", prerender: { enabled: true } },
      { path: "/cene-izrade-sajta", prerender: { enabled: true } },
      { path: "/online-zakazivanje-termina", prerender: { enabled: true } },
      { path: "/sajt-za-frizerski-salon", prerender: { enabled: true } },
      { path: "/sajt-za-majstore", prerender: { enabled: true } },
      { path: "/odrzavanje-sajta", prerender: { enabled: true } },
    ],
  },
});
