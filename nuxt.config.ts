import webpack, { Configuration as WebpackConfig } from "webpack";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:8000/api",
    },
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config: WebpackConfig, { isClient }: { isClient: boolean }) {
      if (isClient) {
        if (!config.plugins) {
          config.plugins = [];
        }

        config.plugins.push(
          new webpack.container.ModuleFederationPlugin({
            name: "taskManagerFrontend",
            filename: "remoteEntry.js",
            exposes: {
              "./TaskApp": "./pages/index.vue",
            },
            shared: {
              vue: {
                singleton: true,
                eager: true,
                requiredVersion: false,
              },
              pinia: {
                singleton: true,
                eager: true,
                requiredVersion: false,
              },
            },
          })
        );
      }
    },
  },

  compatibilityDate: "2024-10-14",
});
