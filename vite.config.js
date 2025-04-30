import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "docs"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo1_transition: resolve(__dirname, 'demo1_transition.html'),
        demo1_transition_slow: resolve(__dirname, 'demo1_transition_slow.html'),
        demo2_transition: resolve(__dirname, 'demo2_transition.html'),
        demo2_transition_slow: resolve(__dirname, 'demo2_transition_slow.html'),
        demo_kanorealestate: resolve(__dirname, 'demo_kanorealestate.html'),
      }
    }
  },
  base: process.env.BASE_PATH ? "/svg_lesson/" : "./",
});