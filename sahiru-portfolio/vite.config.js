import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this line, replacing with your EXACT GitHub repo name
  base: '/MyPortfolio/', 
})