import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Prelaz između stranica (animacija je u styles.css). Samo kad se menja putanja,
    // ne za skok na #sidro na istoj stranici, i nikad uz smanjeno kretanje.
    defaultViewTransition: {
      types: ({ pathChanged }) =>
        pathChanged && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? ["rise"]
          : false,
    },
  });

  return router;
};
