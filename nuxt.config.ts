// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
      preload: ["go"],
      theme: "github-dark",
    },
  },

  googleFonts: {
    families: {
      "Roboto+Mono": {
        wght: [100, 400, 700, 900],
      },
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
  },
});
