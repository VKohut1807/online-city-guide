// Plugins
import vue from "@vitejs/plugin-vue";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls: {} },
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue",
      ".scss",
    ],
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/styles/main.scss" as *;`,
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
