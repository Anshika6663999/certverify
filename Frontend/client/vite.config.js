import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //api calls to backend
      "/api": {
        target: process.env.VITE_API_URL, // set in .env
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
