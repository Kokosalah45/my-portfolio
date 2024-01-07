// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'node:fs'


export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Kerolous",
    },
  },

  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  content: {
    highlight: {
      preload: ["go" , "sql"  ],
      theme: "material-darker",
    },
  },
  keepalive: true,
  googleFonts: {
    families: {
      "Roboto+Mono": {
        wght: [100, 400, 700, 900],
      },
    },
  },
});
