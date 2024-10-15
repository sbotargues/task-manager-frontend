import federation from "@originjs/vite-plugin-federation";
import { defineNuxtConfig } from 'nuxt/config';

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
          "./TaskApp": "./pages/index.vue",
        },
      }),
    ],
    server: {
      cors: {
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      },
    },
  },

  compatibilityDate: "2024-10-14",
});
