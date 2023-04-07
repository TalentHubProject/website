import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: "https://talent-hub.fr/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), robotsTxt()
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});