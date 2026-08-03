import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://yiwenshaostephen.github.io",
  base: "/yiwenshao.github.io",
  trailingSlash: "ignore",
  outDir: "./docs",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
