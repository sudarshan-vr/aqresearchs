import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Fallback to index.html for all routes (SPA mode)
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
