import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    host: "::",
    port: 8082,
  },
  build: {
    target: 'es2022'
  },
  plugins: [
    react(),
    federation({
      name: 'userProfile',
      filename: 'remoteEntry.js',
      exposes: {
        './UserProfile': './src/UserProfile.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ]
});