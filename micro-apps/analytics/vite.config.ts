import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    host: "::",
    port: 8083,
  },
  build: {
    target: 'es2022'
  },
  plugins: [
    react(),
    federation({
      name: 'analytics',
      filename: 'remoteEntry.js',
      exposes: {
        './Analytics': './src/Analytics.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ]
});