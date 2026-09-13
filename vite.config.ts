import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGhPages =
  process.env.GITHUB_PAGES === "true" || !!process.env.GITHUB_REPOSITORY;
const base = isGhPages ? "/rebule.digital" : "";

export default defineConfig({
  vite: {
    base: base ? `${base}/` : "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    router: {
      basepath: base,
    },
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
