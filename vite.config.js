import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "docs",
    rollupOptions: {
      input: [
        "index.html",
        "demo1_transition.html",
        "demo1_transition_slow.html",
        "demo2_transition.html",
        "demo2_transition_slow.html",
        "demo_realestate.html",
      ],
    },
    minify: false,
  },
  base: process.env.BASE_PATH ? "/svg_lesson/" : "./",
});
