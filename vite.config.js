import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Chen-s-Personal-Website/",
  build: {
    outDir: "docs",
  }
})
