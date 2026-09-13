import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/projekat/badbyte",
        "/projekat/modni-frizer-vojkan",
        "/projekat/remielectric",
        "/projekat/residence",
        "/projekat/misolutions",
      ],
    },
  },
});
