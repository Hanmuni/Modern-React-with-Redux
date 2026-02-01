import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      axios: "axios/dist/browser/axios.cjs",
    },
  },
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
  ],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    force: true,
    include: ["axios"],
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
