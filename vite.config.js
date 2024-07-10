import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-type-animation', 'react-icons/fa', '@tsparticles/react', '@tsparticles/slim']
    }
  }
})
