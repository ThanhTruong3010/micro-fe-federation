import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    target: "es2022",
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    federation({
      name: "host-app",
      remotes: {
        productCatalog: "http://localhost:8081/assets/remoteEntry.js",
        userProfile: "http://localhost:8082/assets/remoteEntry.js",
        analytics: "http://localhost:8083/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
