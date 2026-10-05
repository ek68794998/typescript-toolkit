import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		...configDefaults,
		coverage: {
			exclude: [
				...(configDefaults.coverage.exclude ?? []),
				"**/__test__/**",
				"**/build/**",
				"**/dist/**",
				"**/node_modules/**",
				"**/src/*/index.ts", // Barrel files (re-exports only).
			],
			provider: "v8",
			reporter: ["text", "text-summary", "html"],
			thresholds: {
				branches: 100,
				functions: 100,
				lines: 100,
				statements: 100,
			},
		},
		exclude: [...configDefaults.exclude, "**/build/**"],
		globals: true,
		include: ["./src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
	},
});
