import { defineNuxtConfig } from "nuxt";

//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/styles/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
  privateRuntimeConfig: {
    GAPI_KEY: process.env.GAPI_KEY,
  },
  // publicRuntimeConfig: {
  //   GAPI_KEY: process.env.GAPI_KEY,,
  // },
});
