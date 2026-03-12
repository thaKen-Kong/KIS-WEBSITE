import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows network access
    port: 5173, // or whatever port your app uses
    allowedHosts: ['arjun-lexical-thersa.ngrok-free.dev'],
  },
})
