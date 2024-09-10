import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import netlify from '@astrojs/netlify';
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime']
    }
  },
  adapter: netlify()
})
