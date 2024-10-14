import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:8000/api",
    },
  },

  vite: {
    plugins: [
      federation({
        name: "taskManagerFrontend",
        filename: "remoteEntry.js",
        exposes: {
          "./TaskApp": "./pages/index.vue",
        },
        shared: ["vue", "pinia"],
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
});
