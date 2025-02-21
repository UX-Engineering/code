import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Code Tutorials',
          description: 'A curated collection of the best resources for designers and developers. This platform provides a searchable directory of tutorials, tools, and learning materials to help developers and designers enhance their skills.',
        },
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});