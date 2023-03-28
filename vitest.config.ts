import { defineConfig } from 'vite';
import path from 'path';
import react from '@testing-library/react'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
