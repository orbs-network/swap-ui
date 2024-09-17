import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      // The default naming pattern for CSS classes in modules is [name]__[local]___[hash]
      // You can customize it if you want
      generateScopedName: '[name]__[local]___[hash:base64:5]',

      // Use camelCase for class names when importing in JavaScript
      localsConvention: 'camelCase', // 'camelCaseOnly' if you want to enforce only camelCase.
    }
  },
  server: {
    port: 3003,
  },
  define: {
    "process.env": process.env,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      fileName: (format) => `main.${format}.js`,
      name: "main",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: path.resolve(__dirname, "src/lib/index.ts"),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },

  },

  plugins: [
    svgr(),
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
      include: ["src/lib/**/*.*"],
    }),
    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: [
        "fs", // Excludes the polyfill for `fs` and `node:fs`.
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
});
