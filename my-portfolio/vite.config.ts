import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jpark-portfolio/', // 꼭 repo 이름과 동일하게!
})
