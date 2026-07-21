// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import tailwindcss from "@tailwindcss/vite"

const SITE_URL = "https://www.crce.info"
const RESTRICTED_PATHS = ["artist-enterprises-incubator"]

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    icon(),
    sitemap({
      filter: (page) =>
        !RESTRICTED_PATHS.map((path) => `${SITE_URL}/${path}/`).includes(page),
    }),
  ],
  fonts: [
    {
      name: "Roboto",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-roboto",
      fallbacks: ["sans-serif"],
      weights: ["100 900"],
    },
    {
      name: "Roboto Condensed",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-roboto-condensed",
      fallbacks: ["sans-serif"],
      weights: ["100 900"],
    },
  ],
  redirects: {
    "/student-training": "/people-researchers-students-faculty#student-team",
  },
  vite: { plugins: [tailwindcss()] },
})
