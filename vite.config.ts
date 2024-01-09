import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "web-components",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    emptyOutDir: true,
    outDir: "dist",
  },
});
