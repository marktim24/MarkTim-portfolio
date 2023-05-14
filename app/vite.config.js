import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/MarkTim-portfolio/tree/gh-pages/',
	build: {
		outDir: 'dist',
	},
	plugins: [react()],
})
