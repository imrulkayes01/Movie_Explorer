export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      movieApiKey: process.env.NUXT_PUBLIC_MOVIE_API_KEY || "",
      movieApiBaseUrl:
        process.env.NUXT_PUBLIC_MOVIE_API_BASE_URL ||
        "https://api.themoviedb.org/3",
      appUrl: process.env.NUXT_PUBLIC_APP_URL || "http://localhost:3000",
    },
  },

  nitro: {
    experimental: {
      wasm: true,
    },
  },
});
