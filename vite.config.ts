import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Replace 'your-repo-name' with your actual repository name
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // This is crucial for GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  },
})
