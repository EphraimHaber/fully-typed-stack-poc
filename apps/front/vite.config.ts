import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@repo/backend-api-client': resolve(__dirname, '../../packages/backend-api-client/src'),
    },
  },
  optimizeDeps: {
    include: ['@repo/backend-api-client'],
  },
  build: {
    sourcemap: true,
  },
});
