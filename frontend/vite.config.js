import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Optional: Add path alias for cleaner imports
    },
  },
  server: {
    port: 3000, // Optional: Change the port if needed
  },
});
