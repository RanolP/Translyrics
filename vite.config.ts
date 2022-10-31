import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import linaria from '@linaria/rollup';
import ssr from 'vite-plugin-ssr/plugin';
import process from 'node:process';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: '/translyrics/',
  plugins: [
    preact(),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    ssr({
      prerender: true,
    }),
  ],
});
