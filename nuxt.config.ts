// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  ssr: false,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],

  googleFonts: {
    families: {
      "Roboto+Mono": {
        wght: [100, 400, 700, 900],
      },
    },
  },
});
