import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  ssr: false,

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:8000/api",
    },
  },

  vite: {
    build: {
      target: "esnext",
    },
    plugins: [
      federation({
        name: "taskManagerFrontend",
        filename: "remoteEntry.js",
        exposes: {
          "./TaskApp": "./app.vue",
        },
      }),
    ],
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  compatibilityDate: "2024-10-14",
});
