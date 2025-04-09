import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from LAN & external networks
    port: 5173, // Change port if needed
    strictPort: true, // Ensures the exact port is used
    open: true, // Opens browser on start
    cors: true, // Enables CORS
    allowedHosts: [
      "c542-103-165-103-58.ngrok-free.app", // Allow this specific host
      ".ngrok-free.app" // Allow all ngrok hosts
    ]
  }
})
