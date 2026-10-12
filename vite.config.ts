import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'

const spaFallback = () => ({
  name: 'spa-fallback',
  closeBundle() {
    copyFileSync('dist/index.html', 'dist/404.html')
  },
})

export default defineConfig({
  base: './',
  plugins: [react(), spaFallback()],
})
