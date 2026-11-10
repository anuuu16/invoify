import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Unit tests. Logic tests run in Node; a component test can opt into the
// browser-like environment with `// @vitest-environment jsdom` at the top.
export default defineConfig({
    // Same JSX runtime as Next, so components and templates render without `import React`.
    esbuild: { jsx: "automatic" },
    resolve: {
        alias: { "@": fileURLToPath(new URL(".", import.meta.url)) },
    },
    test: {
        include: ["**/*.test.{ts,tsx}"],
        exclude: ["node_modules/**", ".next/**", "e2e/**"],
        passWithNoTests: true,
    },
});
