import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "feeds",
  build: {
    assets: "_assets",
  },
  integrations: [react()],
});
