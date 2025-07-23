import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "9c9b5d3f3bef.ngrok-free.app", // Aquí va tu dominio ngrok actual
    ],
  },
});
