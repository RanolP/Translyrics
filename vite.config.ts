import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import linaria from '@linaria/rollup';
import ssr from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/translyrics/',
  plugins: [
    preact(),
    linaria(),
    ssr({
      prerender: true,
    }),
  ],
});
