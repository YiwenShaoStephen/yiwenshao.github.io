import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://yiwenshaostephen.github.io",
  base: "/yiwenshao.github.io",
  trailingSlash: "ignore",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()],
  },
});
