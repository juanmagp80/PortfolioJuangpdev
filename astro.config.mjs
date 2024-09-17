import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({

  integrations: [tailwind(), robotsTxt(), react(),],
  site: 'https://porfolio.dev/'
})
