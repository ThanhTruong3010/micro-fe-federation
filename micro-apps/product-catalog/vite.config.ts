import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    host: "::",
    port: 8081,
  },
  build: {
    target: 'es2022'
  },
  plugins: [
    react(),
    federation({
      name: 'productCatalog',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductCatalog': './src/ProductCatalog.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ]
});