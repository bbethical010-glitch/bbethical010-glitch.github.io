import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Root base for user GitHub Pages (bbethical010-glitch.github.io)
})
