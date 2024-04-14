import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@types": resolve(__dirname, "src/types"),
      "@libs": resolve(__dirname, "src/libs"),
      "@store": resolve(__dirname, "src/store"),
      "@components": resolve(__dirname, "src/components"),
      "@layout": resolve(__dirname, "src/layout"),
    },
  },
});
