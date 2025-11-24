import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // encaminha chamadas para /auth para o backend no Render
      '/auth': {
        target: 'https://moverecifebackend.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/auth/, '/auth'),
      },
    },
  },
})
