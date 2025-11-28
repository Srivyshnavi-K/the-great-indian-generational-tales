import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBasePath = '/the-great-indian-generational-tales/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the app from /<repo-name>, so only use the base path in builds.
  base: command === 'serve' ? '/' : repoBasePath,
  plugins: [react()],
}))
