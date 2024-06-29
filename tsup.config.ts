import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/main.ts', './src/worker.ts'],
  splitting: false,
  target: 'es2020',
  clean: true,
  dts: true,
  format: ['esm'],
})
