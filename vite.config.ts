import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
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
    ],
  },
});
