import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const basePath = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  },
})
