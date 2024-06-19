import { readFileSync } from 'node:fs'
import { ModuleOptions } from 'nuxt/schema';



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
      theme : "one-dark-pro",
      preload: ["plsql" , "sql" , 'go' , 'docker'
      ],
      
     
    },
    
  },
  googleFonts: {
    families: {
      "Roboto+Mono": {
        wght: [100, 400, 700, 900],
      },
    },
  },
});
