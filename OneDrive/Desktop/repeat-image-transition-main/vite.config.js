import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add this new section to handle the Lenis source map warning
  optimizeDeps: {
    exclude: ['lenis'] // Prevents Vite from processing Lenis
  },
  
  // Optional: Add this if you want to suppress source map warnings completely
  esbuild: {
    legalComments: 'none' // Removes source map comments from bundled files
  }
})