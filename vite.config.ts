// vite.config.ts
import vitePluginVuedoc, { vueDocFiles } from "vite-plugin-vuedoc";
import { UserConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

const config: UserConfig = {
  plugins: [
    vitePluginVuedoc({ highlight: { theme: "one-dark" } }), // 1. Must be loaded before @vitejs/plugin-vue
    Vue({
      include: [/\.vue$/, /\.md$/, ...vueDocFiles], // 2. Must include .md | .vd files
    }),
    Pages({
      pagesDir: "view",
      extensions: ["vue", "md"],
    }),
  ],
};

export default config;
