import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["scarf-herself-proven.ngrok-free.dev"],
    host: true, // ensures external access
    port: 5173, // or your dev port
  },
});
