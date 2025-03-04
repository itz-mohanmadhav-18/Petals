import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Assuming this exists in v4+

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Using the official plugin
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  publicDir: 'public',
});