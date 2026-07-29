/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Mismo puerto que el Portal de Pacientes: las Azure Functions de maestros y
    // red de centros solo admiten http://localhost:3000 como origen (CORS).
    // `strictPort` evita que Vite salte a otro puerto si el 3000 está ocupado,
    // porque entonces las llamadas al API fallarían por CORS sin motivo evidente.
    port: 3000,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
    // La suite es grande (157 archivos, ~400 tests) y jsdom con varios workers en
    // paralelo hace que tests perfectamente sanos superen los 5s por defecto:
    // fallaban de forma intermitente y pasaban al ejecutarlos aislados.
    testTimeout: 20_000,
    hookTimeout: 20_000,
  },
})
