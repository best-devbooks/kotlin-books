import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://best-devbooks.github.io",
  base: "/kotlin-books",
  output: "static",
  trailingSlash: "always",
});
